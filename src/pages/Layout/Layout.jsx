import React from 'react'
import avataaars from '../../assets/avataaars.svg';
import style from './Layout.module.css';

function Layout() {
  return (
    <header className={`${style.masthead} text-white text-center`}>
      <div className="container d-flex align-items-center flex-column">

        {/* الصورة */}
        <img className={`${style.mastheadAvatar} mb-4`} src={avataaars} alt="Avatar" />

        {/* العنوان */}
        <h1 className={`${style.mastheadHeading} mb-0`}>START BOOTSTRAP</h1>

        {/* النجمة والخطين */}
        <div className={`${style.dividerCustom} my-4`}>
          <div className={style.dividerCustomLine}></div>
          <div className={style.dividerCustomIcon}>
            <i className="fas fa-star"></i>
          </div>
          <div className={style.dividerCustomLine}></div>
        </div>

        {/* الوصف */}
        <p className={`${style.mastheadSubheading} font-weight-light mb-0`}>
          Graphic Artist - Web Designer - Illustrator
        </p>

      </div>
    </header>
  );
}

export default Layout;