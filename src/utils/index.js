const ACTION_TYPE_LOADING = "LOADING";
const ACTION_TYPE_SUCCESS = "SUCCESS";
const ACTION_TYPE_FAILURE = "FAILURE";

export { callApi } from "../utils/callApi";
export { ACTION_TYPE_FAILURE, ACTION_TYPE_SUCCESS, ACTION_TYPE_LOADING };
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const getHTTPStatusCode = (err) => {
  return err.message.slice(err.message.lastIndexOf(" ") + 1);
};

export const TEST_ADDRESS = {
  name: "John Doe",
  isActive: true,
  address: "123 Main St",
  city: "New York",
  state: "NY",
  country: "USA",
  pin: "123456",
  phone: "1234567890",
};
export const INITIAL_ADDRESS_STATE = {
  name: "",
  isActive: false,
  address: "",
  city: "",
  state: "",
  country: "",
  pin: "",
  phone: "",
};
