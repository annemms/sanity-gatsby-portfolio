import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  .root {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;

    @media (--media-min-small) {
      padding: 2em;
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
