import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

const StyledHeaderLogo = styled.h2`
  color: #eb455f;
  font-size: 2rem;
  text-decoration: underline white;
`;

const StyledHeaderLinksContainer = styled.div`
  display: flex;
  column-gap: 2vw;
  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    margin: 1vh 0;
  }
`;

const StyledHeaderLinks = styled.p`
  color: black;
  max-font-size: 2vw;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  text-decoration: underline white;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
    text-decoration: underline #eb455f;
  }
  @media (max-width: 720px) {
    font-size: 1rem;
  }
  @media (max-width: 630px) {
    border: 0.1rem solid #eb455f;
  }
  @media (max-width: 300px) {
    border: 0.1rem solid #eb455f;
    font-size: 0.7rem;
    padding: 0 1rem;
    min-width: 30vw;
    text-align: center;
  }
`;

export default function Header() {
  return (
    <StyledHeaderContainer>
      <Link to="/">
        <StyledHeaderLogo>Tech Food</StyledHeaderLogo>
      </Link>
      <StyledHeaderLinksContainer>
        <Link to="/">
          <StyledHeaderLinks>Home</StyledHeaderLinks>
        </Link>
        <Link to="/pizza">
          <StyledHeaderLinks>My Order</StyledHeaderLinks>
        </Link>
        <Link to="/basket">
          <StyledHeaderLinks>Basket</StyledHeaderLinks>
        </Link>
      </StyledHeaderLinksContainer>
    </StyledHeaderContainer>
  );
}
