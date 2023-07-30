import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import { Link } from 'react-router-dom';
import {SlSocialInstagram} from "react-icons/sl";
import {SlSocialTwitter} from "react-icons/sl";
import {SiLinkedin} from "react-icons/si";
import {SiGmail} from "react-icons/si";


const FooterContainer=styled.div`
background:#000d1a;
color:#fff;
padding:3rem;
display:flex;
flex-direction: column;
grid-template-columns:1fr;
grid-template-rows:800px;

@media screen and (max-width:855px){
    grid-template-columns:1fr;

}

`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left:0.5rem;
`;

const FooterLeft=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;

h1{
    font-size:60px;
}

@media screen and (max-width:855px){
    grid-template-columns:1fr;
    h1{
        font-size:40px;
    }
    
}
`;

const FooterRight=styled.div`
padding:1rem 2rem;
display:flex;
@media screen and (max-width:855px){
    margin-left:none;
}

`;

const Socials=styled(Link)`

&:hover{
    color:#cd853f;
    transform: translateY(-2px);
}
`;

const Instagran=styled(SlSocialInstagram)`
margin:20px;
color:white;
height:40px;
width:30px;
@media screen and (max-width:855px){
    height:15px;
    width:15px;
}
`;

const Twitter=styled(SlSocialTwitter)`
margin:20px;
color:white;
height:40px;
width:30px;
@media screen and (max-width:855px){
    height:15px;
    width:15px;
}
`;

const Gmail=styled(SiGmail)`
margin:20px;
color:white;
height:40px;
width:30px;
@media screen and (max-width:855px){
    height:15px;
    width:15px;
}
`;

const LinkedIn=styled(SiLinkedin)`
margin:20px;
color:white;
height:40px;
width:30px;
@media screen and (max-width:855px){
    height:15px;
    width:15px;
}
`;

const Footer = () => {
  return (
    <FooterContainer>
     <FooterLeft>
        <h1>Let's Design <br></br>Your Future Home</h1>
        <Button to="/contact" primary='true' css={`max-width:160px`}>
            Contact Us<Arrow/>
        </Button>
     </FooterLeft>
     <FooterRight>
        <Socials to="/">
            <Instagran/>
        </Socials>
        <Socials to="/">
            <Twitter/>
        </Socials>
        <Socials to="/">
            <Gmail/>
        </Socials>
        <Socials to="/">
            <LinkedIn/>
        </Socials>

     </FooterRight>
    </FooterContainer>
  )
}

export default Footer
