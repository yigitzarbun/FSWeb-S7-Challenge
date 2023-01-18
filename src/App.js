import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { orderFormSchema } from "./validations/OrderFormValidation";
import Header from "./Components/Header";
import Mainpage from "./Components/Mainpage";
import Form from "./Components/Form";
import Basket from "./Components/Basket";
import Footer from "./Components/Footer";

const App = () => {
  // STATES

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

  // Admin Order Data
  const [adminOrderDetails, setAdminOrderDetails] = useState("");

  // Order Button
  const [orderButtonDisabled, setOrderButtonDisabled] = useState(true);

  // Toppings Object
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
    selectedToppings: "test",
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

  // Extra Materials Value
  const [extraSum, setExtraSum] = useState(null);

  // Toppings Array
  const [toppingArray, setToppingArray] = useState([]);

  // HANDLE CHANGES

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

  // Toppings
  const handleTopping = (event) => {
    const { name, value, type, checked } = event.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }
    setToppings({ ...toppings, [name]: newValue });
  };

  // Topping Array
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

  // Order Value
  const handleOrderQuantitySum = (event) => {
    const { value } = event.target;
    setSum(value * 12);
  };

  // Toppings Array
  const handleSelectedToppingsArray = () => {
    setFormData({ ...formData, selectedToppings: toppingArray });
  };

  // Extra Materials
  const handleOrderCrustSum = (event) => {
    if (event.target.checked === true) {
      setExtraSum(1);
    } else if (event.target.checked !== true) {
      setExtraSum(0);
    }
  };

  // Submit Order Form
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        setAdminOrderDetails(response.data);
        setOrderStatus(true);
        setFormData({
          sizeDropdown: "",
          sauce: "",
          selectedToppings: [],
          glutenFreeCrust: "",
          specialText: "",
          name: "",
          address: "",
          orderQuantity: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // USE EFFECTs

  // Toppings Array
  useEffect(handleToppingArray, [toppings]);

  // Selected Toppings Array
  useEffect(handleSelectedToppingsArray, [toppingArray]);

  // Form Data (if form data is valid, removes disability of Submit Order Button)
  useEffect(() => {
    orderFormSchema
      .isValid(formData)
      .then((result) => setOrderButtonDisabled(!result));
  }, [formData]);

  // VALIDATION ERRORS
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

  // UI
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
            extraSum={extraSum}
            handleOrderQuantitySum={handleOrderQuantitySum}
            handleOrderCrustSum={handleOrderCrustSum}
            handleToppingArray={handleToppingArray}
          />
        </Route>
        <Route path="/basket">
          <Basket
            toppings={toppings}
            adminOrderDetails={adminOrderDetails}
            orderStatus={orderStatus}
            sum={sum}
            extraSum={extraSum}
          />
        </Route>
      </Switch>
      <ul>
        {toppingArray.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <p>{orderFormErrors.selectedToppings}</p>
      <Footer />
    </>
  );
};
export default App;
