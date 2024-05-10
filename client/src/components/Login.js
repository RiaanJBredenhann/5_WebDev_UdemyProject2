import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form mt-5'>
            <h4 className='text-muted text-center mb-5'>Log into your account</h4>\
            <div className='car dp-5 shadow'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='email' name='email'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='password' name='password'></input>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>Login</button>
                    </div>

                    <p className='mt-3 text-center'>Not a user? <Link to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;