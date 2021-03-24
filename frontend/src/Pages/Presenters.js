import React from 'react';

const Presenters = () => {
    return (
        <div className='row justify-content-center'>
            <div className='d-block w-100 text-center'>
                <h3 className='my-4'>Current Presenters</h3>
            </div>
            <div className='card col-md-8 m-3 col-sm-10 col-10'>
                <div className='card-body'>
                    <div className="d-lg-flex d-md-block d-sm-block justify-content-around overflow-hidden">
                        <div className="w-50">
                            <img src='https://img.nbc.com/sites/nbcunbc/files/images/2018/12/04/MelissaFumero.jpg' alt="art" style={{
                                width: '250px',
                                height: '250px'
                            }}/>
                        </div>
                        <div className="pl-3">
                            <h5 className="card-title mt-2">Amy Santiago</h5>
                            <p>Location: Glasgow</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card col-md-8 m-3 col-sm-10 col-10'>
                <div className='card-body'>
                    <div className="d-lg-flex d-md-block d-sm-block justify-content-around overflow-hidden">
                        <div className="w-50">
                            <img src='https://vignette.wikia.nocookie.net/peepshow/images/5/58/Mark_bio.jpg/revision/latest?cb=20190124215835' alt="art" style={{
                                width: '250px',
                                height: '250px'
                            }}/>
                        </div>
                        <div className="pl-3">
                            <h5 className="card-title mt-2">Mark Corrigan</h5>
                            <p>Location: Berlin</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card col-md-8 m-3 col-sm-10 col-10'>
                <div className='card-body'>
                    <div className="d-lg-flex d-md-block d-sm-block justify-content-around overflow-hidden">
                        <div className="w-50">
                            <img src='http://akns-images.eonline.com/eol_images/Entire_Site/2013729/rs_600x600-130829130852-600.Max-Greenfield-New-Girl.jl.082913.jpg' alt="art" style={{
                                width: '250px',
                                height: '250px'
                            }}/>
                        </div>
                        <div className="pl-3">
                            <h5 className="card-title mt-2">Winston Saint-Marie Schmidt</h5>
                            <p>Location: Barcelona</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presenters;