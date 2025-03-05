import '../../styles/menuPixel.css'
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoIosHelpCircle } from "react-icons/io";


import { Link, Navigate } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import React from './../../assets/profile_photo.png'
import Card_1 from './../../assets/Card_Vivo_Total_Pro.png'

const Home = () => {
    const navigate = useNavigate()
    function openSettings(){
        navigate('/menu_pixel/configuracoes')
    }

    return(
        <section>
            <div className="menu_callapse">
                <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                        <div class="bg_menu">
                            <Link to=""><FaUser className='user_icon'/>Perfil</Link>
                            <Link to=""><IoMdSettings className='settings_icon'/>Configurações</Link>
                            <Link to=""><IoIosHelpCircle className='help_icon'/>Ajuda</Link>

                            <p>Vinicius</p>
                        </div>
                </div>
            </div>

            <div className="container-home">
                <div className="menu_top">
                    <Link to="/"><IoIosArrowBack className='back_icon'/>Sair</Link>
                    <h1>Bem-Vindo de Volta!</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={React}/>
                    </button>
                </div>

                {/* <div className="container-modal-menu">
                    <div className="modal-menu">
                        <div className="info-modal">
                        <IoPersonCircleSharp className='icon-info-modal' />
                        <p>Trocar Foto de Perfil</p>
                        </div>
                        <div className="info-modal">
                        <IoMdPerson className='icon-info-modal' />
                        <p>Perfil</p>
                        </div>
                        <div className="info-modal">
                        <IoSettingsSharp className='icon-info-modal' />
                        <p>Configurações</p>
                        </div>
                        <div className="info-modal">
                        <IoIosHelpCircle className='icon-info-modal' />
                        <p>Ajuda</p>
                        </div>
                        <div className="info-modal">
                        <MdLogout className='icon-info-modal' />
                        <p>Sair</p>
                        </div>
                    </div>
                </div> */}

                <div className="meusGanhos">
                    <div className="positionGanhos">
                        <p>Meus Ganhos</p>
                        <h1>R$ 1.598,55</h1>
                        <p className="faixaRemunera">Faixa de Remuneração: <strong>100%</strong></p>
                    </div>

                    <select name="tipo" id="tipo">
                        <option value="Mensal">Mensal</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Hoje">Hoje</option>
                    </select>
                </div>
            </div>

            <div className="container-buttons">
                <div className="line_top">
                    <Link to="/menu_pixel/nova_venda"><FiExternalLink className='newvenda_icon'/>Nova Venda</Link>
                    <Link to="/menu_pixel/consultar_endereco"><HiOutlineGlobe className='adress_icon'/>Consultar Endereço</Link>
                </div>

                <div className="line_bottom">
                    <Link to="/menu_pixel/consultar_documento"><FaUserCircle className='document_icon'/>Consultar Documento</Link>
                    <Link><TfiStatsUp className='venda_icon'/>Minhas Vendas</Link>
                </div>

                <div className="payment">
                    <Link><HiCurrencyDollar className='payment_icon'/>Meus Pagamentos</Link>
                </div>
            </div>

            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel_items">
                            <img src={Card_1}/>
                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className="carousel_items">
                            <img src={Card_1}/>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="indicacao">
                <h1>Indique um Amigo e ganhe Bônus</h1>
            </div>

        </section>
    )
}

export default Home