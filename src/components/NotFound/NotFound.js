import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center my-5 py-5'>
            <h1 className='text-danger my-3'>404 Page not Found!</h1>
            <p>The page you are looking for has incorrect url or check your internet connection.</p>
        </div>
    );
};

export default NotFound;