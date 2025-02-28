import '../../styles/menuPixel.css'
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import React from './../../assets/profile_photo.png'
import Card_1 from './../../assets/Card_Vivo_Total_Pro.png'

const Home = () => {
    return(
        <section>
            <div className="container-home">
                <div className="menu_top">
                    <Link to="/"><IoIosArrowBack className='back_icon'/>Sair</Link>
                    <h1>Bem-Vindo de Volta!</h1>
                    <img src={React}/>
                </div>

                <div className="meusGanhos">
                    <div className="positionGanhos">
                        <p>Meus Ganhos</p>
                        <h1>R$ 1.598,55</h1>
                        <p className="faixaRemunera">Faixa de Remuneração: <strong>100%</strong></p>
                    </div>

                    <select name="tipo" id="tipo">
                        <option value="Mensal">Mensal</option>
                        <option value="Diário">Diário</option>
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