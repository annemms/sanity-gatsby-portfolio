import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";

const Wrapper = styled.div`
  margin: 7em 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: block;
    margin: 20px;
  }

  h2 {
    color: #506473;
    font-size: 32px;
  }
`;

const ConfirmationPage = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h2>Takk for din epost!</h2>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default ConfirmationPage;
