const ACTION_TYPE_LOADING = "LOADING";
const ACTION_TYPE_SUCCESS = "SUCCESS";
const ACTION_TYPE_FAILURE = "FAILURE";

export { callApi } from "../utils/callApi";
export { ACTION_TYPE_FAILURE, ACTION_TYPE_SUCCESS, ACTION_TYPE_LOADING };
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const getHTTPStatusCode = (err) => {
  return err.message.slice(err.message.lastIndexOf(" ") + 1);
};
