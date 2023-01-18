import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  margin-bottom: 2vh;
`;

const StyledTopTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-image: url("./images/Pizza.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledOrderSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledOrderSectionHeading = styled.div`
  background-color: #ffeeee;
  padding: 2vh 0;
  margin: 2vh 0;
`;

const StyledOrderSectionHeadingTitle = styled.p`
  font-weight: bold;
`;

const StyledOrderSectionHeadingSubTitle = styled.p`
  font-size: 0.8rem;
`;

const StyledToppingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledToppingsContainerSelection = styled.div`
  width: 40%;
`;

const StyledSpecialInstructionsContainer = styled.label`
  display: flex;
  justify-content: center;
`;
const StyledSpecialInstructionsInput = styled.input`
  width: 90%;
  height: 7vh;
  margin: 3vh 0;
`;

const StyledPersonalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledPersonalDetailsInput = styled.input`
  width: 90%;
  height: 7vh;
  margin: 3vh auto;
`;

const StyledPlaceOrderContainer = styled.label`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid black;
  height: 10vh;
  margin: 3vh auto;
  align-items: center;
  padding: 1.5rem 0;
`;

const StyledPlaceOrderInput = styled.input`
  width: 20%;
`;

const StyledPlaceOrderButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  column-gap: 1vw;
`;

const StyledOrderButtonTexts = styled.p`
  text-decoration: none;
`;

const StyledErrorText = styled.p`
  color: #eb455f;
  margin-bottom: 5vh;
  font-size: 0.8rem;
`;

const StyledOrderSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StyledOrderSuccessButton = styled.button`
  padding: 0.5rem;
  width: 50%;
  margin: 2vh 0;
`;

