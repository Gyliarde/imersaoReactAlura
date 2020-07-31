import React from 'react'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/cadastro/video">
                 <img className="Logo" src={Logo}  alt="Dev FLix Logo" />
            </Link>

             <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
             </Button>          
        </nav>
    )
}

export default Menu;