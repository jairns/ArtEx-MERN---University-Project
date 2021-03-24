import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment'

const EditEvent = (props) => {

  if(!localStorage.getItem("Token")) {
    props.history.push('/adminlogin')
}
 
  let id = props.match.params._id;

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [presentersName, setPresentersName] = useState('');
  const [description, setDes] = useState('');
  const [venue, setVenue] = useState('');
  const [image, setImage] = useState('');
  const [sucMsg, setSucMsg] = useState('');

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/events/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setDes(data.description);
      setCity(data.city);
      setDate(moment(data.date).format('YYYY-MM-DD'));
      setTime(data.time);
      setPresentersName(data.presenters_name);
      setVenue(data.venue);
      setImage(data.image);
    }
    getEvents();
  }, [id]);

  const onTitleChange = e => setTitle(e.target.value);
  const onDesChange = e => setDes(e.target.value);
  const onCityChange = e => {
    const value = [...e.target.selectedOptions].map(opt => opt.value).join(); // Getting the value and converting to string as its original value is an array
    setCity(value);
    if(value === 'Berlin') {
      setVenue('5ff5e036d29fb77730190793');
      setImage('https://i.pinimg.com/originals/23/30/ff/2330ffc7064e61ea1ceb43e6cee0c642.jpg');
    } else if(value === 'Glasgow'){
      setVenue('5ff5e227d29fb77730190794');
      setImage('https://4.bp.blogspot.com/-fjBi6OaetT0/VtA8bck0X7I/AAAAAAAAT2g/kpu751wMAqE/s1600/IMG_0302.JPG');
    } else {
      setVenue('5ff5e2efd29fb77730190795');
      setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/1200px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg');
    }
  }
  const onDateChange = e => setDate(e.target.value);
  const onTimeChange = e => setTime(e.target.value);
  const onNameChange = e => setPresentersName(e.target.value);

  const submitEventHandler = (e) => {
    e.preventDefault();
    const data = { title, description, city, presentersName, date, time, venue, image };
    const requestOptions = {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("Token")}`
      },
      body: JSON.stringify(data)
    };
    fetch(process.env.REACT_APP_BACKEND_URL + `/events/${id}`, requestOptions)
    .then(response => response.json())
    setSucMsg('Event was updated!');
  }
  return (
    <div className="row justify-content-center mt-3">
      <form onSubmit={submitEventHandler} className="col-md-8 justify-content-center mb-3">
        <fieldset>
          <legend className="w-100 d-block">Edit Event</legend>
        </fieldset>
        <div className="form-group">
          <label className="w-100 d-block" htmlFor="title">Title</label>
          <input onChange={onTitleChange} type="text" className="form-control w-100 d-block" id="title" placeholder="Enter title" value={title} required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">City</label>
          <select className="form-control w-100 d-block" onChange={onCityChange} value={city}>
            <option disabled value="">Please select a city</option>
            <option value="Berlin">Berlin</option>
            <option value="Glasgow">Glasgow</option>
            <option value="Barcelona">Barcelona</option>
          </select>
        </div>
        <input type='hidden' value={venue} />
        <input type='hidden' value={image} />
        <div className="form-group">
          <label className="w-100 d-block" htmlFor="date">Date</label>
          <input onChange={onDateChange} type="date" className="form-control w-100 d-block" id="date" placeholder="Enter date" value={date} required />
        </div>
        <div className="form-group">
          <label className="w-100 d-block" htmlFor="time">Time</label>
          <input onChange={onTimeChange} type="text" className="form-control w-100 d-block" id="time" placeholder="Enter Time" value={time} required />
        </div>
        <div className="form-group">
          <label className="w-100 d-block" htmlFor="presentersName">Presenter's name</label>
          <input onChange={onNameChange} type="text" className="form-control w-100 d-block" id="name" placeholder="Enter Presenter's name" value={presentersName} required />
        </div>
        <div className="form-group">
          <label className="w-100 d-block" htmlFor="description">Description</label>
          <textarea onChange={onDesChange} className="form-control w-100 d-block" id="description" value={description} required></textarea>
        </div>
        <button type="submit" className="btn btn-outline-primary">Edit Event</button> 
        <p className='my-3' style={{
          color: 'green'
        }}>{sucMsg}</p>
      </form>
    </div>
  )
}

export default EditEvent;
