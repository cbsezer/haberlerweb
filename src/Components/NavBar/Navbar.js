import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <div className="breaking-news-bar" aria-label="Son dakika haberleri">
        <div className="breaking-news-track">
          <strong>SON DAKİKA:</strong>
          <span>Beyrut Limanı'nda şiddetli patlama sonrası kurtarma çalışmaları devam ediyor.</span>
          <span>Merkez Bankası faiz kararını açıkladı: Piyasalar tepki veriyor.</span>
          <span>UEFA Şampiyonlar Ligi kura çekimi bugün gerçekleşecek.</span>
        </div>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <button className="navbar-menu-button" type="button" aria-label="Menüyü aç">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HBR NEWS
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                ANASAYFA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gundem'
                className='nav-links'
              >
                GÜNDEM
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ekonomi'
                className='nav-links'>  
                EKONOMİ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dunya'
                className='nav-links'
              >
                DÜNYA
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/spor'
                className='nav-links'
              >
                SPOR
          </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/magazin'
                className='nav-links'
              >
                MAGAZİN
        </Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <button className="navbar-search" type="button" aria-label="Ara">
              ⌕
            </button>
            <button className="navbar-subscribe" type="button">
              ABONE OL
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
