import '../../styles/register.css'
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "../../styles/register.css";

const Register = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const fileInputRef = useRef(null);

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

  const sendDocs = async () => {
    if (!selectedFiles || !selectedFiles.length) {
      alert('Por favor, selecione um arquivo');
      return;
    }
  
    const formData = new FormData();
    Array.from(selectedFiles).forEach(file => {
      formData.append('documents', file);
    });
  }

  return (
    <div className="container-register">
    <div className="header-w-register">
      <div className="header-register">
        <div className="container-back-header-register">
          <Link to="/">
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
              className="input-full disabled-input"
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
              className="input-75 disabled-input"
              placeholder="Cidade"
              name="cidade"
              value={formData.cidade}
              disabled
            />
            <input
              type="text"
              className="input-25 disabled-input"
              placeholder="UF"
              name="uf"
              value={formData.uf}
              disabled
            />
          </div>

          <label>documentos</label>
          <button 
    className="attach" 
    onClick={() => fileInputRef.current.click()}
  >
    Anexar comprovante de endereço
  </button>
  <input
  type="file"
  ref={fileInputRef}
  style={{ display: 'none' }}
  onChange={(e) => setSelectedFiles(e.target.files)}
  multiple={true}
  accept=".pdf,.jpg,.png,.jpeg" 
/>

<button 
    className="attach" 
    onClick={() => fileInputRef.current.click()}
  >
    Anexar CNH ou RG
  </button>
  <input
  type="file"
  ref={fileInputRef}
  style={{ display: 'none' }}
  onChange={(e) => setSelectedFiles(e.target.files)}
  multiple={true}
  accept=".pdf,.jpg,.png,.jpeg" 
/>          <input
            type="text"
            className="input-full"
            required
            placeholder="Código do Comprovante"
            name="codigoComprovante"
            value={formData.codigoComprovante}
            onChange={handleInputChange}
          />
          <Link to="/cadastro/solicitacao_recebida" className="request-registration">Solicitar Cadastro</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
