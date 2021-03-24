import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const NewEvent = (props) => {
  
  if(!localStorage.getItem("Token")) {
    props.history.push('/adminlogin')
  }

  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [image, setImage] = useState('');
  const [sucMsg, setSucMsg] = useState('');

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
    return (
      <div className="row justify-content-center mt-3">
        <Formik
          initialValues={{
            title: '',
            date: '',
            time: '',
            presentersName: '',
            description: ''
          }}
          validationSchema={
            Yup.object().shape({
              title: Yup.string()
                .required('Title is required'),
              date: Yup.date()
                .required('Date is required'),
              time: Yup.string()
                .required('Time is required'),
              presentersName: Yup.string()
                .required('Presenters name is required'),
              description: Yup.string()
                .required('Description is required')
            })
          }
          onSubmit={ (values) => {
              let title = values.title;
              let date = values.date;
              let time = values.time;
              let presentersName = values.presentersName;
              let description = values.description;
              const data = { title, description, city, presentersName,  date, time, venue, image };
              const requestOptions = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("Token")}`
                },
                body: JSON.stringify(data)
              };
              fetch(process.env.REACT_APP_BACKEND_URL + '/events/', requestOptions)
              .then(response => response.json())
              setSucMsg('Event was added!');
          }}>
          {({  handleChange, values, errors, touched }) => (        
            <Form className="col-md-8 justify-content-center mb-3">
              <fieldset>
                <legend className="w-100 d-block">Add New Event</legend>
              </fieldset>
              <div className="form-group">
                <label className="w-100 d-block" htmlFor="title">Title</label>
                <Field 
                  type='text'
                  className='form-control w-100 d-block'
                  placeholder='Enter Title' 
                  name='title' 
                  onChange={handleChange}
                  values={values.title} />
                  <p style={{
                    color: 'red'
                  }}>{errors.title && touched.title ? errors.title : null}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect1">City</label>
                <select className="form-control w-100 d-block" onChange={onCityChange} value={city} required>
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
                  <Field 
                    type='date'
                    className='form-control w-100 d-block'
                    placeholder='Enter date' 
                    name='date' 
                    onChange={handleChange}
                    values={values.date} />
                  <p style={{
                    color: 'red'
                  }}>{errors.date && touched.date ? errors.date : null}</p>
              </div>
              <div className="form-group">
                <label className="w-100 d-block" htmlFor="time">Time</label>
                <Field 
                    type='text'
                    className='form-control w-100 d-block'
                    placeholder='Enter time' 
                    name='time' 
                    onChange={handleChange}
                    values={values.time} />
                  <p style={{
                    color: 'red'
                  }}>{errors.time && touched.time ? errors.time : null}</p>
              </div>
              <div className="form-group">
                <label className="w-100 d-block" htmlFor="presentersName">Presenter's name</label>
                <Field 
                    type='text'
                    className='form-control w-100 d-block'
                    placeholder="Enter the presenter's name" 
                    name='presentersName' 
                    onChange={handleChange}
                    values={values.presentersName} />
                  <p style={{
                    color: 'red'
                  }}>{errors.presentersName && touched.presentersName ? errors.presentersName : null}</p>              
              </div>
              <div className="form-group">
                <label className="w-100 d-block" htmlFor="description">Description</label>
                <textarea 
                  onChange={handleChange} 
                  className="form-control w-100 d-block" 
                  id="description" 
                  value={values.description} 
                  ></textarea>
                  <p style={{
                    color: 'red'
                  }}>{errors.description && touched.description ? errors.description : null}</p>  
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              <p className='my-3' style={{
                  color: 'green'
              }}>{sucMsg}</p>
            </Form>
          )}
        </Formik>
      </div>
    )
}

export default NewEvent;
