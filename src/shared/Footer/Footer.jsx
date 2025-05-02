import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">

          
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Location</h5>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Around The Web</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">About Freelancer</h5>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a href="https://startbootstrap.com/" target="_blank" rel="noopener noreferrer" className="text-success"> Start Bootstrap</a>.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;