import "../pages/work.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

export default function Work() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      description:
        "Golden Bricks Studio is a Delhi -NCR based interior architecture and design studio specializing in delivering meticulously tailored residential, commercial and hospitality projects. Our high-end design services are tailored to meet each client’s needs that encompass total turnkey solutions for our client’s homes, delivering singular and distinctive designs which reflect our values of thoughtful design.",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      description:
        "Golden Bricks Studio is a Delhi -NCR based interior architecture and design studio specializing in delivering meticulously tailored residential, commercial and hospitality projects. Our high-end design services are tailored to meet each client’s needs that encompass total turnkey solutions for our client’s homes, delivering singular and distinctive designs which reflect our values of thoughtful design.",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      description:
        "Golden Bricks Studio is a Delhi -NCR based interior architecture and design studio specializing in delivering meticulously tailored residential, commercial and hospitality projects. Our high-end design services are tailored to meet each client’s needs that encompass total turnkey solutions for our client’s homes, delivering singular and distinctive designs which reflect our values of thoughtful design.",
    },
  ];
  const Workcontainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 7rem 1rem;
  `;

  return (
    <Workcontainer>
      <ImageGallery
        items={images}
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
