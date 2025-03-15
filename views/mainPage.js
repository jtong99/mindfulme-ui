import { signup } from "./api.js";

const payload = {
  email: "msd@goat.com",
  password: "thalaforareason",
  firstName: "MS",
  lastName: "Dhoni",
};

const userSignUp = () => {
  signup(payload)
    .then((response) => {
      console.log("API response", response);
    })
    .catch((error) => {
      console.error("Error while calling signup api", error);
    });
};


