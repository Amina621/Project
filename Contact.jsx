import PropretieData from "../Data.json";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import propIcon1 from "../assets/hero-icon1.svg";
import propIcon2 from "../assets/hero-icon2.svg";
import propIcon3 from "../assets/hero-icon3.svg";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to='/' className="text-decoration-none">Home</Link> &nbsp;&gt;&nbsp;<span className="text-muted">Contact</span>
      </div>
      <section className="contact py-5">
        <div className="container">
          <h2>Contact</h2>
          <div className="col-lg-12">
            <iframe
              className="map mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.54119204506!2d73.00826759335631!3d22.322019358365548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sma!4v1751845237149!5m2!1sen!2sma"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "30px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="container con-page-info text-center">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-icon">
                <i className="bi bi-phone"></i>
                <p className="mb-0">+133-456-787</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <p className="mb-0">3015 Grand Ave, Coconut Grove,<br />Merrick Way, FL 12345</p>
            </div>
            <div className="col-md-4">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <p className="mb-0">sales@yourwebsite.com</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5 d-flex align-items-center justify-content-center">
        <div className="col-lg-8 con-page">
          <form className="contact-form">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <div className="input-group">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="gdprCheck" required />
              <label htmlFor="gdprCheck" className="form-check-label">
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </label>
            </div>
            <button type="submit" className="btn btn-primary sub-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}