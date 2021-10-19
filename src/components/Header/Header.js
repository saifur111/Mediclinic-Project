import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import l1 from '../../images/l2.png'

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" href="#">
                    <img src={l1} alt="" width="120" />
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
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>  
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column  justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/doctors">Doctors</Link>
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/services">Services</Link>   
                                </div>
                                
                            </li>
                            {/* <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/blog">Blog</Link> 
                                </div>
                                
                            </li> */}
                            {/* <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    
                                    <Link className="nav-link" to="/clinic">Our Clinic</Link>   
                                </div>
                                
                            </li> */}
                            <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center"> 
                                <Link to="/aboutus" className="nav-link">About Us</Link>   
                                </div>
                                
                            </li>
                            {/* <li className="nav-item">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                   
                                <Link to="/clients" className="nav-link" >Our Clients</Link>   
                                </div>
                                
                            </li> */}
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div>
                        {
                            user?.email?
                             <small className="text-info text-center" >{user.displayName}</small>:<></>
                        }
                        </div>
                        {
                           
                            user?.email?
                            <Link to="/login" className="btn btn-outline-info m-2 p-2" type="button" onClick={logOut} ><i className="fas fa-sign-out-alt"></i></Link>:
                            <Link to="/login" className="btn btn-outline-info m-2 p-2" type="button" ><i className="fas fa-sign-in-alt"></i></Link>
                        }
                        
                        <Link to="/register" className="btn btn-outline-info m-2 p-2" type="button"><i className="fas fa-user-plus"></i></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;