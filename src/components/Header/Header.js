import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/" href="#">
                       Health Care
                    </Link>
                    <div className="d-flex">
                        
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>  
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column  justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/network">My Network</Link>
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/jobs">Jobs</Link>   
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/chat">Chat</Link> 
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/notification">Notification</Link>   
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center"> 
                                <Link to="/me" className="nav-link">Me</Link>   
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                   
                                <Link to="/apps" className="nav-link" >Work</Link>   
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        {
                            user?.email?
                            <Link to="/login"className="btn btn-outline-info m-2 p-2" onClick={logOut} type="button">Logout</Link>:
                            <Link to="/login"className="btn btn-outline-info m-2 p-2" type="button">Login</Link>
                        }
                        
                        <Link to="/register" className="btn btn-outline-info m-2 p-2" type="button">Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;