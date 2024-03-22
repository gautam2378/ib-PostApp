import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary shadow-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <h4 className="navbar-brand">IBLOG App</h4>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/' className="btnn"><button className="btn">Home</button></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/CreateBlog'><button className="btn">Create blog</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
   );
   
  
};

export default navbar;



