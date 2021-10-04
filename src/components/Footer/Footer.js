import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-light pt-5 pb-4'>
            <div className="container">
                <div className="row g-3">
                    <div className="col-4">
                        <ul>
                            <li className='list-group'>Leadership</li>                            
                            <li className='list-group'>Careers</li>                            
                            <li className='list-group'>Degrees</li>                            
                            <li className='list-group'>Teaching Center</li>                            
                            <li className='list-group'>Teach</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className='list-group'>Learners</li>                            
                            <li className='list-group'>Partners</li>                            
                            <li className='list-group'>Developers</li>                            
                            <li className='list-group'>Enterprise</li>                            
                            <li className='list-group'>Catalog</li>                            
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className='list-group'>Privary</li>                            
                            <li className='list-group'>Terms</li>                            
                            <li className='list-group'>Press</li>
                            <li className='list-group'>Contact</li>
                            <li className='list-group'>Article</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <p className="fs-6 text-center text-light mb-0">
                    Copyright &copy; 2021, all rights reserved by <span className="text-danger">Loruki</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;