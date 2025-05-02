import React from 'react';
import style from './Contact.module.css';

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">
          Contact Me
        </h2>

        
        <div className="divider-custom my-4 d-flex justify-content-center align-items-center">
          <div className={style.line}></div>
          <div className={style.icon}>
            <i className="fas fa-star"></i>
          </div>
          <div className={style.line}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <form>

              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="text-start mb-5">
                <button className="btn px-4 py-2 fs-5" type="submit"  style={{
    backgroundColor: 'rgb(105, 211, 191)',
    borderColor: 'rgb(105, 211, 191)',
    color: '#fff'
  }} >
                  Send
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;