import Link from "next/link";

import "../styles/Navbar.module.css";
import "../styles/Darkmode.module.css";

const navbarData = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#project",
    text: "Projects",
  },
  {
    href: "#resume",
    text: "Resume",
  },
  {
    href: "#skills",
    text: "Skills",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="index.html">
          <i className="uil uil-user"></i>
          Aravind
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navbarData.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link href={item.href} className="nav-link">
                  <span data-hover={item.text}>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center">
                <i className="color-mode-icon"></i>
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
