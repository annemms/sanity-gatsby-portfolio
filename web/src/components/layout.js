import React from "react";
import Header from "./header";
import styled from "styled-components";

import "../styles/layout.css";

const Wrapper = styled.div`
  height: fit-content;
  .content {
    background: var(--color-white);
    min-height: calc(100% - 73px - 120px);

    @media (--media-min-small) {
      min-height: calc(100% - 88px - 150px);
    }
  }

  .footer {
    a {
      color: #fff;
      text-decoration: none;
    }
    ul {
      list-style-type: none;
      li {
        :hover {
          font-weight: bold;
        }
      }
    }

    .menu {
      margin: 0;
      padding-bottom: 40px;
    }
  }

  .footerWrapper {
    box-sizing: border-box;
    margin: 0 auto;
    background: #506473;

    @media (--media-min-small) {
      padding: 6em 2em 2em;
    }
  }

  .companyAddress {
    margin: 0 0 1rem;
  }

  .siteInfo {
    padding: 40px 40px 12px;
    color: white;
    font-size: 20px;
  }
`;

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <Wrapper>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="footerWrapper">
          <div className="siteInfo">Art by Mari</div>
          <ul class="menu">
            <li>
              <a href="mari-ringsaker">Om meg</a>
            </li>
            <li>
              <a href="/galleri">Galleri</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Layout;
