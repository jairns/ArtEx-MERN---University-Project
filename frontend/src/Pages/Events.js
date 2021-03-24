import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
      const getEvents = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/events');
        const jsonResponse = await response.json();
        setEvents(jsonResponse);
        setLoading(true);
      }
      getEvents();
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                {loading ? 
                (
                    events.map((event, index) => {
                        return(
                            <div className="card col-md-8 m-3 col-sm-10 col-10" key={index}>
                                <div className="card-body">
                                    <div className="d-lg-flex d-md-block d-sm-block justify-content-around overflow-hidden">
                                        <div>
                                            <img src={event.image} alt="art" style={{
                                            width: '250px',
                                            height: '250px'
                                            }}/>
                                        </div>
                                        <div className="w-50">
                                            <Link to={`/event/${event._id}`}><h5 className="card-title mt-2">{event.title}</h5></Link>
                                            <p className="card-text w-md-100">{event.description.substring(0,50)}...</p>
                                            <p className="card-text"><i className="fa fa-map-marker"></i> {event.city}</p>
                                            <p className="card-text"><i className="far fa-calendar-alt"> </i> {event.date.substring(0,10)}</p>
                                            <p className="card-text"><i className="far fa-clock"> </i> {event.time}</p>
                                            <Link to={`/book/${event._id}`} className="btn btn-outline-primary mt-3 ">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )       
                    })
                ) : (<Spinner />) }
            </div>
        </div>
    )
}

export default Events;
