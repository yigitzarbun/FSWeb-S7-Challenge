import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  margin-bottom: 30vh;
  align-items: center;
`;

const StyledTopTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledOrderStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2vw;
  margin-bottom: 4vh;
`;

const StyledOrderStatusPending = styled.p`
  padding: 0.5rem;
  background-color: #eb455f;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;
const StyledOrderStatusConfirmed = styled.p`
  padding: 0.5rem;
  background-color: #03c988;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;

const StyledOrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;

const StyledOrderDetailsHeadings = styled.p`
  font-weight: bold;
`;

const StyledOrderSection = styled.div`
  display: flex;
  column-gap: 2vw;
`;

const StyledMainOrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  padding-bottom: 5vh;
`;

const StyledPlaceOrderButton = styled.button`
  color: black;
  border: 0.3rem solid black;
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

const StyledNoOrdersYetContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 2vh;
`;

const StyledNewOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3vh 0;
`;

const StyledNewOrderButton = styled.button`
  color: white;
  border: 0.3rem solid black;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  background-color: #eb455f;
  &:hover {
    color: black;
    background-color: white;
    font-weight: bold;
    border: 0.3rem solid #eb455f;
  }
`;
export default function Basket(props) {
  const { adminOrderDetails, orderStatus, totalValue } = props;
  return (
    <StyledBasketContainer>
      <StyledTopTitleContainer>
        <h2>Order Details</h2>
      </StyledTopTitleContainer>
      <StyledMainOrderDetailsContainer>
        <StyledOrderStatusContainer>
          {" "}
          <h4>Order status: </h4>
          {!orderStatus && (
            <>
              <StyledOrderStatusPending>Pending</StyledOrderStatusPending>
            </>
          )}
          {orderStatus && (
            <StyledOrderStatusConfirmed>Preparing</StyledOrderStatusConfirmed>
          )}
        </StyledOrderStatusContainer>
        {!orderStatus && (
          <StyledNoOrdersYetContainer>
            <p>You haven't placed an order yet.</p>
            <Link to="/pizza">
              <StyledPlaceOrderButton data-cy="order-now-button">
                Order Now
              </StyledPlaceOrderButton>
            </Link>
          </StyledNoOrdersYetContainer>
        )}
        {adminOrderDetails && (
          <StyledOrderDetailsContainer>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Size:</StyledOrderDetailsHeadings>
              <p>{adminOrderDetails.sizeDropdown}</p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Sauce: </StyledOrderDetailsHeadings>
              <p> {adminOrderDetails.sauce}</p>
            </StyledOrderSection>
            <StyledOrderDetailsHeadings>Toppings:</StyledOrderDetailsHeadings>
            <ul>
              {adminOrderDetails.selectedToppings.map((topping) => (
                <li>{topping}</li>
              ))}
              {/*Object.entries(toppings).map(([key, value]) => (
                <li>
                  {key.toLocaleUpperCase()} :{" "}
                  {toppings[key] === true ? "Yes" : "No"}
                </li>
              ))*/}
            </ul>

            {adminOrderDetails.glutenFreeCrust ? (
              <StyledOrderSection>
                <StyledOrderDetailsHeadings>
                  Gluten Free Crust:
                </StyledOrderDetailsHeadings>
                <p>Yes</p>
              </StyledOrderSection>
            ) : null}
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>
                Special Instructions:{" "}
              </StyledOrderDetailsHeadings>
              <p>
                {" "}
                {adminOrderDetails.specialText
                  ? adminOrderDetails.specialText
                  : "None"}
              </p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>
                Order Quantity:
              </StyledOrderDetailsHeadings>
              <p> {adminOrderDetails.orderQuantity}</p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Total: </StyledOrderDetailsHeadings>
              <p>${totalValue}</p>
            </StyledOrderSection>
          </StyledOrderDetailsContainer>
        )}
        {adminOrderDetails && (
          <StyledNewOrderContainer>
            <Link to="/pizza">
              <StyledNewOrderButton data-cy="place-new-order-button">
                New Order
              </StyledNewOrderButton>
            </Link>
          </StyledNewOrderContainer>
        )}
      </StyledMainOrderDetailsContainer>
    </StyledBasketContainer>
  );
}
