import React from 'react'
import CustomSVGIcon from './CustomSVGIcon'
import logo from '../images/logo512.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/_navbar.scss';

function Navbar() {
    return (
        <nav>
           <div className="nav-logo">
               <CustomSVGIcon svg={logo}/>
               <h2>Snippets</h2>
            </div> 
            <div className="nav-links">
                <Link to="#">Home</Link>
                <Link to="/library">Library</Link>
                <Link to="/add-new">Add New</Link>
                <Link to="/search">
                    <FontAwesomeIcon icon={faSearch}/>
                    Search
                </Link>
                <Link to="/profile">
                    <CustomSVGIcon round icon={faUser}/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
