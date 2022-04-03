import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";

const initialState = {
  data: [],
  loading: true,
  erorr: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE_LOADING:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
