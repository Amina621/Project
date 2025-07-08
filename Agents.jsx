
import { Link } from 'react-router-dom'

import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";

import propaertyimg from '../assets/about-properties-2.jpg';
export default function Agents() {
  return (
    <div>
      <div className="containet page-section my-5 mt-4 fs-5">
        <Link to='/' className="text-decoration-none">Home</Link> &nbsp; &gt;&nbsp; <span className="text-muted">Agents</span>
      </div>
      <div className="container agent my-5">
        <h2 className="fw-bold">Agents</h2>
        <div className="row">
          <div className="col-lg-8 mt-4">
            <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
              <img src={team1} className='me-4' alt="Agent Image" />
              <div>
                <h5 className="mb-0">Nathan James <i className="fas fa-chech"></i></h5>
                <small>Company Agent at The <span>James Estate Agents</span></small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <p>1-222-333-4444</p>
                    </div>
                  </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="agent-text">
                          <h4 className="mb-0">Mobile</h4>
                          <p>1-234-456-7893</p>
                        </div>
                      </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-envelope"></i>
                        </div>
                            <div className="agent-text">
                              <h4 className="m-0">Email</h4>
                              <p>robot@inspirythemes.com</p>
                            </div>
                      </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                  <div className="mt-2 agent-social-icon d-flex gap-2">
                    <i className="fab fa-facebook"></i>
                     <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin"></i>
                       <i className="fab fa-instagram"></i>
                        <i className="fab fa-pintrest"></i>
                  </div>
                  <div className="mt-2">
                    <a>4 Listed Properties
                      <i className="fa-solid fa-caret-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
             <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
              <img src={team2} className='me-4' alt="Agent Image" />
              <div>
                <h5 className="mb-0">Melissa William</h5>
                <small>Company Agent at The <span>James Estate Agents</span></small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <p>1-222-333-4444</p>
                    </div>
                  </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="agent-text">
                          <h4 className="mb-0">Mobile</h4>
                          <p>1-234-456-7893</p>
                        </div>
                      </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-envelope"></i>
                        </div>
                            <div className="agent-text">
                              <h4 className="m-0">Email</h4>
                              <p>robot@inspirythemes.com</p>
                            </div>
                      </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                  <div className="mt-2 agent-social-icon d-flex gap-2">
                    <i className="fab fa-facebook"></i>
                     <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin"></i>
                       <i className="fab fa-instagram"></i>
                        <i className="fab fa-pintrest"></i>
                  </div>
                  <div className="mt-2">
                    <a>4 Listed Properties
                      <i className="fa-solid fa-caret-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="agent-card mb-4 p-3 d-flex flex-row align-items-center">
              <img src={team3} className='me-4' alt="Agent Image" />
              <div>
                <h5 className="mb-0">Alice Brian <i className="fas fa-chech"></i></h5>
                <small>Company Agent at The <span>Alice Estate Agents</span></small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <p>1-222-333-4444</p>
                    </div>
                  </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="agent-text">
                          <h4 className="mb-0">Mobile</h4>
                          <p>1-234-456-7893</p>
                        </div>
                      </div>
                      <div className="agent-detail">
                        <div className="agent-icons">
                          <i className="fas fa-envelope"></i>
                        </div>
                            <div className="agent-text">
                              <h4 className="m-0">Email</h4>
                              <p>robot@inspirythemes.com</p>
                            </div>
                      </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                  <div className="mt-2 agent-social-icon d-flex gap-2">
                    <i className="fab fa-facebook"></i>
                     <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin"></i>
                       <i className="fab fa-instagram"></i>
                        <i className="fab fa-pintrest"></i>
                  </div>
                  <div className="mt-2">
                    <a>4 Listed Properties
                      <i className="fa-solid fa-caret-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-5 mt-4 hide-elm sm">
              <h5 className="fw-bold">Featured Properties</h5>
              <div className="property-card rounded-4 p-3 mt-3">
                <div className="mb-2">
                  <h6 className="fw-bold mb-1">Villa in Coral Gables</h6>
                  <p className="text-muted m-0" style={{fontSize:"0.85rem"}}>
                    <i className="ri-map-pin-line me-1"></i>
                    Deering Bay Drive, Coral Gables,FL 33158, USA
                  </p>
                </div>
                <div className="image-container agent-right-img position-relative rounded-4 overflow-hidden mb-3">
                  <img src={propaertyimg} className='img-fluid w-100' alt="property" />
                  <div className="badge-wrapper d-flex gap-1 position-absolute top-0 start-0 m-2">
                    <span className="badge bg-primary">For Sale</span>
                    <span className="badge bg-secondary">Featured</span>
                  </div>
                  <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                    Build 2019
                  </span>
                  <div className="icons position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                    <i className="ri-heart-line text-white fs-5"></i>
                    <i className="share-line text-white fs-5"></i>
                  </div>
                </div>
                <p className="fw-bold text-primary mb-0">$825,000</p>
              </div>
            </div>
            {/* Property Types */}
            <div className="hide-elm">
              <h5 className="fw-bold">Property Types</h5>
              <div className="row mt-3">
                {[
                  'Apartment','Apartment Building','Office','Shop','Single Family','Villa'
                ].map((type,idx)=>(
                  <div className="col-6 mb-2" key={idx}>
                      <i className="ri-arrow-right-s-line text-primary me-1"></i>
                      <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}
