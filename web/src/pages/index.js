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
import styled from "styled-components";
import ContactForm from "../components/contact-form";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      image {
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
    projects: allSanitySampleProject(
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
          isSold
          slug {
            current
          }
        }
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  padding-top: 75%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const H1 = styled.h1`
  color: #506473;
  margin-top: 100px;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 32px;
    margin-top: 50px;
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

  const filteredProjectNodes = projectNodes.filter(item => !item.isSold);
  return (
    <>
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <HeaderWrapper>
          <img src={imageUrlFor(buildImageObj(site.image)).url()} alt={site.image.alt} />
        </HeaderWrapper>
        <Container>
          <H1>Art by Mari</H1>
          <h2 className="infoText">{site.description}</h2>
          {projectNodes && (
            <ProjectPreviewGrid
              title="TIL SALGS"
              nodes={filteredProjectNodes}
              browseMoreHref="/archive/"
            />
          )}
        </Container>
        <ContactForm />
      </Layout>
    </>
  );
};

export default IndexPage;
