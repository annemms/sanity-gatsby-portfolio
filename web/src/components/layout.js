import React from "react";
import Header from "./header";
import styled from "styled-components";
import Instagram from "../components/icon/instagram";
import Letter from "../components/icon/lettericon";

import "../styles/layout.css";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  .content {
    background: var(--color-white);
    min-height: 100%;
    padding-top: 80px;
    @media (max-width: 600px) {
      padding-top: 50px;
    }
  }

  .footer {
    a {
      color: #fff;
      text-decoration: none;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        :hover {
          text-decoration: underline;
        }
      }
    }

    .menu {
      margin: 0;
    }
  }

  .footerWrapper {
    box-sizing: border-box;
    margin: 0 auto;
    background: #506473;
    padding: 20px;
    text-align: center;

    @media (max-width: 600px) {
      display: flex;
      align-items: end;
      justify-content: space-between;
      padding: 20px;
      text-align: left;
    }
  }

  .companyAddress {
    margin: 0 0 1rem;
  }

  .siteInfo {
    color: white;
    font-size: 20px;
  }

  .icons {
    margin-top: 20px;
    svg {
      fill: #fff;
    }
  }

  .letter {
    width: 20px;
  }
`;

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <Wrapper>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="footerWrapper">
          <div>
            <div className="siteInfo">Art by Mari</div>
            <ul className="menu">
              <li>
                <a href="/galleri/bestillingsverk">Bestillingsverk</a>
              </li>
              <li>
                <a href="/om-mari">Om meg</a>
              </li>
              <li>
                <a href="/archive">Galleri</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          <div className="icons">
            <a href="https://www.instagram.com/art_by__mari/">
              <Instagram />
            </a>
            <a style={{ paddingLeft: "10px" }} href="mailto:mari.ringsaker@gmail.com">
              <Letter />
            </a>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Layout;
