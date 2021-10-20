import { Link } from "gatsby";
import React, { useEffect } from "react";
import styled from "styled-components";
import HamburgerIcon from "./icon/hamburger";

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

  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: white;
    }
  }

  .branding {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    align-items: flex-end;
    padding: 1em;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <div className="branding">
          <Link to="/">
            <h1>
              <span>Art by </span> Mari
            </h1>
          </Link>
        </div>
        <BurgerMenu>
          <HamburgerIcon />
        </BurgerMenu>
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
};

export default Header;
