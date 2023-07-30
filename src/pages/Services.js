import React from "react";
import styled from "styled-components";
import "./services.css";
import _1png from "../images/services/1.png";
import _2png from "../images/services/2.png";
import _3png from "../images/services/3.png";
import _4png from "../images/services/4.png";
import _5png from "../images/services/5.png";
import _6png from "../images/services/6.png";
const ServicesContainer = styled.div`
  padding: 5rem;
`;
const Services = () => {
  return (
    <ServicesContainer>
      <div className="service">
        <h1>Our Services</h1>
        <p>Let us help you make your dreams a reality.</p>
        <div className="layoutservice">
          <div className="container-3">
            <div className="container">
              <div className="container-img">
                <img src={_1png} alt="h" width="350" height="350" />
                <div className="middle">
                  <p>Bathroom</p>
                </div>
              </div>
              <div className="container-title">
                <h5>Architecture Design</h5>
              </div>
              <div className="container-details">
                <p>
                  Golden bricks studio provides comprehensive architectural
                  design services integrated with structural, plumbing,
                  electrical, lighting, automation and air-conditioning
                  engineering. The firm takes a project right from
                  conceptualization to finishing
                </p>
              </div>
            </div>
            <div className="container">
              <div className="container-img">
                <img src={_2png} alt="h" width="350" height="350" />
              </div>
              <div className="container-title">
                <h5>Interior Design</h5>
              </div>
              <div className="container-details">
                <p>
                  Golden bricks studio provides interior design services
                  inclusive of all required engineering services. With a
                  dedicated team of designers, architects, artists and product
                  developers.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="container-img">
                <img src={_3png} alt="h" width="350" height="350" />
              </div>
              <div className="container-title">
                <h5>Furniture Design</h5>
              </div>
              <div className="container-details">
                <p>
                  Golden bricks studio provides the marvelous design of
                  different furniture for both residential and commercial
                  buildings. We provide a highly functional item as per our
                  clients’ space and budget.
                </p>
              </div>
            </div>
          </div>
          <div className="container-3">
            <div className="container">
              <div className="container-img">
                <img src={_4png} alt="h" width="350" height="350" />
              </div>
              <div className="container-title">
                <h5>Detailed Estimation</h5>
              </div>
              <div className="container-details">
                <p>
                  Golden Bricks Studio can Provide you with interior and
                  exterior BOQ, with full details of the finishes, quality of
                  material, and current market rates.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="container-img">
                <img src={_5png} alt="h" width="350" height="350" />
              </div>
              <div className="container-title">
                <h5>3D Designing Services</h5>
              </div>
              <div className="container-details">
                <p>
                  Golden bricks studio provides you with the finest quality of
                  rendered floor plans and views for you interiors and
                  exteriors. Animation / walkthroughs to give you the realistic
                  feel for your interiors as well as exteriors.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="container-img">
                <img src={_6png} alt="h" width="350" height="350" />
              </div>
              <div className="container-title">
                <h5>Artworks</h5>
              </div>
              <div className="container-details">
                <p>
                  If you want to put the finishing touches on your indoor
                  spaces, artwork is the right solution! At Golden bricks
                  studio, we enhance the appeal of your buildings and facilities
                  with our stylish yet functional artwork service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
