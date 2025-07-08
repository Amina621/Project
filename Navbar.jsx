import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOverlayClick = () => setShowModal(false);
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="nav-wrapper w-100 z-2">
      <nav className="navbar navbar-expand-lg bg-white" style={{ height: "90px" }}>
        <div className="container-fluid text-center">
          <Link to='/'  className="navbar-brand nav-logo fs-3 p-0">ModernHouse</Link>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-lg-flex d-none">
            <ul className="navbar-nav navbar-menu gap-4 mb-2 mb-lg-0,s-auto mb-2 mb-lg-0">
              <li className="nav-items fs-6 fw-normal p-0">
              <Link to='/' className="nav-link text-black">Home</Link>
                </li>
              <li className="nav-item  fs-6 dropdown p-0">
                <a href="#" className="nav-link dropdown-toggle text-black" role='button' data-bs-toggle="dropdown">Real Estate</a>
                <ul className="dropdown-menu">
                  <li><Link to='/propertie' className="dropdown-item text-black">Properties</Link></li>
                  <li><Link to='/' className="dropdown-item text-black">Agents</Link></li>
                  <li><Link to='/' className="dropdown-item text-black">Agencies</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link to='/' className="nav-link text-black">Gallery</Link></li>
              <li className="nav-item"><Link to='/' className="nav-link text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 ms-auto">
            <div className="d-xl-flex d-none nav-social">
              <i className="bi bi-facebook mx-2 fs-6"></i>
              <i className="bi bi-twitter mx-2 fs-6"></i>
              <i className="bi bi-instagram mx-2 fs-6"></i>
              <i className="bi bi-youtube mx-2 fs-6"></i>
            </div>

            <div className="nav-user-phone px-3 border-start">
              <i className="bi bi-telephone pe-2 fs-6"></i>
              <span>+212 645 774 162</span>
            </div>

            {/* User Profile */}
            <div className="user-profile position-relative">
              <i className="bi bi-person-circle user-icon"></i>
              <div className="user-modal" onClick={() => setShowModal(true)}>
                <div className="user-modal-box">
                  <i className="bi bi-heart-fill"></i>
                  <span className="fs-6">My Favorites</span>
                </div>
              </div>

              {showModal && (
                <div className="modal d-block position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" onClick={handleOverlayClick}>
                  <div className="container h-100 d-flex justify-content-center align-items-center" onClick={stopPropagation}>
                    <div className="row w-100 rounded-4 overflow-hidden shadow" style={{ maxWidth: "900px" }}>
                      {/* Left */}
                      <div className="col-md-6 text-white login-left position-relative d-flex flex-column justify-content-between p-4">
                        <div className="login-left-overlay"></div>
                        <div className="z-1 position-relative">
                          <i className="bi bi-quote fs-1"></i>
                          <p className="fs-5 fw-semibold">Owning a home is a keystone of wealth... both financial affluence and emotional security.</p>
                          <p className='fw-light'>Amina Mouini</p>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="col-md-6 p-4 bg-white login-right position-relative">
                        <i className="bi bi-x-lg login-close" onClick={handleOverlayClick}></i>
                        <h4 className="fw-500 fs-3 mb-3 text-muted">RealHomes Ultra</h4>
                        <h6 className="text-primary pb-2 mb-3" style={{ cursor: "pointer" }}>Login</h6>

                        <div className="bg-light p-4 rounded-4 login-form">
                          <div className="mb-3">
                            <label className='form-label'>Username</label>
                            <input type="text" className='form-control rounded-pill px-4 py-2' placeholder='Username' />
                          </div>
                          <div className="mb-3">
                            <label className='form-label d-flex justify-content-between'>
                              Password
                              <a href="#" className='text-primary small'>Forgot Password</a>
                            </label>
                            <input type="password" className='form-control rounded-pill px-4 py-2' placeholder='Password' />
                          </div>
                          <button className="btn btn-primary w-100 rounded-pill py-2">Login</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Toggler */}
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
              <span className="bi bi-list fs-2"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="offcanvas offcanvas-start d-lg-none" id="sidebarMenu">
          <div className="offcanvas-header">
            <a href="#" className="navbar-brand nav-logo fs-3 p-0">ModernHouse</a>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav navbar-menu gap-4 mb-2">
              <li className="nav-item"><Link to='/' className="nav-link text-black">Home</Link></li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">Real Estate</a>
                <ul className="dropdown-menu">
                  <li><Link to='/' className="dropdown-item text-black">Properties</Link></li>
                  <li><Link to='/' className="dropdown-item text-black">Agents</Link></li>
                  <li><Link to='/' className="dropdown-item text-black">Agencies</Link></li>
                </ul>
              </li>
              <li><Link  to='/'  className="nav-link text-black">Gallery</Link></li>
              <li ><Link to='/'  className="nav-link text-black">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="nav-banner bg-white overflow-hidden">
        <div className="row g-0">
          <div className="col-lg-6 p-5 nav-banner-left">
            <h2>Find Your Sweet Home</h2>
          </div>
          <div className="col-lg-6 p-5 d-flex align-items-center justify-content-center flex-wrap nav-banner-right">
            <h2 className="fs-5 fw-bolder text-center mb-0">Need Help To Choose Your Property</h2>
            <button className="custome-btn1">Let Us Call You!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
