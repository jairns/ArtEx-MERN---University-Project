import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const Admin = (props) => {

    if(!localStorage.getItem("Token")) {
        props.history.push('/adminlogin')
    }

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

    const deleteHandler = (id) => {
        const requestOptions = {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem("Token")}`
              },
        };
        fetch(process.env.REACT_APP_BACKEND_URL + `/events/${id}`, requestOptions)
        .then(response => response.json())
        window.location.reload();
    }

    const logoutHandler = () => {
        localStorage.removeItem("Token");
        props.history.push('/adminlogin')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 m-3">
                <button className="btn btn-primary float-right" onClick={logoutHandler}>Log out</button>
            </div>
            <div className="col-md-8 m-3">
                <Link to="post" className="btn btn-primary float-right">Create new event</Link>
            </div>
            {loading ? ( 
                (
                    events.map((event) => {
                        return(
                            <div className="card col-md-8 m-3 col-sm-10 col-10" key={event._id}>
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
                                            <p className="card-text">{event.description.substring(0,50)}...</p>
                                            <p className="card-text"><i className="fa fa-map-marker"></i> {event.city}</p>
                                            <p className="card-text"><i className="far fa-calendar-alt"> </i> {event.date.substring(0,10)}</p>
                                            <p className="card-text"><i className="far fa-clock"> </i> {event.time}</p>
                                            <Link to={`/edit/${event._id}`}><i className="fas fa-edit mr-3" style={{
                                                color: 'blue',
                                                fontSize: '12pt',
                                                cursor: 'pointer'
                                            }}></i></Link>
                                            <i onClick={() => deleteHandler(event._id)} className="fas fa-trash" style={{
                                                color: 'red',
                                                fontSize: '12pt', 
                                                cursor: 'pointer'
                                            }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )       
                    })
                )
            ) : (<Spinner />)}
        </div>
    )
}

export default Admin;
