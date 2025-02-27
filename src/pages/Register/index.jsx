import '../../styles/register.css'
import { MdKeyboardArrowLeft } from "react-icons/md";

const Register = () => {
    return(
        <div className="container-register">
                            <div className="header-w-register">
            <div className="header-register">
                    <div className='container-back-header-register'>
                        <MdKeyboardArrowLeft className='icon-back' />
                        <p>voltar</p>
                    </div>
                    <p>novo cadastro</p>
                </div>
            </div>

            <div className="container-form">
                <form>
                <label>dados pessoais</label>
                          <div className='one-input'>
                              <input type="email" className="input-full" required placeholder='Nome Completo' />
                              <input type="email" className="input-full" required placeholder='CPF' />
                              <input type="email" className="input-full" required placeholder='Data de nascimento' />
                              <input type="email" className="input-full" required placeholder='Nome da Mãe' />
                              <input type="email" className="input-full" required placeholder='E-mail' />
                              <input type="email" className="input-full" required placeholder='Telefone de Contato' />
                              <input type="email" className="input-full" required placeholder='Telefone de Recado' />
                          </div>
                
                
                        <label htmlFor="">endereço</label>
                          <div className='one-input'><input type="email" className="input-full" required placeholder='Logadouro' /></div>
                          <div className='two-inputs'>
                  <input type="text" className="input-50" required placeholder='Número' />
                  <input type="text" className="input-50" required placeholder='CEP' />
                          </div>
                          
                          <div className='two-inputs'>
                  <input type="text" className="input-75" required placeholder='Cidade' />
                  <input type="text" className="input-25" required placeholder='UF' />
                          </div>

                          <label htmlFor="">documentos</label>
                          <button className='attach'>Anexar Comprovante de Endereço</button>
                          <button className='attach'>Anexar CNH ou RG</button>
                          <input type="text" className='input-full' required replace placeholder='Código do Comprovante' />
                          <button id="request-registration">Solicitar Cadastro</button>
                    </form>
            </div>
        </div>
    )
}

export default Register