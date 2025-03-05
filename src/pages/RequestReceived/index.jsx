import '../../styles/requestReceived.css'
import Illustration from '../../assets/illustration-request.png'
import { Link } from 'react-router-dom'

const RequestReceived = () => {
    return(
        <div className="container-request">
            <img src={Illustration} alt="" />
            <div className="container-your-request">
                <p>Sua solicitação foi recebida! Em breve você receberá um e-mail de confirmação do seu currículo</p>
                <div className="container-btn-request-back">
                    <Link to="/"><button>Voltar ao início</button></Link>
                </div>
            </div>
        </div>
    )
}

export default RequestReceived