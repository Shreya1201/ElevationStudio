import React from "react";
import image from "../images/mation.gif";
import styled from "styled-components";
const IframeContainerStyle = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 40vh;
  }
`;

const Animation = () => {
  return (
    <div>
      <IframeContainerStyle>
        <img src={image} alt="" />
      </IframeContainerStyle>
    </div>
  );
};

export default Animation;
