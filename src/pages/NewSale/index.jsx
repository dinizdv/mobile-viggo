import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import '../../styles/newSale.css'
import { useRef } from "react";

const NewSale = () => {
  const DATAS_CPF = ['05', '12', '19', '26']; // Datas fictícias para CPF
const DATAS_CNPJ = ['02', '08', '15', '22']; // Datas fictícias para CNPJ

  const [tipoCliente, setTipoCliente] = useState("cpf");
  const [formData, setFormData] = useState({
    cpf_cnpj: "",
    nome: "",
    data_nascimento: "",
    mae: "",
    email: "",
    telefone: "",
    outro_contato: "",
    cep: "",
    numero: "",
    bairro: "",
    rua: "",
    uf: "",
    banda_larga: "",
    tv: "",
    linha_fixa: "",
    servicos_adicionais_fixo_1: "",
    servicos_adicionais_fixo_2: "",
    servicos_adicionais_fixo_3: "",
    produto_movel: "",
    dia_fatura: "",
    forma_pagamento: "",
    banco: "",
    agencia: "",
    conta: "",
    email_fatura: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTipoClienteChange = (tipo) => {
    setTipoCliente(tipo);
    setFormData({...formData, cpf_cnpj: ''});
    
    // Atualizar datas de fatura automaticamente
    const datas = tipo === 'cpf' ? DATAS_CPF : DATAS_CNPJ;
    setFormData(prev => ({
      ...prev,
      dia_fatura: ''
    }));
  };

  useEffect(() => {
    // Preencher o select com as datas baseadas no tipo de cliente atual
    const select = document.getElementById('dia-fatura');
    while (select.options.length > 1) {
      select.remove(1);
    }
    
    const datasAtuais = tipoCliente === 'cpf' ? DATAS_CPF : DATAS_CNPJ;
    datasAtuais.forEach(data => {
      const option = document.createElement('option');
      option.value = data;
      option.textContent = data;
      select.add(option);
    });
  }, [tipoCliente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Cliente:", formData);
  };

  const formatarCEP = (cep) => {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length >= 5) {
        return cepLimpo.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }
    return cepLimpo;
};

const buscarCEP = async (cep) => {
  const cepLimpo = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
  
  if (cepLimpo.length !== 8) { // Valida se o CEP tem 8 dígitos
      setFormData(prev => ({
          ...prev,
          bairro: '',
          rua: '',
          uf: ''
      }));
      return;
  }

  try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (!response.ok) throw new Error("Erro na requisição");

      const dados = await response.json();

      if (!dados.erro) {
          setFormData(prev => ({
              ...prev,
              bairro: dados.bairro || '',
              rua: dados.logradouro || '',
              uf: dados.uf || ''
          }));
      } else {
          console.warn("CEP não encontrado");
          setFormData(prev => ({
              ...prev,
              bairro: '',
              rua: '',
              uf: ''
          }));
      }
  } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setFormData(prev => ({
          ...prev,
          bairro: '',
          rua: '',
          uf: ''
      }));
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  
  if (name === "cep") {
      let valorFormatado = formatarCEP(value);
      setFormData(prev => ({
          ...prev,
          [name]: valorFormatado
      }));
      buscarCEP(valorFormatado);
  } else {
      setFormData(prev => ({
          ...prev,
          [name]: value
      }));
  }
};

  const handleFormaPagamentoChange = (e) => {
    const valor = e.target.value;
    handleChange(e);
    if (valor === "Débito Automático" || valor === "Fatura Digital") {
      const camposContainer = document.querySelector('#campos-pagamento');
      if (camposContainer) {
        camposContainer.remove();
      }
      const novoContainer = document.createElement('div');
      novoContainer.id = 'campos-pagamento';
      
      if (valor === "Débito Automático") {
        const inputsDebito = [
          { placeholder: 'Banco', name: 'banco' },
          { placeholder: 'Agência', name: 'agencia' },
          { placeholder: 'Conta', name: 'conta' }
        ];
        
        inputsDebito.forEach(input => {
          const inputElement = document.createElement('input');
          inputElement.type = 'text';
          inputElement.className = 'input-full';
          inputElement.placeholder = input.placeholder;
          inputElement.name = input.name;
          inputElement.value = formData[input.name];
          inputElement.onchange = handleChange;
          novoContainer.appendChild(inputElement);
        });
      } else if (valor === "Fatura Digital") {
        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.className = 'input-full';
        inputEmail.placeholder = 'E-mail para Fatura';
        inputEmail.name = 'email_fatura';
        inputEmail.value = formData.email_fatura;
        inputEmail.onchange = handleChange;
        novoContainer.appendChild(inputEmail);
      }
      
      const container = document.querySelector('.send-docs');
      container.parentNode.insertBefore(novoContainer, container);
    }
  };
  
  const getPlaceholderByType = (field, tipoCliente) => {
    const placeholders = {
      cpf_cnpj: tipoCliente === "cpf" ? "CPF" : "CNPJ",
      nome: tipoCliente === "cpf" ? "Nome Completo" : "Razão social",
      data_nascimento: tipoCliente === "cpf" ? "Data de Nascimento" : "Data de abertura",
      mae: tipoCliente === "cpf" ? "Nome da Mãe" : "Nome do representante",
      email: "E-mail",
      telefone: "Telefone de Contato",
      outro_contato: "Telefone de Recado",
      cep: "CEP",
      numero: "Número",
      bairro: "Logradouro",
      rua: "Cidade",
      uf: "UF",
      banda_larga: "Banda Larga",
      tv: "TV",
      linha_fixa: "Linha Fixa",
      produto_movel: "Produto Móvel",
      dia_fatura: "Dia da Fatura",
      forma_pagamento: "Forma de Pagamento"
    };
    return placeholders[field];
  };
  

  return (
    <div className="container-register">
      <div className="header-w-register">
        <div className="header-register">
          <div className="container-back-header-register">
            <Link to="/menu_pixel">
              <MdKeyboardArrowLeft className="icon-back" />
              <p>voltar</p>
            </Link>
          </div>
          <p>novo cadastro</p>
        </div>
      </div>
      <div className="container-new-sale">
        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <label>Dados Pessoais</label>
            <div className="oneinput">
              <div style={{ display: "flex", alignItems: "center", marginBottom: "12px", justifyContent: "space-between" }}>
                <div className="container-cpf-cnpj" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="radio"
                    id="cpf"
                    name="tipo_cliente"
                    value="cpf"
                    checked={tipoCliente === "cpf"}
                    onChange={() => handleTipoClienteChange("cpf")}
                  />
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="radio"
                    id="cnpj"
                    name="tipo_cliente"
                    value="cnpj"
                    checked={tipoCliente === "cnpj"}
                    onChange={() => handleTipoClienteChange("cnpj")}
                  />
                  <label htmlFor="cnpj">CNPJ</label>
                </div>
                <input
                  type="text"
                  id="cpf_cnpj"
                  name="cpf_cnpj"
                  required
                  style={{ width: "calc(100% - 150px)", marginLeft: "12px" }}
                  value={formData.cpf_cnpj}
                  placeholder={tipoCliente === "cpf" ? "CPF" : "CNPJ"}
                  onChange={(e) => {
                    let valorFormatado = e.target.value;
                    if (tipoCliente === "cpf") {
                      valorFormatado = e.target.value.replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})/, '$1-$2');
                    } else {
                      valorFormatado = e.target.value.replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1/$2')
                        .replace(/(\d{4})(\d)/, '$1-$2');
                    }
                    handleChange({
                      target: {
                        name: e.target.name,
                        value: valorFormatado
                      }
                    });
                  }}
                />
              </div>
            </div>
            <input
  type="text"
  name="nome"
  required
  placeholder={getPlaceholderByType('nome', tipoCliente)}
  className="input-full"
  value={formData.nome}
  onChange={handleChange}
