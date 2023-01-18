import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-image: url("./images/Pizza.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHeroTitleContainer = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  row-gap: 1vh;
`;

const StyledHeroTitle = styled.h1`
  font-weight: bolder;
  font-size: 3rem;
  width: 50%;
`;

const StyledSpan = styled.span`
  color: #eb455f;
  background-color: black;
  padding: 0.5rem;
`;

const StyledHeroButton = styled.button`
  color: black;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;

const StyledCityText = styled.h4`
  margin-left: 5%;
`;
const StyledAllRestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 5vh auto;
  column-gap: 2vw;
  row-gap: 2vh;
`;

const StyledRestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
  align-items: center;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
`;

const StyledRestaurantImage = styled.img`
  width 100%;
  height: 20vh;
  object-fit: contain;
`;

const StyledRestaurantTagsContainer = styled.div`
  display: flex;
  column-gap: 2vw;
`;

const StyledRestaurantName = styled.h5`
  font-size: 0.9rem;
`;

const StyledRestaurantInfoTexts = styled.p`
  font-size: 0.8rem;
`;

const StyledRestaurantTags = styled.p`
  color: black;
  font-style: italic;
  padding: 0.1vw 0.6vw;
  margin: 2vh 0;
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledRestaurantButton = styled.button`
  color: black;
  border: 0.2rem solid #eb455f;
  border-radius: 20px;
  padding: 0.3vw 3vw;
  margin: 2vh 0;
  font-weight: bold;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;

export default function Mainpage() {
  return (
    <StyledMainPageContainer>
      <StyledHero>
        <StyledHeroTitleContainer>
          <StyledHeroTitle>
            Your favourite food,{" "}
            <StyledSpan>delivered While (coding)</StyledSpan>
          </StyledHeroTitle>
          <Link to="/pizza" id="order-pizza">
            <StyledHeroButton>Order Pizza</StyledHeroButton>
          </Link>
        </StyledHeroTitleContainer>
      </StyledHero>
      <StyledCityText>Food Delivery in Gotham City</StyledCityText>
      <StyledAllRestaurantsContainer>
        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/mcdonalds.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>McDonald's</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - American - Fast Food - Burgers
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>20-30 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$5.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/pizzahut.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>PizzaHut</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - Healthy - Salads
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$4.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/pizza" id="order-pizza">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/starbucks.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Starbucks</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - Cafe - Coffee & Tea - Breakfast and Brunch
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>10-20 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$3.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/burgerking.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>BurgerKing</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - American - Fast Food - Burgers
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>20-30 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$5.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/nandos.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Nando's</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - Healthy - Falafel
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$4.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/cafenero.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Cafe Nero</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - Cafe - Coffee & Tea - Breakfast and Brunch
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$4.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
        </StyledRestaurantContainer>
      </StyledAllRestaurantsContainer>
    </StyledMainPageContainer>
  );
}
