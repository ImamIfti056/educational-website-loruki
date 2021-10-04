import React from 'react';

const Service = (props) => {
    const {name, img, price, description} = props.service;
    return (
        <div className="col-4">
            <div className="d-flex flex-column border border-dark rounded-3">
                <div>
                    <img src={img} alt="service-img" className="img-fluid" />
                </div>
                <div className='p-3'>
                    <h3 className='text-danger fw-bold mb-3'>{name}</h3>
                    <p>{description}</p>
                    <h5 className='fw-bold mb-3'>Price: ${price}</h5>
                    <button className="btn btn-outline-success">Purchase</button>
                </div>
            </div>
        </div> 
    );
};

export default Service;