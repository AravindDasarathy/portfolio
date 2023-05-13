import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { usePopper } from 'react-popper';
import Headroom from 'react-headroom';

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

const handleClick = (event: MouseEvent) => {
  const $anchor = $(event.currentTarget);

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr('href').slice(1)).offset().top - 49
      },
      500
    );
  event.preventDefault();
};

export default function Navbar() {
  useEffect(() => {
    $('.color-mode').on('click', toggleColorMode);

    return () => {
      $('.color-mode').off('click', toggleColorMode);
    };
  }, []);

  useEffect(() => {
    $('.nav-link, .custom-btn-link').on('click', handleClick);

    return () => {
      $('.nav-link, .custom-btn-link').off('click', handleClick);
    };
  }, []);

  const referenceElement = useRef<HTMLButtonElement>(null);;
  const popperElement = useRef<HTMLDivElement>(null);

  usePopper(referenceElement.current, popperElement.current, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }
    ]
  });

  useEffect(() => {
    if (referenceElement.current && popperElement.current) {
      referenceElement.current.addEventListener('click', () => {
        if (popperElement.current?.classList.contains('show')) {
          popperElement.current?.classList.remove('show');
          referenceElement.current?.setAttribute('aria-expanded', 'false');
        } else {
          popperElement.current?.classList.add('show');
          referenceElement.current?.setAttribute('aria-expanded', 'true');
        }
      });
    }

    return () => {
      if (referenceElement.current && popperElement.current) {
        referenceElement.current.removeEventListener('click', () => {});
      }
    };
  }, []);


  const [isVisible, setIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  return (
    <Headroom onUnpin={() => handleVisibilityChange(false)} onPin={() => handleVisibilityChange(true)}>
      <nav
        className={`navbar navbar-expand-sm navbar-light visible
      ${navStyles.navbar} ${navStyles['navbar-expand-sm']} ${navStyles['navbar-light']}
      ${isVisible ? navStyles.visible : navStyles.hidden}`}
      >
        <div className="container py-3">
          <Link
            className={`navbar-brand ${navStyles['navbar-brand']}`}
            href="/"
          >
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
            ref={referenceElement}
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

          <div className={`collapse navbar-collapse ${navStyles['navbar-collapse']}`} id="navbarNav" ref={popperElement}>
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
    </Headroom>
  );
}
