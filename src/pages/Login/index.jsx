import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Illustration from '../../assets/illustration-request.png';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0)

  function handleLoginClick() {
    if (clickCount === 0) {
      showLogin()
    } else {
      navigate('/menu_pixel')
    }
    setClickCount(clickCount + 1)
  }

  function showLogin() {
    const hideElements = document.getElementsByClassName('hide');
    const showElements = document.getElementsByClassName('show');

    for (let element of hideElements) {
      element.style.display = 'block';
    }

    for (let element of showElements) {
      element.style.display = 'none';
    }
  }

  return (
    <div className="container-login">
      <img src={Illustration} alt="" />
      <div className="container-welcome">
        <div className="container-form">
          <form className='hide'>
            <label className='personalData-welcome'>Dados Pessoais</label>
            <div className="one-input">
              <input
                type="text"
                className="input-full first-input-welcome"
                required
                placeholder="Nome Completo"
                name="nome"
              />
              <input
                type="text"
                className="input-full last-input-welcome"
                required
                placeholder="Nome Completo"
                name="nome"
              />
            </div>
          </form>

          <p className='show'>Bem-vindo ao <b>PIXEL</b>!</p>
          <p className='show'>Transforme indicações em ganhos!</p>
        </div>

        <div className="container-btn-request-back">
          <button onClick={handleLoginClick}>Fazer login</button>
        </div>
        <p className='p-do-not-have-account'>
          Ainda não tem conta? <Link to="/cadastro" id="register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;