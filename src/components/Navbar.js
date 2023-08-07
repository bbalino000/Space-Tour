import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useRef } from "react";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

import styled from "styled-components";
import navData from "../data/navitems.json";

const Header = styled.header`
  display: grid;
  background-color: transparent;
  width: 100%;
  height: 80px;
  align-items: center;

  & .responsive_nav {
    transform: none;
  }

  & .site-logo {
    position: absolute;
    top: 1.4rem;
    left: 1.6rem;
  }

  & .site-logo img {
    width: 40px;
  }

  & a {
    text-decoration: none;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .site-logo {
      position: unset;
      padding-left: 4%;
    }
  }
`;

const Nav = styled.nav`
  justify-self: right;
  padding: 0 4em;
  height: 100%;
  color: var(--white);

  @media only screen and (min-width: 992px) {
    backdrop-filter: blur(50px);
    background-color: unset !important;
    padding: 0 10%;
    margin-left: auto;
    border: 1px solid transparent;

    & ul {
      gap: 2.2rem !important;
    }

    & li > span {
      display: block !important;
      margin-right: 0.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.3);

    & ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1.2rem;
      height: 100%;
    }

    & li {
      display: flex;
      justify-content: center;
      height: 100%;
      align-items: center;
      border-bottom: 3px solid transparent;
    }

    & li > span {
      display: none;
    }

    & li:hover {
      border-bottom: 3px solid #979797;
    }

    & li.active {
      border-bottom: 3px solid var(--white);
    }
  }

  @media only screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    display: flex;
    gap: 1.5rem;
    background-color: transparent;
    transition: 1s;
    transform: translate(100vh);
    backdrop-filter: blur(14px);
    z-index: 1;

    & ul {
      flex-direction: column;
      list-style-type: none;
      position: fixed;
      top: 8rem;
      left: 2rem;
      width: 100%;
      padding: 0;
      margin: 0;
      align-items: unset;
    }

    & li {
      padding: 0.2rem 0;
    }

    & li.active {
      border-right: 35px solid var(--white);
    }

    & a {
      text-decoration: none;
    }

    & .nav-text {
      margin-block: 0.5rem !important;
      color: gray;
    }
  }
`;

const NavButton = styled.span`
  visibility: visible;
  opacity: 1;
  position: absolute;
  top: 2rem;
  right: 1.6rem;

  @media only screen and (min-width: 768px) {
    visibility: hidden;
    opacity: 0;
  }
`;

const NavLine = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    opacity: 1;
    width: 100%;
    padding-left: 3em;

    & hr {
      position: relative;
      width: 110%;
      z-index: 99999;
    }
  }
`;

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navItems = navData.map((data, idx) => {
    return (
      <CustomLink
        to={data.path}
        key={idx}
        idx={idx.toString().padStart(2, "0")}
      >
        {data.text}
      </CustomLink>
    );
  });

  return (
    <Header>
      <Link to="/" className="site-logo">
        <img src={logo} alt="logo" />
      </Link>

      <NavLine>
        <hr />
      </NavLine>

      <Nav ref={navRef}>
        <ul>{navItems}</ul>

        <NavButton onClick={showNavbar}>
          <img src={close} alt="close" />
        </NavButton>
      </Nav>

      <NavButton onClick={showNavbar}>
        <img src={hamburger} alt="hamburger" />
      </NavButton>
    </Header>
  );
}

function CustomLink({ to, idx, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "nav-text active" : "nav-text"}>
      <span>{idx} </span>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Navbar;
