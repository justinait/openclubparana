import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logoblanco.png'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchBar from './SearchBar';

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('')
    const [showSearchBar, setShowSearchBar] = useState(false); 
    
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
        }
        if(id){
            setSelectedCategory(id);
        }
    }

    const toggleSearchBar = () => {
        setShowSearchBar((prev) => !prev); 
    };

    const secciones = [
        { nombre: 'Alojamiento', id: 'alojamientos', keywords: ['habitaciones', 'hospedaje'], className: '' },
        { nombre: 'Eventos', id: 'eventos', keywords: ['fiestas', 'reuniones'], className: '' },
        { nombre: 'Vinoteca', id: 'vinoteca', keywords: ['vinos', 'malbec', 'bodega'], className: '' },
        { nombre: 'Agencia de viajes', id: 'agencia', keywords: ['viajes', 'tours', 'excursiones'], className: '' },
        { nombre: 'Temporada', id: 'temporada', keywords: ['verano', 'otoño'], className: '' },
        { nombre: 'Contacto', id: 'contacto', keywords: ['info', 'mensaje', 'consulta'], className: '' },
        { nombre: 'Reservar', id: 'book', keywords: ['booking', 'reserva'], className: 'bookNavbar' }
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
                        {showSearchBar && <SearchBar secciones={secciones} onClose={toggleSearchBar} />}
                        <SearchRoundedIcon  onClick={toggleSearchBar} />
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