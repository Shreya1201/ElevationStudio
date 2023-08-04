import React from "react";
import img from "../images/404.gif";
import styled from "styled-components";

const NotFound = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 60vh;
  }
`;

function Pagenotfound() {
  return (
    <NotFound>
      <img src={img} alt=""></img>
      <h1>Look like you're lost!</h1>
      <h3>The page you are looking for is not available!</h3>
    </NotFound>
  );
}

export default Pagenotfound;
