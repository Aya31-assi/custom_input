import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <section className={`${style.aboutSection} text-white text-center`}>
      <div className="container">

       
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        
        <div className="divider-custom my-4 d-flex justify-content-center align-items-center">
          <div className={style.line}></div>
          <div className={style.icon}>
            <i className="fas fa-star"></i>
          </div>
          <div className={style.line}></div>
        </div>

        
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        
        <div className="mt-4">
          <a href="#" className="btn btn-outline-light">
            <i className="fas fa-download me-2"></i> Free Download!
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;