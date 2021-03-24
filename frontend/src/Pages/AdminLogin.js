import React, { useState } from 'react';

const AdminLogin = (props) => {

    if(localStorage.getItem("Token")) {
        props.history.push('/admin')
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [res, setRes] = useState();

    const submitEventHandler = (e) => {
        e.preventDefault();
        const data = { name, password };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch(process.env.REACT_APP_BACKEND_URL_USER, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(response >= 400) {
                setRes(400)
            } else {
                localStorage.setItem("Token", response);
                props.history.push('/admin')
            }
        })
    }

    return (
        <div className="row justify-content-center mt-3">
            <form className="col-md-8 justify-content-center mb-3" onSubmit={submitEventHandler} style={{
                height: '70vh'
            }} >
                <fieldset>
                    <legend>Admin Login</legend>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="title">Username</label>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" placeholder="Enter username"  />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Password</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control" placeholder="Enter password"  />
                </div>
                <p className={res === 400 ? 'my-3 d-block' : 'd-none'} style={{
                    color: 'red'
                }}>Incorrect details</p>
                <button type="submit" className="btn btn-outline-primary">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin;
