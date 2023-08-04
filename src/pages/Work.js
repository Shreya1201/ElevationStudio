import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import img1 from "../images/work/1.JPG";
import img2 from "../images/work/2.JPG";
import img3 from "../images/work/3.JPG";
import img4 from "../images/work/4.JPG";
import img5 from "../images/work/5.JPG";
import img6 from "../images/work/6.JPG";
import img7 from "../images/work/7.JPG";

import "./work.css";
export default function Work() {
  const images = [
    {
      original: img1,
      thumbnail: img1,
      description: "Golden Bricks Studio.",
    },
    {
      original: img2,
      thumbnail: img2,
      description: "Golden Bricks Studio.",
    },
    {
      original: img3,
      thumbnail: img3,
      description: "Golden Bricks Studio.",
    },
    {
      original: img4,
      thumbnail: img4,
      description: "Golden Bricks Studio.",
    },
    {
      original: img5,
      thumbnail: img5,
      description: "Golden Bricks Studio.",
    },
    {
      original: img6,
      thumbnail: img6,
      description: "Golden Bricks Studio.",
    },
    {
      original: img7,
      thumbnail: img7,
      description: "Golden Bricks Studio.",
    },
  ];
  const Workcontainer = styled.div`
    padding-top: 140px;
    padding-left: 200px;
    padding-right: 200px;
    padding-bottom: 100px;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
      padding-bottom: 50px;
    }
  `;

  return (
    <Workcontainer>
      <h1>Our Work</h1>
      <p>All our past works</p>
      <ImageGallery
        items={images}
        originalHeight={2000}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        description={images}
        showIndex={true}
        thumbnailPosition="right"
      />
    </Workcontainer>
  );
}
