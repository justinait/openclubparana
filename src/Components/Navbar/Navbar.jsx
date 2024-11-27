import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logoblanco.png'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
    const windowWidth = window.innerWidth;
    const [openMenu, setOpenMenu] = (windowWidth <= 1023) ? useState(false): useState(true)
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleOpen = () => {
        if (windowWidth <= 1200) {
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
        { nombre: 'Temporada de verano', id: 'temporada', className: ''},
        { nombre: 'Contacto', id: 'contacto', className: ''},
        { nombre: 'Reservar', id: 'book', className: 'bookNavbar'}
    ];

    return (
        <div className={` navbarContainer ${openMenu ? 'navbarContainerOpenMenu' : ''}`}>
            <Link to={'/'} className='logoNavbarA'>
                {
                    !openMenu ?
                    <img loading='lazy' className='logoNavbar'  onClick={handleClose} src={logo} alt="Open Club Paraná Complejo Turístico" />
                    :
                    <img loading='lazy' className='logoNavbar'  onClick={handleClose} src={logoWhite} alt="Open Club Paraná Complejo Turístico" />
                }
            </Link>
            
            <div>
                {
                    !openMenu ?
                    <>
                        <SearchRoundedIcon />
                        <MenuRoundedIcon onClick={handleOpen}/> 
                    </> :
                    <CloseRoundedIcon onClick={handleClose} sx={{ color: 'white' }} /> 
                }
                
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