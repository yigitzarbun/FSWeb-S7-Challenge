import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5vw;
  align-items: center;
  background-color: #eb455f;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledFooterLogo = styled.h2`
  color: white;
  font-size: 2rem;
`;

const StyledFooterLinksContainer = styled.div`
  display: flex;
  column-gap: 2vw;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
  }
`;

const StyledFooterLinks = styled.p`
  color: black;
  border: 0.3rem solid white;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  text-decoration: underline #eb455f;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;
export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterLogo>Tech Food</StyledFooterLogo>
      <StyledFooterLinksContainer>
        <StyledFooterLinks>FAQ</StyledFooterLinks>
        <StyledFooterLinks>Contact Us</StyledFooterLinks>
        <Link to="/admin">
          <StyledFooterLinks>Admin</StyledFooterLinks>
        </Link>
      </StyledFooterLinksContainer>
    </StyledFooterContainer>
  );
}
