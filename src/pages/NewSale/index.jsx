import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const NewSale = () => {
      const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        nomeMae: "",
        email: "",
        telefoneContato: "",
        telefoneRecado: "",
        logradouro: "",
        numero: "",
        cep: "",
        cidade: "",
        uf: "",
        codigoComprovante: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        if (name === "cep" && value.length === 8) {
          buscarCep(value);
        }
      };
    
      const buscarCep = async (cep) => {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
    
          if (!data.erro) {
            setFormData((prev) => ({
              ...prev,
              logradouro: data.logradouro,
              cidade: data.localidade,
              uf: data.uf,
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
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
    
          <div className="container-form">
            <form>
              <label>dados pessoais</label>
              <div className="one-input">
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Nome Completo"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="CPF"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Data de nascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Nome da Mãe"
                  name="nomeMae"
                  value={formData.nomeMae}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  className="input-full"
                  required
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Telefone de Contato"
                  name="telefoneContato"
                  value={formData.telefoneContato}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Telefone de Recado"
                  name="telefoneRecado"
                  value={formData.telefoneRecado}
                  onChange={handleInputChange}
                />
              </div>
    
              <label>endereço</label>
              <div className="two-inputs">
              <input
                  type="text"
                  className="input-50"
                  placeholder="CEP"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input-50"
                  placeholder="Número"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                />
              </div>
              <div className="one-input">
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Logradouro"
                  name="logradouro"
                  value={formData.logradouro}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
    
              <div className="two-inputs">
                <input
                  type="text"
                  className="input-75"
                  placeholder="Cidade"
                  name="cidade"
                  value={formData.cidade}
                  disabled
                />
                <input
                  type="text"
                  className="input-25"
                  placeholder="UF"
                  name="uf"
                  value={formData.uf}
                  disabled
                />
              </div>

            <label htmlFor="">Produtos Fixos</label>
            <div className="one-input">
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Linha Fixa"
                  name="linhaFixa"
                />
                                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Banda Larga"
                  name="bandaLarga"
                />
                                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="TV"
                  name="tv"
                />
                                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Serviços Adicionais"
                  name="servicosAdicionais"
                />
              </div>

            <label htmlFor="">Produtos Móveis</label>
            <div className="one-input">
                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Plano Móvel"
                  name="planoMovel"
                />
                                <input
                  type="text"
                  className="input-full"
                  required
                  placeholder="Serviços Adicionais"
                  name="servicosAdicionais"
                />
</div>

              <label>documentos</label>
              <button className="attach">Enviar Anexo</button>
              <button className="request-registration">Consultar Documento</button>
            </form>
          </div>
        </div>
      );
}

export default NewSale