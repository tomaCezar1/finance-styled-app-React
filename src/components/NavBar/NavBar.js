import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import {MdFingerprint} from "react-icons/all";
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css';

class NavBar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        let didClick = this.state.clicked;
        this.setState({clicked: !didClick});
    };

    closeMobileMenu = () => {
        this.setState({clicked: false});
    }

    showButton = () => {
        if (window.innerWidth <= 960) {
            this.setState({clicked: false});
        } else {
            this.setState({clicked: true});
        }
    };

    render() {
        return (
            <>
                <nav className='navbar'>
                    <div className="navbar-container container">
                        <Link to='/' className='navbar-logo'>
                            <MdFingerprint className='navbar-icon'/>
                            LOCKEDIN
                        </Link>
                        <div className='menu-icon' onClick={this.handleClick}>
                            {this.state.clicked ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu flex-container active' : 'nav-menu flex-container'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className='nav-links' onClick={this.closeMobileMenu}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className='nav-links' onClick={this.closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-btn">
                                <Link to='/sign-up' className='nav-links btn-link' onClick={this.closeMobileMenu}>
                                    <Button
                                        buttonClass="btn-home primary border "
                                    >
                                        SIGN UP
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;