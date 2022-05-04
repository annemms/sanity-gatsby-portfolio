import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 100px;
  margin: 20px;
  .root {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    padding-top: 20px;
  }

  h1 {
    color: #506473;
    margin-left: 4rem;
    @media (max-width: 600px) {
      margin-left: unset;
    }
  }

  .infoText {
    text-align: center;
    color: #849bac;
    font-family: "Raleway";
    font-size: 18px;
    max-width: 800px;
    margin: 80px auto;
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
