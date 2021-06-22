import { UserActionTypes } from "./user.types";

export const googleSignInSart = (user) => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  }
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
  }
};

export const signInFailure = (error) => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
  }
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  }
};