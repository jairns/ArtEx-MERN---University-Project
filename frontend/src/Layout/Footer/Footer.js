import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='mt-4 footer navbar-expand-lg navbar-dark text-light' style={{
            width: '100%',
            backgroundColor: 'black',
            bottom: '0',
            clear: 'both',
            position: 'relative'
        }}>
            <div className='container'>
                <div className='row' style={{
                    padding: '1.5rem'
                }}>
                    <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h6 className='mt-4' style={{
                            color: 'white'
                        }}>Our Social Media's:</h6>
                        <Link to='#' style={{
                            color: 'white',
                            textDecoration: 'underline'
                        }}>
                            <small className='mt-2 d-block'>Facebook</small>
                        </Link>
                        <Link to='#' style={{
                            color: 'white',
                            textDecoration: 'underline'
                        }}>
                            <small className='d-block'>Twitter</small>
                        </Link>                        
                        <Link to='#' style={{
                            color: 'white',
                            textDecoration: 'underline'
                        }}>
                            <small className='d-block'>Instagram</small>
                        </Link>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                        <h6 className='mt-4' style={{
                            color: 'white'
                        }}>Organisers:</h6>
                        <small className=' mt-2 d-block'>Allan</small>
                        <small className=' d-block'>John</small>
                        <small className=' d-block'>Jack</small>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                        <h6 className='mt-4' style={{
                            color: 'white'
                        }}>Contact Information:</h6>
                        <small className='mt-2 d-block'>12A Dončić Ulica, Ljubljana, Slovenia</small>
                        <small className='d-block'>artexp@gmail.com</small>
                        <small className='d-block'>8762749184</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;