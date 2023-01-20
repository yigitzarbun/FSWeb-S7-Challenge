import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledEmptyRestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  min-height: 75vh;
  padding-bottom: 5vh;
  align-items: center;
`;

const StyledTechFoodHeading = styled.span`
  color: #eb455f;
  font-weight: bold;
`;
const StyledLogo = styled.img`
  width: 10vw;
`;
const StyledRestaurantButton = styled.button`
  color: black;
  border: 0.2rem solid #eb455f;
  border-radius: 20px;
  padding: 0.6vw 3vw;
  margin: 2vh 0;
  font-weight: bold;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;
export default function Empty() {
  return (
    <StyledEmptyRestaurantContainer>
      <h2>This restaurant's page is under construction</h2>
      <p>
        <StyledTechFoodHeading> Tech Food </StyledTechFoodHeading>is
        continiously striving to add new restaurants and related services in
        pursuit of delivering programmers a wide range of tasty and healthy food
        options
      </p>
      <p>As of today, PizzaHut is the only option available on Tech Food.</p>
      <StyledLogo src="images/pizzahut.png" alt="pizzahut-logo"></StyledLogo>
      <h3>
        Order your delicious pizza from PizzaHut now, and we'll deliver it
        within 35-45 mins.
      </h3>
      <Link to="/pizza">
        <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
      </Link>
    </StyledEmptyRestaurantContainer>
  );
}
