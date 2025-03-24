import '../../styles/register.css'
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";
import { IoHandRightOutline } from "react-icons/io5";

import "../../styles/register.css";

const MySales = () => {
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
                    <p>Minhas Vendas</p>
                </div>
            </div>

            <div className="container-vendas">
                <div className="cliente">
                    <BsPerson className='icon-client'/><span>Cliente: <p className='dados_vendas'>Nome do Cliente da Silva</p></span>
                </div>

                <div className="cliente">
                    <BsHouseDoor className='icon-client'/><span>Endereço: <p className='dados_vendas'>Rua do Cliente, 654</p></span>
                </div>

                <div className="cliente">
                    <MdOutlineAccessTime className='icon-client'/><span>Data Envio: <p className='dados_vendas'>01/01/0001</p></span>
                </div>

                <div className="cliente">
                    <TbCoin className='icon-client'/><span>Receita: <p className='dados_vendas'>R$ 0,00</p></span>
                </div>

                <div className="EtapaStatus">
                    <span className='etpst'>
                        Etapa:
                        <span className='Endereco'>Endereço</span>
                    </span>

                    <span className='etpst'>
                        Status:
                        <span className='Liberado'>Liberado</span>
                    </span>
                </div>

                <div className="acao_necessaria">
                    <HiOutlineLightBulb className='icon-acao'/><span>Ação Necessária</span>

                    <div className="AnnotationHand">
                        <HiOutlineAnnotation />
                        <IoHandRightOutline />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySales