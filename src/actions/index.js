import axios from 'axios';
import ROOT_SERVER_URL from '../config/config';

export const ACTION_LEAD_CAPTURE = 'LEAD_CAPTURE';
export const ACTION_SIGNUP = 'SIGNUP';
export const ACTION_LOGIN = 'LOGIN';

export function leadCapture(email) {
  const request = axios.post(
    `${ROOT_SERVER_URL}/leads`, {email});

  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: ACTION_LEAD_CAPTURE,
        payload: data
      })
    });
  };
}

export function login(email, password) {
  const request = axios.post(
    `${ROOT_SERVER_URL}/users/login`, {email, password});
  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: ACTION_LOGIN,
        payload: data
      })
    });
  }
}
