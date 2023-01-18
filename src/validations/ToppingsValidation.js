import * as Yup from "yup";
export const toppingsFormSchema = Yup.object().shape({
  pepperoni: Yup.string(),
  sausage: Yup.string(),
  canadianBacon: Yup.string(),
  spicyItalianSausage: Yup.string(),
  grilledChicken: Yup.string(),
  onions: Yup.string(),
  greenPepper: Yup.string(),
  dicedTomatos: Yup.string(),
  blackOlives: Yup.string(),
  roastedGarlic: Yup.string(),
  artichokeHearts: Yup.string(),
  threeCheese: Yup.string(),
  pineapple: Yup.string(),
  extraCheese: Yup.string(),
});
