import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';
import homeImg from './home-img.jpg';

const Home = () => {

  // Hero Section
    return (
      <>
        <div>
          <div className="container py-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <h1 className='fs-1 fw-bold'>Learn with the best tutors</h1>
                <p className='fs-4'>Keep yourself updated. Otherwise you will be rejected.</p>
                <NavLink to='/services'><button className="btn-success btn mt-3 w-25 fs-5">Enroll Now</button></NavLink>
              </div>
              <div className="col-6">
                <img className='img-fluid' src={homeImg} alt="home-img" />  
              </div>
            </div>
          </div>
        </div>
      
        <HomeServices></HomeServices>
      </>
    );
};

export default Home;