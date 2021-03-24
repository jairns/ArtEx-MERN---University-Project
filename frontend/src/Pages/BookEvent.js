import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const BookEvent = (props) => {
    const [sucMsg, setSucMsg] = useState('');
    let event_id = props.match.params._id;

    return(
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    acceptTerms: false,
                }}
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        name: Yup.string()
                            .required('Name is required'),
                        acceptTerms: Yup.bool()
                            .oneOf([true], 
                                'Accept Terms & Conditions is required'),
                    })
                }
                onSubmit={ (values) => {
                        let name = values.name;
                        let email = values.email;
                        const data = { name, email, event_id };
                        const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    };
                    fetch(process.env.REACT_APP_BACKEND_URL + '/bookings/', requestOptions)
                    .then(response => response.json())
                    setSucMsg('Event booked! You will recieve an email confirmation!');
                }}>
                {({  handleChange, values, errors, touched }) => (      
                    <Form className='col-md-8 justify-content-center my-3 mx-auto' style={{
                        height: '70vh'
                    }}>
                        <fieldset>
                            <legend className="w-100 d-block">Event Booking</legend>
                        </fieldset>
                        <Field type="hidden" values={values.event_id} />
                        <div className='form-group'>
                            <label className="w-100 d-block" htmlFor="title">Full Name</label>
                            <Field 
                                type='text'
                                className='form-control w-100 d-block'
                                placeholder='Enter Full Name' 
                                name='name' 
                                onChange={handleChange}
                                values={values.name} />
                            <p style={{
                                color: 'red'
                            }}>{errors.name && touched.name ? errors.name : null}</p>
                        </div>
                        <div className='form-group'>
                            <label className="w-100 d-block" htmlFor="description">Email</label>
                            <Field 
                                type='text'
                                className='form-control w-100 d-block'
                                placeholder='Enter Email' 
                                name='email' 
                                onChange={handleChange}
                                values={values.email} />
                            <p style={{
                                color: 'red'
                            }}>{errors.email && touched.email ? errors.email : null}</p>
                        </div>
                        <div className="form-group">
                            <Field type="checkbox" name="acceptTerms" />
                            <label className="pl-2" htmlFor="customCheck1">By checking this box you agree to our GDPR terms and conditions. Click <Link style={{ color: 'blue' }} to='/gdpr'>here</Link> to view them.</label>
                            <p style={{
                                color: 'red'
                            }}>{errors.acceptTerms && touched.acceptTerms ? errors.acceptTerms : null}</p>
                        </div>                                  
                        <button type="submit" className="btn btn-outline-primary mb-3">Submit</button>
                        <p className='my-3' style={{
                            color: 'green'
                        }}>{sucMsg}</p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BookEvent;