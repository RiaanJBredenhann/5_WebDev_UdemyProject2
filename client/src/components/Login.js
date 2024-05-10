import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = (props) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null
    });

    const {email, password, error} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setData({...data, error: null});
            const res = await axios.post('/auth/login', {email, password}, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            localStorage.setItem('token', res.data.token);
            props.history.push('/');
            
        } catch (err) {
            setData({...data, error: err.response.data.error});
        }
    };

    return (
        <div className='form mt-5'>
            <h4 className='text-muted text-center mb-5'>Log into your account</h4>\
            <div className='car dp-5 shadow'>
                <form>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='email' name='email' value={email} onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='password' name='password' value={password} onChange={handleChange}></input>
                    </div>

                    {error ? <p className='text-danger'>{error}</p> : null}

                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                    </div>

                    <p className='mt-3 text-center'>Not a user? <Link to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;