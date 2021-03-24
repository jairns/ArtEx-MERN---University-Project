import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Map from '../Components/Map/Map';
import Spinner from '../Components/Spinner';

const Event = (props) => {

    let id = props.match.params._id;
    const [event, setEvent] = useState([]);
    const [date, setDate] = useState();
    const [venue, setVenue] = useState([]);
    const [loading, setLoading] = useState();

    let position = React.useRef([53.64, -3.96]);

    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/events/${id}`);
            const jsonResponse = await response.json();
            setEvent(jsonResponse);
            setDate(jsonResponse.date.substring(0,10));
            setVenue(jsonResponse.venue);
            setLoading(true);
        };
        getEvents();
    }, [id]);

    if(event.city === 'Berlin') {
        position.current = [52.5173, 13.3889];
    } 
    if(event.city === 'Glasgow') {
        position.current = [55.8612, -4.2508];
    } 
    if(event.city === 'Barcelona') {
        position.current = [41.3828, 2.1781];
    }

    return (
        <div>
            {loading ? (
                <div className='mt-3 col-lg-8 col-md-8' style={{
                    display: 'block',
                    margin: '0 auto'
                }}>
                    <div>
                        <h1>{event.title}</h1>
                        <p>{date} at {event.time} by <Link style={{ color: 'blue' }} to='/presenters'>{event.presenters_name}</Link></p>
                        <p><i className="fa fa-map-marker"></i> {venue.name}, {venue.address}, {event.city}</p>
                        <p><i className='fas fa-subway'></i> Nearby station: {venue.closest_station} </p>
                        <p>{event.description}</p>
                        <Map popup={event.city} position={position.current} popup={venue.name}/>
                        <Link to={`/book/${event._id}`} className="btn btn-outline-primary mt-3 ">Book Now</Link>
                    </div>
                </div>
            ) : (<Spinner />)}
        </div>
    );
};

export default Event;