import React from 'react';

const Service = (props) => {
    const {name, img, price, description, rating} = props.service;
    return (
        <div className="col-4">
            <div className="d-flex flex-column border border-dark rounded-3">
                <div>
                    <img src={img} alt="service-img" className="img-fluid" />
                </div>
                <div className='p-3'>
                    <h3 className='text-danger fw-bold mb-3'>{name}</h3>
                    <p>{description}</p>
                    <div className='mb-3'>
                        <span className='me-5 fs-5'><span className='fw-bold'>Price: $</span>{price}</span>
                        <span><span className='fw-bold'>Rating: </span>{rating} <i className="fas fa-star text-warning"></i></span>
                    </div>
                    <button className="btn btn-outline-success"><i className="fas fa-shopping-cart"></i> &nbsp; Add to Cart</button>
                </div>
            </div>
        </div> 
    );
};

export default Service;