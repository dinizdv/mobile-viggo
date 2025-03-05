import { useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../styles/settings.css';
import Photo from '../../assets/profile_settings.png'

const Settings = () => {
    const [photo, setPhoto] = useState(Photo);

    const choosePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div className="container-settings">
            <div className="container-profile-photo">
                <Link to="/menu_pixel" className='settings-back'>
                    <MdKeyboardArrowLeft className="icon-back" />
                    <p>Voltar</p>
                </Link>   
                <div className="photo-profile">
                    <label htmlFor="photo-upload">
                        <img src={photo} alt="Profile" />
                    </label>
                    <input 
                        type="file" 
                        id="photo-upload" 
                        accept="image/*" 
                        style={{ display: 'none' }} 
                        onChange={choosePhoto} 
                    />
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
    );
};

export default Settings;