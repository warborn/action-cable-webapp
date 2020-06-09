import { useEffect, useReducer, useCallback } from "react";
import api from "~lib/api";
export { useUser } from "../app/context/user-context";
export { useAuth } from "../app/context/auth-context";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const SET_USER = "SET_USER";
const FETCH_USER = "FETCH_USER";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const reducer = (state, action) => {
  if (action.type === FETCH_USER) {
    return {
      ...state,
      loading: true,
      data: null,
      error: null,
    };
  }

  if (action.type === FETCH_USER_SUCCESS || action.type === SET_USER) {
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload.data,
    };
  }
  if (action.type === FETCH_USER_ERROR) {
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
    dispatch({ type: FETCH_USER });
    api
      .get("/users/me")
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: { data: response } });
      })
      .catch((e) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: { error: e } });
        console.error(e);
      });
  }, []);

  const setUser = useCallback((user) => {
    dispatch({ type: SET_USER, payload: { data: user } });
  }, []);

  return [state.data, state, setUser];
};
