import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import coverphoto from "../components/static/coverphoto.jpg";
import styled from "styled-components";
import ContactForm from "../components/contact-form";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
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
          title
          price
          slug {
            current
          }
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    max-height: 900px;
    object-fit: cover;
    opacity: 0.5;
  }
  h2 {
    color: #506473;
    position: absolute;
    top: 30%;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 100px;
    span {
      font-weight: 300;
    }
    @media (max-width: 600px) {
      font-size: 32px;
    }
  }
  .line {
    height: 2px;
    background: #506473;
    width: 40%;
    position: absolute;
    top: 56%;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  left: 0;
  max-width: 655px;
  right: 0;
  margin: 0 auto;
  button {
    border: 4px solid #506473;
    border-radius: 40px;
    width: 220px;
    font-size: 28px;
    margin: 20px auto;
    padding: 8px 10px;
    background: none;
    color: #506473;
    display: block;

    @media (max-width: 600px) {
      border: 2px solid #506473;
      font-size: 18px;
      width: 150px;
    }

    :hover {
      background: #506473;
      color: #fff;
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <ImageWrapper>
        <img src={coverphoto} alt="coverphoto" />
        <h2>
          <span>Art by </span> Mari
        </h2>
        <div className="line"></div>
        <ButtonWrapper>
          {" "}
          <button className="galleri">GALLERI</button>
          <button className="omMeg">OM MEG</button>
        </ButtonWrapper>
      </ImageWrapper>
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes && (
          <ProjectPreviewGrid title="Galleri" nodes={projectNodes} browseMoreHref="/archive/" />
        )}
      </Container>
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
