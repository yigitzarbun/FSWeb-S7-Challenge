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
  margin-bottom: 15vh;
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
  padding: 1rem;
`;

const StyledNoOrdersYetContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 2vh;
`;

export default function Basket(props) {
  const { toppings, adminOrderDetails, orderStatus, sum } = props;

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
            <p>
              You didn't place any orders yet. Visit your order form to place an
              order.
            </p>
            <Link to="/pizza">
              <StyledPlaceOrderButton>Order Form</StyledPlaceOrderButton>
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
              {Object.entries(toppings).map(([key, value]) => (
                <li>
                  {key.toLocaleUpperCase()} :{" "}
                  {toppings[key] === true ? "Yes" : "No"}
                </li>
              ))}
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
              <p>${sum}</p>
            </StyledOrderSection>
          </StyledOrderDetailsContainer>
        )}
      </StyledMainOrderDetailsContainer>
    </StyledBasketContainer>
  );
}
