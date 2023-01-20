import React from "react";
import styled from "styled-components";

const StyledAdminPanelContainer = styled.div`
  margin-bottom: 65vh;
`;

const StyledTable = styled.table`
  width: 90%;
  border-spacing: 1.5rem;
  border: 0.1rem solid #eb455f;
  border-radius: 20px;
  margin: 0 auto;
`;

const StyledHeadingRow = styled.tr`
  border-bottom: 0.1rem solid #eb455f;
  color: #eb455f;
`;

const StyledColumn = styled.th`
  overflow-wrap: break-word;
  border-left: 0.1rem solid #eb455f;
`;

export default function Admin(props) {
  const { adminOrderDetails, orderStatus, totalValue } = props;
  return (
    <StyledAdminPanelContainer>
      <StyledTable>
        <StyledHeadingRow>
          <StyledColumn>Status</StyledColumn>
          <StyledColumn>Size</StyledColumn>
          <StyledColumn>Sauce</StyledColumn>
          <StyledColumn>Toppings</StyledColumn>
          <StyledColumn>Gluten Free Crust</StyledColumn>
          <StyledColumn>Notes</StyledColumn>
          <StyledColumn>Order Qty</StyledColumn>
          <StyledColumn>Total</StyledColumn>
          <StyledColumn>Name</StyledColumn>
          <StyledColumn>Address</StyledColumn>
        </StyledHeadingRow>
        {orderStatus ? (
          <tr>
            <StyledColumn>Active</StyledColumn>
            <StyledColumn>{adminOrderDetails.sizeDropdown}</StyledColumn>
            <StyledColumn>{adminOrderDetails.sauce}</StyledColumn>
            <StyledColumn>
              <ul>
                {adminOrderDetails.selectedToppings.length > 0
                  ? adminOrderDetails.selectedToppings.map((topping) => (
                      <li>{topping}</li>
                    ))
                  : "None"}
              </ul>
            </StyledColumn>
            <StyledColumn>
              {adminOrderDetails.glutenFreeCrust ? "Yes" : "No"}
            </StyledColumn>
            <StyledColumn>
              {adminOrderDetails.specialText
                ? adminOrderDetails.specialText
                : "None"}
            </StyledColumn>
            <StyledColumn>{adminOrderDetails.orderQuantity}</StyledColumn>
            <StyledColumn>${totalValue}</StyledColumn>
            <StyledColumn>{adminOrderDetails.name}</StyledColumn>
            <StyledColumn>{adminOrderDetails.address}</StyledColumn>
          </tr>
        ) : (
          <h2>No Active Orders</h2>
        )}
      </StyledTable>
    </StyledAdminPanelContainer>
  );
}
