import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "../components/block-text";
import ContactForm from "../components/contact-form";

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      bio {
        _key
        _type
        style
        list
        children {
          _key
          _type
          text
        }
      }
      portraitImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
  }
`;

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

  .bio {
    max-width: 800px;
  }

  img {
    margin-right: 40px;
    @media (max-width: 600px) {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
`;

const OmMari = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  return (
    <Layout>
      <Wrapper>
        <div>
          <img
            src={imageUrlFor(buildImageObj(site.portraitImage))
              .height(Math.floor((9 / 16) * 1000))
              .fit("crop")
              .url()}
            alt=""
          />
        </div>
        <div className="bio">
          <h2>
            Mari <span>Ringsaker</span>
          </h2>
          <div className="line"></div>
          <BlockText blocks={site.bio} />
        </div>
      </Wrapper>
      <ContactForm />
    </Layout>
  );
};

export default OmMari;
