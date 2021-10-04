import React from 'react';

const Login = () => {
    return (
        <div className='container'>
            <h1 className="fs-1 my-5 text-center">Log in to your account</h1>
            <hr />
            <form className='w-50 mx-auto py-4'>
                <div className='mb-4'>
                    <h3>Email</h3>
                    <input type="email" placeholder='Enter your email...' className='form-control' />
                </div>
                <div className='mb-2'>
                    <h3>Password</h3>
                    <input type="password" placeholder='Enter your password...' className='form-control' />
                </div>
            </form>
            <div className='text-center mb-2'>
                <button className="btn btn-success w-50">Log in <i class="fas fa-sign-in-alt"></i></button>
            </div>
            <p className="text-center fs-6 mb-5">Don't have an account? <span className='text-primary text-decoration-underline'>Sign up</span> here.</p>
        </div>
    );
};

export default Login;