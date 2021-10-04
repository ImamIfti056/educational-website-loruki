import React from 'react';
import aboutImg from './about-img.jpg';

const About = () => {
    return (
        <div>
            {/* top section */}
            <div className="container">
                <h1 className="fs-1 text-center text-dark my-5">About US</h1>
                <hr />
                <div className="d-flex pt-5 align-items-center justify-content-between">
                    <div>
                        <h1 className="fs-1">We share knowledge with the world.</h1>
                        <p>
                            An American massive open online course provider founded in 2021
                            <br />
                            by computer science students.
                            <br />
                            Loruki works with universities and other organizations to offer online courses.
                        </p>
                        <button className="btn btn-outline-success">Read More</button>
                    </div>
                    <div>
                        <img className='img-fluid' src={aboutImg} alt="about-img" />
                    </div>
                </div>
            </div>

            {/* Stat section */}
            <section className="bg-primary">
                <div className="container py-5">
                    <h1 className="fs-1 text-center mb-4 text-light">
                        We just keep growing
                    </h1>
                    <p className='fs-4 text-center text-light'>
                        Our global community and our course catalog is getting bigger day by day. 
                        <br />
                        Check out our latest updates!
                    </p>

                    {/* Stats */}
                    <div className="d-flex align-items-center justify-content-between text-center py-5">
                        <p className="text-light border-light border p-3">
                            <h3 className="fs-3">12M+</h3>
                            <small className='fs-6'>Learners</small>
                        </p>
                        <p className="text-light border-light border p-3">
                            <h3 className="fs-3">234K+</h3>
                            <small className='fs-6'>Instructors</small>
                        </p>
                        <p className="text-light border-light border p-3">
                            <h3 className="fs-3">121K+</h3>
                            <small className='fs-6'>Courses</small>
                        </p>
                        <p className="text-light border-light border p-3">
                            <h3 className="fs-3">343M+</h3>
                            <small className='fs-6'>Course Enrollments</small>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;