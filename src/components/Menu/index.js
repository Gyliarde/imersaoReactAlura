import React from 'react'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                 <img className="Logo" src={Logo}  alt="Dev FLix Logo" />
            </a>

             <Button  className="ButtonLink" href="/">
                Novo Video
             </Button>          
        </nav>
    )
}

export default Menu;