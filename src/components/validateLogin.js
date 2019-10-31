import validator from "validator"

export default function validateLogin(values) {
let errors = {};
let errPassword = false;
let errConfirmPassword = false;

    /* Name error */
    if (validator.isEmpty(values.name)) {
        errors.name = "Name cannot be blank";
    }

    /* Email error */
    if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email";
    }

    /* Username error */
    if (validator.isEmpty(values.userName)) {
        errors.userName = "Username cannot be blank";
    }

    /* Password error */
    if (!values.password) {
        errors.password = "Password - cannot be blank";
    } else if (values.password !== values.confirmPassword) {
        errors.password = "Passwords need to match."
    }

     /* confirmPassword error */
     if (!values.confirmPassword) {
        errors.confirmPassword = "Password - cannot be blank";
    } else if (values.password !== values.confirmPassword){
        errors.confirmPassword = "Passwords need to match."
    }

    /* Website error */
    if (!validator.isURL(values.website)) {
        errors.website = "Website - Please enter a valid URL";
    }

    return errors;
}