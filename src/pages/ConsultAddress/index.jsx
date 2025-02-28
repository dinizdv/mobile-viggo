import '../../styles/register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "../../styles/register.css";

const ConsultAddress = () => {
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
          <div className="one-input">
            <input
              type="text"
              className="input-full"
              required
              placeholder="Complemento 1"
              name="complemento1"
            />
            <input
              type="text"
              className="input-full"
              required
              placeholder="Complemento 2"
              name="complemento2"
            />
          </div>
          <input
              type="text"
              className="input-full"
              required
              placeholder="Complemento 3"
              name="complemento3"
            />
          <button className="request-registration">Enviar Consulta</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultAddress