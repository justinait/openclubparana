import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logoblanco.png'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('')
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpen = () => {
        if (windowWidth <= 1200) {
            setOpenMenu(!openMenu);
        }
    }
    
    const handleClose = (id) => {
        if (windowWidth <= 1200) {
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
        { nombre: 'Reservar', id: 'book', className: 'bookNavbar'}
    ];

    return (
        <div className={` navbarContainer ${openMenu && windowWidth <= 1200 ? 'navbarContainerOpenMenu' : ''}`}>
            <Link to={'/'} className='logoNavbarA'>
                {
                    !openMenu ?
                    <img loading='lazy' className='logoNavbar'  onClick={handleClose} src={logo} alt="Open Club Paraná Complejo Turístico" />
                    :
                    <img loading='lazy' className='logoNavbar'  onClick={handleClose} src={logoWhite} alt="Open Club Paraná Complejo Turístico" />
                }
            </Link>
            
            <div className='menuNavbarIconsContainer'>
                {
                    !openMenu ?
                    <>
                        <SearchRoundedIcon />
                        <MenuRoundedIcon className='menuNavbarIcons' onClick={handleOpen}/> 
                    </> :
                    <CloseRoundedIcon onClick={handleClose} className='menuNavbarIcons' sx={{ color: 'white' }} /> 
                }
                
            </div>
            {(openMenu || windowWidth >=1200) &&
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