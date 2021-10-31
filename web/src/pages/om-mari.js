import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import Portrait from "../components/static/mari.jpg";

const Wrapper = styled.div`
  margin: 7em 4em;
  display: flex;
  align-items: center;

  h2 {
    color: #506473;
    font-size: 32px;

    span {
      font-weight: 300;
    }
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  .line {
    height: 2px;
    background: #506473;
    width: 100%;
  }

  img {
    margin-right: 40px;
  }
`;

const OmMari = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <img src={Portrait} alt="portrait" />
        </div>
        <div>
          <h2>
            <span>Mari</span> Ringsaker
          </h2>
          <div className="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default OmMari;
