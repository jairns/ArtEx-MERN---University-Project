import React from 'react';

const Hotel = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="card col-md-8 m-3 col-sm-10 col-10 overflow-hidden">
                <div className="card-body">
                    <div className="d-lg-flex d-md-block d-sm-block justify-content-around">
                        <div>
                            <img src={props.image} alt='Berlin' style={{
                                height: '250px',
                                width: '250px'
                            }} />
                        </div>
                        <div className="w-50">
                            <h5 className='mt-2'>{props.name}</h5>
                            <p>{props.price.toFixed(2)} {props.abbrev} per night</p>
                            <p>{props.distance} from the venue</p>
                            <button className='btn btn-primary' onClick={() => window.location = (props.booking)}>View on booking.com</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;