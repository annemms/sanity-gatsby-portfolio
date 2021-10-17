import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  .branding {
    h1 {
      margin-bottom: 0;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }
    span {
      font-weight: 300;
    }
  }

  img {
    width: 100%;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 0 25px;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: #506473;

  @media (--media-min-small) {
    padding: 1.5em 1.5em;
  }

  .branding {
    font-weight: 600;

    @media (--media-max-small) {
      img {
        max-width: 300px;
      }
    }
  }

  .toggleNavButton {
    appearance: none;
    font-size: 25px;
    border: none;
    background: none;
    margin: 0;
    padding: calc(14 / 17 / 2 * 1rem);
    outline: none;
    color: inherit;

    & svg {
      display: block;
      fill: inherit;
    }

    @media (--media-min-small) {
      display: none;
    }
  }
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    justify-content: center;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: 400;
      font-size: 20px;
    }
    a:hover {
      font-weight: 600;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <Content>
      <div className="branding">
        <Link to="/">
          <h1>
            <span>Art by </span> Mari
          </h1>
        </Link>
      </div>
      <StyledNav>
        <ul>
          <li style={{ marginRight: "20px" }}>
            <Link to="/aboutme">OM MEG</Link>
          </li>

          <li>
            <Link to="/archive/">GALLERI</Link>
          </li>
        </ul>
      </StyledNav>
    </Content>
  </Wrapper>
);

export default Header;
