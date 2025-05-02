import React from 'react';
import style from './Portfolio.module.css';


import cabin from '../../assets/cabin.png';
import cake from '../../assets/cake.png';
import circus from '../../assets/circus.png';
import game from '../../assets/game.png';
import safe from '../../assets/safe.png';
import submarine from '../../assets/submarine.png';

function Portfolio() {
  const images = [cabin, cake, circus, game, safe, submarine];

  return (
    <section className="page-section portfolio">
      <div className="container">

        
        <h2 className="page-section-heading text-center text-uppercase text-black mb-0 mt-5 fw-semibold">
          Portfolio
        </h2>

        
        <div className="divider-custom my-4 d-flex justify-content-center align-items-center">
          <div className={style.line}></div>
          <div className={style.icon}>
            <i className="fas fa-star"></i>
          </div>
          <div className={style.line}></div>
        </div>

       
        <div className="row justify-content-center">
          {images.map((imgSrc, index) => (
            <div className="col-md-6 col-lg-4 mb-5" key={index}>
              <div className="portfolio-item mx-auto">
                <img className="img-fluid rounded" src={imgSrc} alt="Portfolio item" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;