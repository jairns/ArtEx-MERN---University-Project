import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    const [isClick, setIsClicked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-light" style={{
                backgroundColor: 'black'
            }}>
            <Link to="/" className="navbar-brand w-50">ArtEx</Link>
            <i className={!isClick ? 'fa fa-bars' : 'fa fa-times'} onClick={() => setIsClicked(!isClick)}></i>
                <ul className={!isClick ? 'navbar-nav w-50 justify-content-end d-xl-flex d-lg-flex d-md-none d-sm-none d-none' : 'navbar-nav w-50 d-flex justify-content-end'}>
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-2" to='/' onClick={() => setIsClicked(!isClick)} activeclassname="active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-2" to='/events' onClick={() => setIsClicked(!isClick)} activeclassname="active">Events</Link>
                    </li>
                    <li className="nav-item dropdown"                             
                        onMouseEnter={() => setIsHover(!isHover)}
                        onMouseLeave={() => setIsHover(!isHover)}>
                        <Link className="nav-link dropdown-toggle" to='/hospitality/berlin'>Hospitality</Link>
                        <div style={{
                            position: 'absolute',
                            willChange: 'transform',
                            backgroundColor: 'black',
                            zIndex: '100',
                            top: '0px', 
                            left: '0px',
                            transform: 'translate3d(0px, 37px, 0px)',
                            color: '#7C7A78'
                        }}>
                            <Link className={isHover ? 'nav-link d-block' : 'd-none'} onClick={() => setIsClicked(!isClick)} to='/hospitality/berlin'>Berlin</Link>
                            <Link className={isHover ? 'nav-link d-block' : 'd-none'} onClick={() => setIsClicked(!isClick)} to='/hospitality/glasgow'>Glasgow</Link>
                            <Link className={isHover ? 'nav-link d-block' : 'd-none'} onClick={() => setIsClicked(!isClick)} to='/hospitality/barcelona'>Barcelona</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-2" onClick={() => setIsClicked(!isClick)} to='/contact' activeclassname="active">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
