import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import MenuPixel from "../pages/MenuPixel"
import Register from '../pages/Register'
import Error from "../pages/Error"

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/menu_pixel' element={<MenuPixel />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default RoutesApp