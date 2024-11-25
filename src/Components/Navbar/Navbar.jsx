import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';

function Navbar() {
    const windowWidth = window.innerWidth;
    const [openMenu, setOpenMenu] = (windowWidth <= 1023) ? useState(false): useState(true)
    const [selectedCategory, setSelectedCategory] = useState('')


    const handleOpen = () => {
        if (windowWidth <= 1023) {
            setOpenMenu(!openMenu);
        }
    }
    
    const handleClose = (id) => {
        if (windowWidth <= 1023) {
            setOpenMenu(false);
            if(id){
                setSelectedCategory(id);
            }
        }
    }

    const secciones = [
        { nombre: 'Alojamiento', id: 'alojamientos', className: '' },
        { nombre: 'Eventos', id: 'eventos', className: ''},
        { nombre: 'Vinoteca', id: 'vinoteca', className: ''},
        { nombre: 'Agencia de viajes', id: 'agencia', className: ''},
        { nombre: 'Temporada', id: 'temporada', className: ''},
        { nombre: 'Contacto', id: 'contacto', className: ''},
        { nombre: 'Reservar', id: 'book', className: ''}
    ];

    return (
        <div className='navbarContainer'>
            <Link to={'/'} className='logoNavbarA'>
                <img loading='lazy' className='logoNavbar'  onClick={handleClose} src={logo} alt="Open Club Paraná Complejo Turístico" />
            </Link>
            
            <div>
                <SearchRoundedIcon />
                <MenuRoundedIcon onClick={handleOpen}/>
            </div>
            {openMenu &&
            <div className='navbarOptionsContainer'>
                <div className='navbarOptions'>
                    {
                        secciones.map((e, i)=>(
                            <Link to={`/${e.id}`} key={i} onClick={()=>handleClose(e.id)} className={`${e.className} ${selectedCategory === e.id ? 'activeNavbar' : ''}`}>
                                {e.nombre}
                            </Link>
                        ))
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar