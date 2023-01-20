import * as Yup from "yup";
export const orderFormSchema = Yup.object().shape({
  sizeDropdown: Yup.string()
    .required("You must choose a size.")
    .min(1, "You must choose a size."),
  sauce: Yup.string().required("You must choose a sauce."),
  selectedToppings: Yup.array().max(10, "You can choose up to 10 toppings."),
  glutenFreeCrust: Yup.string(),
  specialText: Yup.string().max(
    100,
    "Your message must be less than 100 characters."
  ),
  name: Yup.string()
    .required("You must enter your full name.")
    .min(3, "Enter a valid name.")
    .max(30, "Name must be less than 30 characters."),
  address: Yup.string()
    .required()
    .min(10, "You must enter a valid address.")
    .max(70, "Address must be shorter than 70 characters."),
  orderQuantity: Yup.number("Min. order quantity is 1.")
    .required("Min. order quantity is 1.")
    .min(1, "Min. order quantity is 1.")
    .max(10, "Max. order quantity is 10.")
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable(),
});
