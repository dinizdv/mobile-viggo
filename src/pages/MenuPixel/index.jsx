import '../../styles/menuPixel.css'

import React from './../../assets/profile_photo.png'

const Home = () => {
    return(
        <section>
            <div className="container-home">
                <div className="menu_top">
                    <p>Sair</p>
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
                    <button type="button">Nova Venda</button>
                    <button type="button">Consultar Endereço</button>
                </div>

                <div className="line_bottom">
                    <button type="button">Consultar Documento</button>
                    <button type="button">Minhas Vendas</button>
                </div>

                <div className="payment">
                    <button>Meus Pagamentos</button>
                </div>
            </div>
        </section>
    )
}

export default Home