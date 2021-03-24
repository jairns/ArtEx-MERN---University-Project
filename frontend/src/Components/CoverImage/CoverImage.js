import React from 'react';
import Image from '../../images/cover-image.jpg';
import { Link } from "react-router-dom";

const CoverImage = () => {
    return (
        <section className="d-flex align-items-center text-center" style={{ 
            backgroundImage:`url(${Image})`, 
            width: "100%",
            height: "82vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
            <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-block justify-content-center align-items-center">
                <h1 className="text-danger">ArtEx</h1>
                <h3 className="text-danger">2021 Art Conference</h3>
                <p><Link to="/events" className="btn btn-primary btn-large">View Events</Link></p>
            </div>
        </section>
    )
}

export default CoverImage;

