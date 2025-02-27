import { useNavigate } from 'react-router-dom'
import '../../styles/login.css'

const Login = () => {
  const navigate = useNavigate()

  const loginUser = async (event) => {
    event.preventDefault()
    
    navigate('/home', { replace: true })
  }

  return (
    <div className="container-login">
      <div className="container-style-login">
        <h1>Seja bem-vindo ao sistema</h1>
        <form onSubmit={loginUser}>
          <div className="container-label">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder='Digite seu email...'
              required
            />
          </div>
          <div className="container-label">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password"
              placeholder='Digite sua senha...'
              required
            />
          </div>
          <div className="container-btn-send">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login