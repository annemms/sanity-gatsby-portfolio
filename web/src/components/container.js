import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .root {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;

    @media (--media-min-small) {
      padding: 2em;
    }
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
