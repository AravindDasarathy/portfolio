import Link from 'next/link';
import { useEffect } from 'react';
import $ from 'jquery';

import navStyles from '../styles/Navbar.module.css';

const navbarData = [
  {
    href: '#about',
    text: 'About'
  },
  {
    href: '#project',
    text: 'Projects'
  },
  {
    href: '#resume',
    text: 'Resume'
  },
  {
    href: '#skills',
    text: 'Skills'
  }
];

const toggleColorMode = () => {
  $('body').toggleClass('dark-mode');
};

export default function Navbar() {
  useEffect(() => {
    $('.color-mode').on('click', toggleColorMode);

    return () => {
      $('.color-mode').off('click', toggleColorMode);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-sm navbar-light
      ${navStyles.navbar} ${navStyles['navbar-expand-sm']} ${navStyles['navbar-light']}`}
    >
      <div className="container">
        <Link className={`navbar-brand ${navStyles['navbar-brand']}`} href="/">
          Aravind
        </Link>

        <button
          className={`navbar-toggler ${navStyles['navbar-toggler']}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${navStyles['navbar-toggler-icon']}`}
          ></span>
          <span
            className={`navbar-toggler-icon ${navStyles['navbar-toggler-icon']}`}
          ></span>
          <span
            className={`navbar-toggler-icon ${navStyles['navbar-toggler-icon']}`}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${navStyles['navbar-nav']} mx-auto`}>
            {navbarData.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  href={item.href}
                  className={`nav-link ${navStyles['nav-link']}`}
                >
                  <span data-hover={item.text}>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={`navbar-nav ${navStyles['navbar-nav']} ml-lg-auto`}>
            <div className="ml-lg-4">
              <div
                className={`color-mode ${navStyles['color-mode']} d-lg-flex justify-content-center align-items-center`}
              >
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
