import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1648267303/Peluches/logo_dldmhb.webp" alt="logo"/>
                <Link className="link" to="/">Listado</Link>
                <Link className="link" to="/form">Agregar Peluches</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}