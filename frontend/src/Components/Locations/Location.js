import React from 'react';
import Berlin from '../../images/berlin.svg';
import Glasgow from '../../images/glasgow.svg';
import Barcelona from '../../images/barca.svg';

const Location = () => {
    return (
        <div>
            <section className="d-flex align-items-center text-center bg-secondary" style={{
                height: "100vh"
            }}>
                <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-block justify-content-center align-items-center">
                    <h3 className="">LOCATIONS</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-12" style={{
                            marginBottom: '20px'
                        }}>
                            <img src={Berlin} alt="Berlin" style={{
                                height: "100px",
                                width: "100px",
                                marginBottom: "10px"
                            }} />
                            <h5>Berlin</h5>
                            <p className="card-text"><i className="far fa-calendar-alt"> </i>2021-07-21 - 2021-07-23</p>
                        </div>
                        <div className="col-lg-4 col-md-12" style={{
                            marginBottom: '20px'
                        }}>
                            <img src={Glasgow} alt="Glasgow" style={{
                                height: "100px",
                                width: "100px",
                                marginBottom: "10px"
                            }} />
                            <h5>Glasgow</h5>
                            <p className="card-text"><i className="far fa-calendar-alt"> </i>2021-07-25 - 2021-07-27</p>
                        </div>
                        <div className="col-lg-4 col-md-12" style={{
                            marginBottom: '20px'
                        }}>
                            <img src={Barcelona} alt="Barcelona" style={{
                                height: "100px",
                                width: "100px",
                                marginBottom: "10px"
                            }} />
                            <h5>Barcelona</h5>
                            <p className="card-text"><i className="far fa-calendar-alt"> </i>2021-07-29 - 2021-07-31</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Location;

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>