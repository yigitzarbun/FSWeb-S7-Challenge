import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import { orderFormSchema } from "./validations/OrderFormValidation";
import Header from "./Components/Header";
import Mainpage from "./Components/Mainpage";
import Form from "./Components/Form";
import Basket from "./Components/Basket";
import Empty from "./Components/Empty";
import Footer from "./Components/Footer";
import Admin from "./Components/Admin";

// STYLE
const StyledSuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2vw;
  margin-bottom: 4vh;
`;

const StyledSuccessText = styled.p`
  padding: 0.5rem;
  background-color: #03c988;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;

const StyledBasketSpan = styled.span`
  color: #eb455f;
  background-color: white;
  border-radius: 20px;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-weight: bold;
`;

const App = () => {
  // STATES -------------------------------------------------

  // Order Form Data
  const [formData, setFormData] = useState({
    sizeDropdown: "",
    sauce: "",
    selectedToppings: [],
    glutenFreeCrust: "",
    specialText: "",
    name: "",
    address: "",
    orderQuantity: "1",
  });
  console.log(formData);
  // Admin Order Data
  const [adminOrderDetails, setAdminOrderDetails] = useState("");

  // Order Button
  const [orderButtonDisabled, setOrderButtonDisabled] = useState(true);

  // Toppings Object (Form.js dosyasındaki handleTopping onChange event'e göre her malezemeyi True / False yapar.)
  const [toppings, setToppings] = useState({
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatos: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
  });

  // Order Form Error
  const [orderFormErrors, setOrderFormErrors] = useState({
    sizeDropdown: "",
    sauce: "",
    selectedToppings: "",
    glutenFreeCrust: "",
    specialText: "",
    name: "",
    address: "",
    orderQuantity: null,
  });

  // Order Status
  const [orderStatus, setOrderStatus] = useState(false);

  // Order Value (pizza price * order quantity)
  const [sum, setSum] = useState(12);

  // Sipariş toplam ücretini (formData bazlı sum state'ten almak yerine), submit esnasında kendi state'ine transfer ediyor.
  const [totalValue, setTotalValue] = useState(null);

  // Toppings Array
  const [toppingArray, setToppingArray] = useState([]);

  // HANDLE CHANGES -------------------------------------------------

  // Order Form
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }

    checkOrderFormErrors(name, newValue);
    setFormData({ ...formData, [name]: newValue });
  };

  // Toppings (Toppings objesinin state'ini günceller. Malzemeleri True / False olarak değiştirir.)
  const handleTopping = (event) => {
    const { name, value, type, checked } = event.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }
    setToppings({ ...toppings, [name]: newValue });
  };
  // Topping Array (Toppings objesinde True olan malzemeleri, toppingsArray'e ekler veya çıkarır)
  const handleToppingArray = () => {
    for (let i = 0; i < Object.keys(toppings).length; i++) {
      if (
        toppings[Object.keys(toppings)[i]] === true &&
        toppingArray.includes(Object.keys(toppings)[i]) === false
      ) {
        let newArray = [Object.keys(toppings)[i]];
        setToppingArray([...toppingArray, ...newArray]);
      } else if (
        toppings[Object.keys(toppings)[i]] === false &&
        toppingArray.includes(Object.keys(toppings)[i]) === true
      ) {
        let newArray = [...toppingArray];
        setToppingArray(
          newArray.filter((topping) => {
            return topping !== Object.keys(toppings)[i];
          })
        );
      }
    }
  };

  // Toppings Array (toppingsArray uzunluğunu formData'daki selectedToppings'e gönderir)
  const handleSelectedToppingsArray = () => {
    setFormData({
      ...formData,
      selectedToppings: toppingArray,
    });
    checkOrderFormErrors("selectedToppings", toppingArray);
  };

  // Order Value
  const handleOrderQuantitySum = () => {
    formData.glutenFreeCrust !== true
      ? setSum(formData.orderQuantity * 12)
      : setSum(formData.orderQuantity * 12 + formData.orderQuantity * 1);
  };
  // Clear Order Form
  const handleClear = () => {
    setFormData({
      sizeDropdown: "",
      sauce: "",
      selectedToppings: [],
      glutenFreeCrust: "",
      specialText: "",
      name: "",
      address: "",
      orderQuantity: "1",
    });
    setToppings({
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      spicyItalianSausage: false,
      grilledChicken: false,
      onions: false,
      greenPepper: false,
      dicedTomatos: false,
      blackOlives: false,
      roastedGarlic: false,
      artichokeHearts: false,
      threeCheese: false,
      pineapple: false,
      extraCheese: false,
    });
  };
  // Submit Order Form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (orderButtonDisabled === false) {
      axios
        .post("https://reqres.in/api/users", formData)
        .then((response) => {
          setAdminOrderDetails(response.data);
          setTotalValue(sum);
          setOrderStatus(true);
          setFormData({
            sizeDropdown: "",
            sauce: "",
            selectedToppings: null,
            glutenFreeCrust: "",
            specialText: "",
            name: "",
            address: "",
            orderQuantity: null,
          });
          setTimeout(() => {
            document.getElementById("success-message").textContent = "";
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // USE EFFECTs -------------------------------------------------

  // Toppings Array (Toppings'de değişiklik olduğunda toppingArray'e malzeme ekler / çıkarır)
  useEffect(handleToppingArray, [toppings]);

  // Selected Toppings Array (toppingArray'de değiliklik olduğunda, formData'daki selectedToppings'i değiştirir)
  useEffect(handleSelectedToppingsArray, [toppingArray]);

  // Form Data (Form validasyonu geçerse, sipariş oluştur butonu geçerli olacak)
  useEffect(() => {
    orderFormSchema
      .isValid(formData)
      .then((result) => setOrderButtonDisabled(!result));
  }, [formData]);

  /* Form Data'da değişiklik olduğunda sipariş miktarını ve glutensiz hamur özelliğini 
  dikkate alarak toplam ücreti hesaplıyor. Fakat, submit yapıldığıdna formData 0'landığı için, 
  sipariş toplam ücretini Basket.js belgesine totalValue isimli state taşıyor. */
  useEffect(handleOrderQuantitySum, [formData]);

  // VALIDATION ERRORS -------------------------------------------------
  function checkOrderFormErrors(name, value) {
    Yup.reach(orderFormSchema, name)
      .validate(value)
      .then(() => {
        setOrderFormErrors({
          ...orderFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setOrderFormErrors({
          ...orderFormErrors,
          [name]: err.errors[0],
        });
      });
  }

  // UI -------------------------------------------------
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/pizza">
          <Form
            handleChange={handleChange}
            formData={formData}
            orderButtonDisabled={orderButtonDisabled}
            toppings={toppings}
            handleTopping={handleTopping}
            orderFormErrors={orderFormErrors}
            handleSubmit={handleSubmit}
            adminOrderDetails={adminOrderDetails}
            sum={sum}
            handleOrderQuantitySum={handleOrderQuantitySum}
            handleToppingArray={handleToppingArray}
            handleClear={handleClear}
          />
        </Route>
        <Route path="/basket">
          <Basket
            toppings={toppings}
            adminOrderDetails={adminOrderDetails}
            orderStatus={orderStatus}
            totalValue={totalValue}
          />
        </Route>
        <Route path="/empty">
          <Empty />
        </Route>
        <Route path="/admin">
          <Admin
            adminOrderDetails={adminOrderDetails}
            orderStatus={orderStatus}
            totalValue={totalValue}
          />
        </Route>
      </Switch>
      {adminOrderDetails && (
        <StyledSuccessContainer id="success-message">
          <StyledSuccessText>
            Check your order details from{" "}
            <StyledBasketSpan>Basket </StyledBasketSpan>or create a new order.
          </StyledSuccessText>
        </StyledSuccessContainer>
      )}

      <Footer />
    </>
  );
};
export default App;