export default function Form(props) {
  const {
    handleChange,
    formData,
    orderButtonDisabled,
    toppings,
    handleTopping,
    orderFormErrors,
    handleSubmit,
    adminOrderDetails,
    sum,
    extraSum,
    handleOrderQuantitySum,
    handleOrderCrustSum,
    handleToppingArray,
  } = props;

  return (
    <StyledFormPageContainer>
      <StyledTopTitleContainer>
        <h3>Build Your Own Pizza</h3>
      </StyledTopTitleContainer>
      <StyledHero></StyledHero>
      {!adminOrderDetails && (
        <StyledOrderSection>
          <h2>Build Your Own Pizza</h2>

          <form id="pizza-form" onSubmit={handleSubmit}>
            <label htmlFor="size">
              <StyledOrderSectionHeading>
                <StyledOrderSectionHeadingTitle>
                  Choice of Size
                </StyledOrderSectionHeadingTitle>
                <StyledOrderSectionHeadingSubTitle>
                  Required
                </StyledOrderSectionHeadingSubTitle>
              </StyledOrderSectionHeading>
              <select
                id="size-dropdown"
                name="sizeDropdown"
                value={formData.sizeDropdown}
                onChange={handleChange}
              >
                <option></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </label>
            <StyledErrorText>{orderFormErrors.sizeDropdown}</StyledErrorText>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Choice of Sauce
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Required
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <input
              type="radio"
              id="original-red"
              name="sauce"
              onChange={handleChange}
              value="original-red"
            ></input>
            <label htmlFor="original-red">Original Red</label>
            <br></br>
            <input
              type="radio"
              id="garlic-ranch"
              name="sauce"
              onChange={handleChange}
              value="garlic-ranch"
            ></input>
            <label htmlFor="garlic-ranch">Garlic Ranch</label>
            <br></br>
            <input
              type="radio"
              id="bbq-sauce"
              name="sauce"
              onChange={handleChange}
              value="bbq-sauce"
            ></input>
            <label htmlFor="bbq-sauce">BBQ Sauce</label>
            <br></br>
            <input
              type="radio"
              id="spinach-alfredo"
              name="sauce"
              onChange={handleChange}
              value="spinach-alfredo"
            ></input>
            <label htmlFor="spinach-alfredo">Spinach Alfredo</label>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Add Toppings
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Choose up to 10
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <p>{orderFormErrors.selectedToppings}</p>
            <StyledToppingsContainer>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="pepperoni"
                  name="pepperoni"
                  onChange={handleTopping}
                  checked={toppings.pepperoni}
                />
                <label>Pepperoni</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="sausage"
                  name="sausage"
                  onChange={handleTopping}
                  checked={toppings.sausage}
                />
                <label>Sausage</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="canadian-bacon"
                  name="canadianBacon"
                  onChange={handleTopping}
                  checked={toppings.canadianBacon}
                />
                <label>Canadian Bacon</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="spicy-italian-sausage"
                  name="spicyItalianSausage"
                  onChange={handleTopping}
                  checked={toppings.spicyItalianSausage}
                />
                <label>Spicy Italian Sausage</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="grilled-chicken"
                  name="grilledChicken"
                  onChange={handleTopping}
                  checked={toppings.grilledChicken}
                />
                <label>Grilled Chicken</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="onions"
                  name="onions"
                  onChange={handleTopping}
                  checked={toppings.onions}
                />
                <label>Onions</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="green-pepper"
                  name="greenPepper"
                  onChange={handleTopping}
                  checked={toppings.greenPepper}
                />
                <label>Green Pepper</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="diced-tomatos"
                  name="dicedTomatos"
                  onChange={handleTopping}
                  checked={toppings.dicedTomatos}
                />
                <label>Diced Tomatos</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="black-olives"
                  name="blackOlives"
                  onChange={handleTopping}
                  checked={toppings.blackOlives}
                />
                <label>Black Olives</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="roasted-garlic"
                  name="roastedGarlic"
                  onChange={handleTopping}
                  checked={toppings.roastedGarlic}
                />
                <label>Roasted Garlic</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="artichoke-hearts"
                  name="artichokeHearts"
                  onChange={handleTopping}
                  checked={toppings.artichokeHearts}
                />
                <label>Artichoke Hearts</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="three-cheese"
                  name="threeCheese"
                  onChange={handleTopping}
                  checked={toppings.threeCheese}
                />
                <label>Three Cheese</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="pineapple"
                  name="pineapple"
                  onChange={handleTopping}
                  checked={toppings.pineapple}
                />
                <label>Pineapple</label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <input
                  type="checkbox"
                  id="extra-cheese"
                  name="extraCheese"
                  onChange={handleTopping}
                  checked={toppings.extraCheese}
                />
                <label>Extra Cheese</label>
              </StyledToppingsContainerSelection>
            </StyledToppingsContainer>

            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Choice of Substitute
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Pay only $1.00 for multiple pizza orders
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <input
              type="checkbox"
              id="gluten-free-crust"
              name="glutenFreeCrust"
              checked={formData.glutenFreeCrust}
              onChange={handleChange}
              onClick={handleOrderCrustSum}
            />
            <label htmlFor="gluten-free-crust">
              Gluten Free Crust (+ $1.00){" "}
            </label>

            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Special Instructions
              </StyledOrderSectionHeadingTitle>
            </StyledOrderSectionHeading>
            <StyledSpecialInstructionsContainer>
              <StyledSpecialInstructionsInput
                type="text"
                placeholder="Anything else you'd like to add?"
                id="special-text"
                name="specialText"
                value={formData.specialText}
                onChange={handleChange}
              />
            </StyledSpecialInstructionsContainer>
            <StyledErrorText>{orderFormErrors.specialText}</StyledErrorText>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Delivery Details
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Required
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <StyledPersonalDetailsContainer>
              <label htmlFor="name">
                Full Name: <br></br>
                <StyledPersonalDetailsInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name.."
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <StyledErrorText>{orderFormErrors.name}</StyledErrorText>
              <label htmlFor="address">
                Address:<br></br>
                <StyledPersonalDetailsInput
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Xyz Street, Building no: 123, City, Postcode"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              <StyledErrorText>{orderFormErrors.address}</StyledErrorText>
            </StyledPersonalDetailsContainer>
            <StyledPlaceOrderContainer>
              <StyledPlaceOrderInput
                type="number"
                id="order-quantity"
                name="orderQuantity"
                value={formData.orderQuantity}
                onChange={handleChange}
                onClick={handleOrderQuantitySum}
                min="1"
              />

              <StyledPlaceOrderButton
                id="order-button"
                disabled={orderButtonDisabled}
              >
                <StyledOrderButtonTexts>Add to Order</StyledOrderButtonTexts>
                <StyledOrderButtonTexts>
                  ${sum + extraSum}
                </StyledOrderButtonTexts>
              </StyledPlaceOrderButton>
              <StyledErrorText>{orderFormErrors.orderQuantity}</StyledErrorText>
            </StyledPlaceOrderContainer>
          </form>
        </StyledOrderSection>
      )}
      {adminOrderDetails && (
        <StyledOrderSuccessContainer>
          <h2>Order was placed successfully!</h2>
          <p>You may now track your order details</p>
          <Link
            to="/basket"
            style={{
              textDecoration: "none",
              width: "50%",
              padding: "0.5rem",
              margin: "2vh 0",
            }}
          >
            <StyledOrderSuccessButton>See Details</StyledOrderSuccessButton>
          </Link>
        </StyledOrderSuccessContainer>
      )}
    </StyledFormPageContainer>
  );
}
