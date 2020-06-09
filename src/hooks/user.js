import { useEffect, useReducer } from "react";
import api from "~lib/api";
export { useUser } from "../app/context/user-context";
export { useAuth } from "../app/context/auth-context";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const GET_USER = "GET_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_ERROR = "GET_USER_ERROR";

const reducer = (state, action) => {
  if (action.type === GET_USER) {
    return {
      ...state,
      loading: true,
      data: null,
      error: null,
    };
  }

  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload.data,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload.error,
    };
  }
};

export const useAuthedUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_USER });
    api
      .get("/users/me")
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: GET_USER_SUCCESS, payload: { data: response } });
      })
      .catch((e) => {
        dispatch({ type: GET_USER_SUCCESS, payload: { error: e } });
        console.error(e);
      });
  }, []);

  return [state.data, state];
};
