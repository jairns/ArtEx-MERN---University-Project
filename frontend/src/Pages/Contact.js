import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Contact = () => {
    const [sucMsg, setSucMsg] = useState('');
    return(
        <div>
            <Formik
                initialValues={{
                    email: '',
                    message: '',
                    acceptTerms: false,
                }}
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        message: Yup.string()
                            .required('Message is required'),
                        acceptTerms: Yup.bool()
                            .oneOf([true], 
                                'Accept Terms & Conditions is required'),
                    })
                }
                onSubmit={ (values) => {
                    let email = values.email;
                    let message = values.message;
                    const data = { email, message };
                    const requestOptions = {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        },
                        body: JSON.stringify(data)
                    };
                    fetch(process.env.REACT_APP_BACKEND_URL + '/contact/', requestOptions)
                    setSucMsg('Email was sent. We will be in touch shortly');
                }}>
                {({  handleChange, values, errors, touched }) => (      
                    <Form className='col-md-8 justify-content-center my-3 mx-auto' style={{
                        height: '70vh'
                    }}>
                        <fieldset>
                            <legend className="w-100 d-block">Contact us</legend>
                        </fieldset>
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
                            <label htmlFor="customCheck1">Message</label>
                            <textarea 
                                className='form-control w-100 d-block' 
                                name='message'
                                onChange={handleChange}
                                values={values.message}></textarea>
                            <p style={{
                                color: 'red'
                            }}>{errors.message && touched.message ? errors.message : null}</p>
                        </div>      
                        <div className="form-group">
                            <Field type="checkbox" name="acceptTerms" />
                            <label className="pl-2" htmlFor="customCheck1">By checking this box you agree to our GDPR terms and conditions. Click <Link style={{ color: 'blue' }} to='/gdpr'>here</Link> to view them.</label>
                            <p style={{
                                color: 'red'
                            }}>{errors.acceptTerms && touched.acceptTerms ? errors.acceptTerms : null}</p>
                        </div>                              
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <p className='my-3'>{sucMsg}</p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Contact;