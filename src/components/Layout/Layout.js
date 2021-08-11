import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";

const Layout = ({children}) => {
  const navRef = useRef();
  const indicatorRef = useRef();

  const location = useLocation();

  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const activeLink = navRef.current.querySelector(".header__nav-link--active");
    setLeft(activeLink.offsetLeft);
    setWidth(activeLink.offsetWidth);
  }, [location]);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <Link className="header__logo" to="/">
            <img className="header__logo-img" src={Logo} alt="" />
          </Link>
          <nav className="header__nav" ref={navRef}>
            <span ref={indicatorRef} className="header__indicator" style={{left: left + "px", width: width + "px"}}></span>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink exact className="header__nav-link" activeClassName="header__nav-link--active" to="/">Admin pannel</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink exact className="header__nav-link" activeClassName="header__nav-link--active" to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
