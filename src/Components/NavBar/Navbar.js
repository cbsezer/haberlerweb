import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/hbr-news-logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const isEconomy = location.pathname === '/ekonomi';

  const closeMobileMenu = () => setClick(false);

  const tickerItems = isEconomy
    ? [
        { label: 'USD/TRY', value: '34,20', change: '▲ 0,12%', trend: 'up' },
        { label: 'EUR/TRY', value: '37,45', change: '▼ 0,05%', trend: 'down' },
        { label: 'Altın (GR)', value: '2.914', change: '▲ 1,45%', trend: 'up' },
        { label: 'BIST 100', value: '9.124', change: '▲ 0,88%', trend: 'up' },
        { label: 'Bitcoin', value: '70.000', change: '▲ 2,10%', trend: 'up' },
      ]
    : [
        'Beyrut Limanı’nda şiddetli patlama sonrası kurtarma çalışmaları devam ediyor.',
        'Merkez Bankası faiz kararını açıkladı: Piyasalar tepki veriyor.',
        'UEFA Şampiyonlar Ligi kura çekimi bugün gerçekleşecek.',
      ];

  const navItems = [
    { to: '/', label: 'ANASAYFA' },
    { to: '/gundem', label: 'GÜNDEM' },
    { to: '/ekonomi', label: 'EKONOMİ' },
    { to: '/dunya', label: 'DÜNYA' },
    { to: '/spor', label: 'SPOR' },
    { to: '/magazin', label: 'MAGAZİN' },
  ];



  return (
    <>
      <div className="breaking-news-bar" aria-label={isEconomy ? 'Piyasa verileri' : 'Son dakika haberleri'}>
        <div className="breaking-news-track">
          {isEconomy ? (
            tickerItems.concat(tickerItems).map((item, index) => (
              <span className="market-ticker-item" key={`${item.label}-${index}`}>
                <strong>{item.label}</strong>
                <b>{item.value}</b>
                <em className={item.trend}>{item.change}</em>
              </span>
            ))
          ) : (
            <>
              <strong>SON DAKİKA:</strong>
              {tickerItems.concat(tickerItems).map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </>
          )}
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
            <img src={logo} alt="HBR News" />
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {navItems.map((item) => (
              <li className='nav-item' key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? 'nav-links active' : 'nav-links'}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
