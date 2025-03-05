import Photo from '../../assets/profile_settings.png'
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'
import '../../styles/settings.css'

const Settings = () => {
    return(
        <div className="container-settings">
            <div className="container-profile-photo">
            <Link to="/menu_pixel" className='settings-back'>
                <MdKeyboardArrowLeft className="icon-back" />
                <p>voltar</p>
                </Link>   
              <div className="photo-profile">
                    <img src={ Photo } alt="" />
                    {/* <IoPersonCircleSharp className='photo-settings' /> */}
                </div>
                <p className='change-photo'>Clique na foto para trocá-la</p>
            </div>

            <div className="container-infos-settings">
                <div className="setting">
                    <IoPersonCircleSharp className='icon-info-modal' />
                    <p>Alguma informação...</p>                
                </div>
                <div className="setting">
                    <IoPersonCircleSharp className='icon-info-modal' />
                    <p>Alguma informação...</p>                
                </div>
                <div className="setting">
                    <IoPersonCircleSharp className='icon-info-modal' />
                    <p>Alguma informação...</p>                
                </div>
                <div className="setting">
                    <IoPersonCircleSharp className='icon-info-modal' />
                    <p>Alguma informação...</p>                
                </div>
                <div className="setting">
                    <IoPersonCircleSharp className='icon-info-modal' />
                    <p>Alguma informação...</p>                
                </div>
            </div>
        </div>
    )
}

export default Settings