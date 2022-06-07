import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const Wrapper = styled.div`
  margin: 0;

  a {
    color: #fff;
  }

  /* header */

  .header {
    background-color: #506473;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  .header h1 {
    font-size: 18px;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #506473;
  }

  .header li a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    text-decoration: underline;
  }

  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .header .menu li:last-child {
    padding-bottom: 40px;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #fff;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #fff;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 260px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header h1 {
      font-size: 26px;
    }

    .header li {
      float: left;
    }
    .header li a {
      padding: 33px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
    .header .menu li:last-child {
      padding-bottom: 0;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <header className="header">
        <a href="/" className="logo">
          <h1>Art by Mari</h1>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/galleri/bestillingsverk">Bestillingsverk</Link>
          </li>
          <li>
            <a href="/om-mari">Om Mari</a>
          </li>
          <li>
            <a href="/archive">Galleri</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
