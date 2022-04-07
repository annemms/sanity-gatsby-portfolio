import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useEffect, useState, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import styled from "styled-components";

import * as styles from "./project.module.css";

const Wrapper = styled.div`
  margin: 2rem 4rem;
  margin-bottom: 150px;
`;

const Carousel = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  position: relative;
  @media (max-width: 48em) {
    margin-top: 40px;
    margin-bottom: 80px;
  }
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    text-align: center;
  }
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: #1bcacd;
    padding: 0;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
    fill: #506473;
  }

  .embla__button--prev {
    left: 27px;
  }

  .embla__button--next {
    right: 27px;
  }

  img {
    height: 500px;
    width: auto;
    @media (max-width: 48em) {
      height: 200px;
    }
  }
`;

function Project(props) {
  const {
    _rawBody,
    title,
    mainImage,
    price,
    isSold,
    publishedAt,
    relatedProjects,
    imagesGallery
  } = props;

  const [emblaRef] = useEmblaCarousel();

  const PrevButton = ({ enabled, onClick }) => (
    <button className="embla__button embla__button--prev" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
      </svg>
    </button>
  );

  const NextButton = ({ enabled, onClick }) => (
    <button className="embla__button embla__button--next" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
      </svg>
    </button>
  );

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  console.log(imagesGallery);
  return (
    <article className={styles.root}>
      <Carousel>
        <div className="embla" ref={emblaRef}>
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {imagesGallery.map(gallery => (
                <div className="embla__slide mainImage" key={gallery}>
                  <img src={imageUrlFor(buildImageObj(gallery)).url()} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Carousel>
      {/*       {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Wrapper>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </div>
            )}

            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Kanskje du også liker</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className={styles.publishedAt}>{price}</p>
            <p className={styles.publishedAt}>{props.format}</p>
          </aside>
        </div>
      </Wrapper>
    </article>
  );
}

export default Project;