/>

<input
  type="text"
  name="data_nascimento"
  className="input-full"
  placeholder={getPlaceholderByType('data_nascimento', tipoCliente)}
  value={formData.data_nascimento}
  onChange={handleChange}
/>

<input
  type="text"
  name="mae"
  placeholder={getPlaceholderByType('mae', tipoCliente)}
  className="input-full"
  value={formData.mae}
  onChange={handleChange}
/>            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="input-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone de Contato"
              className="input-full"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="outro_contato"
              placeholder="Telefone de Recado"
              className="input-full"
              value={formData.outro_contato}
              onChange={handleChange}
            />
            <label>Endereço</label>
            <div className="two-inputs">
            <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                placeholder="CEP"
            />
              <input
                type="text"
                name="numero"
                required
                placeholder="Número"
                className="input-50"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="bairro"
              disabled
              placeholder="Logradouro"
              className="input-full disabled-input"
              value={formData.bairro}
              onChange={handleChange}
            />
            <div className="two-inputs">
              <input
                type="text"
                name="rua"
                disabled
                required
                placeholder="Cidade"
                className="input-75 disabled-input"
                value={formData.rua}
                onChange={handleChange}
              />
              <input
                type="text"
                className="input-25 disabled-input"
                placeholder="UF"
                disabled
                name="uf"
                value={formData.uf}
                onChange={handleChange}
              />
            </div>
            <label>Produtos Fixos</label>
            <select
              name="banda_larga"
              value={formData.banda_larga}
              onChange={handleChange}
            >
              <option value="" disabled>Banda Larga</option>
              <option value="test">test</option>
            </select>
            <select
              name="tv"
              value={formData.tv}
              onChange={handleChange}
            >
              <option value="" disabled>TV</option>
              <option value="test">test</option>
            </select>
            <select
              name="linha_fixa"
              value={formData.linha_fixa}
              onChange={handleChange}
            >
              <option value="" disabled>Linha Fixa</option>
              <option value="test">test</option>
            </select>

            <select
              name="servicos_adicionais_fixo_1"
              id="servicos_adicionais_fixo_1"
              value={formData.servicos_adicionais_fixo_1}
              onChange={handleChange}
            >
              <option value="" disabled>Serviços Adicionais 1</option>
            </select>
            <select
              name="servicos_adicionais_fixo_2"
              id="servicos_adicionais_fixo_2"
              value={formData.servicos_adicionais_fixo_2}
              onChange={handleChange}
            >
              <option value="" disabled>Serviços Adicionais 2</option>
            </select>
            <select
              name="servicos_adicionais_fixo_3"
              id="servicos_adicionais_fixo_3"
              value={formData.servicos_adicionais_fixo_3}
              onChange={handleChange}
            >
              <option value="" disabled>Serviços Adicionais 3</option>
            </select>
            <label htmlFor="">produtos móveis</label>
            <select
              name="produto_movel"
              value={formData.produto_movel}
              onChange={handleChange}
            >
              <option value="" disabled>Produto Móvel</option>
              <option value="test">test</option>
            </select>
            <label>Fatura</label>
            <select
              name="dia_fatura"
              id="dia-fatura"
              value={formData.dia_fatura}
              onChange={handleChange}
            >
              <option value="" disabled>Dia da Fatura</option>
            </select>
            <select
              name="forma_pagamento"
              id="forma-pagamento"
              value={formData.forma_pagamento}
              onChange={handleFormaPagamentoChange}
            >
              <option value="" disabled>Forma de Pagamento</option>
              <option value="Boleto Bancário">Boleto Bancário</option>
              <option value="Débito Automático">Débito Automático</option>
              <option value="Fatura Digital">Fatura Digital</option>
            </select>
            <div className="send-docs">
              <label>Documentos</label>
              <button type="button" class="attach" id="anexarDocumentoBtn">Enviar Anexo</button>
              <button
                type="submit"
                className="send-pedido"
              >
                Enviar Pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewSale;