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
      color: inherit;
      text-decoration: none;
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
    text-align: center;
    margin: 0 0 1rem;
  }

  .siteInfo {
    padding: 40px;
    text-align: center;
    color: white;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
`;

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <Wrapper>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="footerWrapper">
          <div className="siteInfo">Mari Ringsaker</div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Layout;
