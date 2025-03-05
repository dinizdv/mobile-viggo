import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import '../../styles/newSale.css'
import { useRef } from "react";

const NewSale = () => {
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
      
        // try {
        //   const response = await fetch('/api/upload-documents', {
        //     method: 'POST',
        //     body: formData,
        //   });
          
        //   if (!response.ok) throw new Error('Erro ao enviar documentos');
          
        //   alert('Documentos enviados com sucesso!');
        // } catch (error) {
        //   console.error('Erro ao enviar arquivos:', error);
        //   alert('Ocorreu um erro ao enviar os documentos');
        // }
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

            <label htmlFor="">Produtos Fixos</label>
            <select name="" id="">
              <option value="" selected disabled>Linha Fixa</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>


            <select name="" id="">
              <option value="" selected disabled>Banda Larga</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>

            <select name="" id="">
              <option value="" selected disabled>TV</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>

            <select name="" id="">
              <option value="" selected disabled>Serviços Adicionais</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>

            <label htmlFor="">Produtos Móveis</label>
            <select name="" id="">
              <option value="" selected disabled>Produto Móvel</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>

            <select name="" id="">
              <option value="" selected disabled>Serviços Adicionais</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
              <option value="">test</option>
            </select>

              <label>documentos</label>
  <button 
    className="attach" 
    onClick={() => fileInputRef.current.click()}
  >
    Enviar Anexo
  </button>
  <input
  type="file"
  ref={fileInputRef}
  style={{ display: 'none' }}
  onChange={(e) => setSelectedFiles(e.target.files)}
  multiple={true}
  accept=".pdf,.jpg,.png,.jpeg" 
/>
              <button className="request-registration">Consultar Documento</button>
            </form>
          </div>
        </div>
      );
}

export default NewSale