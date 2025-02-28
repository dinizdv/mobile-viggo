import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import MenuPixel from "../pages/MenuPixel"
import ConsultDocument from "../pages/ConsultDocument"
import ConsultAddress from "../pages/ConsultAddress"
import NewSale from "../pages/NewSale"
import Register from '../pages/Register'
import RequestReceived from '../pages/RequestReceived'
import Error from "../pages/Error"

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/menu_pixel' element={<MenuPixel />} />
            <Route path='/menu_pixel/consultar_documento' element={<ConsultDocument />} />
            <Route path='/menu_pixel/consultar_endereco' element={<ConsultAddress />} />
            <Route path='/menu_pixel/nova_venda' element={<NewSale />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='/cadastro/solicitacao_recebida' element={<RequestReceived />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default RoutesApp