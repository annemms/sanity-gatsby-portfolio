import { Link } from "gatsby";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styled from "styled-components";

const Root = styled(Link)`
  position: relative;
  display: block;
  color: inherit;
  overflow: hidden;
  text-decoration: none;
  .title {
    font-size: 32px;
    margin: 0;
    margin-top: 12px;
    padding: 18px;
    color: #506473;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  .isSold {
    position: absolute;
    top: -4px;
    left: -65px;
    background: white;
    padding: 10px 20px;
    transform: rotate(-45deg);
    width: 210px;
    text-align: center;
    @media (max-width: 600px) {
      top: 12px;
    }
  }
`;

const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 115%;
  background: #eee;
  display: block;
  transition: transform 0.4s;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0;
    transition: 0.7s;

    :hover {
      transform: scale(1.05);
    }
  }
`;

const Price = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 8px 10px;
  margin-bottom: 130px;
  background: #fff;
  border-radius: 40px;

  h3 {
    margin: 0;
    font-size: 20px;
    color: #506473;
    font-weight: 600;
  }
  strong {
    font-weight: 600;
  }
  :hover {
    border: 4px solid white;
    border-radius: 40px;
    background: none;
    padding: 6px 10px;
    h3 {
      color: #fff;
    }
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

function ProjectPreview(props) {
  return (
    <Root to={`/galleri/${props.slug.current}`}>
      <LeadMediaThumb>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(800)
              .height(Math.floor((9 / 16) * 1800))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </LeadMediaThumb>
      {props.isSold && props.archivePage && <p className="isSold">SOLGT</p>}
      <h3 className="title">{props.title}</h3>
      <TextWrapper>
        {props.price && (
          <Price>
            <h3>{props.price}</h3>
          </Price>
        )}
      </TextWrapper>
    </Root>
  );
}

export default ProjectPreview;
