import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = (props) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/auth/register', {name, email, password}, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            props.history.push('/login')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='form mt-5'>
            <h4 className='text-muted text-center mb-5'>Create an Account</h4>

            <div className='card p-5 shadow'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='name' name='name' value={name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='email' name='email' value={email} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='password' name='password' value={password} onChange={handleChange}></input>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                    </div>
                    <p className='mt-3 text-center'>
                        Already as user? <Link to='/login'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;