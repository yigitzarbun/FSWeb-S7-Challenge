import * as Yup from "yup";
export const orderFormSchema = Yup.object().shape({
  sizeDropdown: Yup.string()
    .required("You must choose a size")
    .min(1, "You must choose a size"),
  sauce: Yup.string().required("You must choose a sauce"),
  selectedToppings: Yup.array()
  .min(2, "min 2"),
  glutenFreeCrust: Yup.string(),
  specialText: Yup.string().max(
    140,
    "Your message must be less than 140 characters."
  ),
  name: Yup.string()
    .required("You must enter your full name")
    .min(3, "Enter a valid name"),
  address: Yup.string()
    .required()
    .min(10, "You must enter a valid address"),
  orderQuantity: Yup.number("Min. order quantity is 1.")
    .required("Min. order quantity is 1.")
    .min(1, "Min. order quantity is 1.")
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable(),
});
