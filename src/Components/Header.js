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
`;

const StyledHeaderLinks = styled.p`
  color: black;
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
