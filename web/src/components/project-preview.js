import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";
import styled from "styled-components";

const Root = styled(Link)`
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
  .title {
    font-size: 32px;
    margin: 0;
    padding: 18px;
    color: #fff;
    text-align: center;
  }
`;

const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  height: 300px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Price = styled.div`
  border: 4px solid white;
  border-radius: 40px;
  width: 40%;
  margin: 0 auto;
  padding: 8px 10px;
  margin-bottom: 32px;
  p {
    margin: 0;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }
  strong {
    font-weight: 600;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(58 58 59 / 60%);
  width: 100%;
  text-align: center;
`;

function ProjectPreview(props) {
  return (
    <Root to={`/project/${props.slug.current}`}>
      <LeadMediaThumb>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 900))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </LeadMediaThumb>

      <TextWrapper>
        <h3 className="title">{props.title}</h3>
        {props._rawExcerpt && (
          <Price>
            <BlockText blocks={props._rawExcerpt} />
          </Price>
        )}
      </TextWrapper>
    </Root>
  );
}

export default ProjectPreview;
