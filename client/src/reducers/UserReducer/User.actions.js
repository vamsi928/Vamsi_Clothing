import {userActionTypes} from './UserTypes';


export const googleSignInStart = () => {
  return {
    type: userActionTypes.GOOGLE_SIGN_IN_START
  }
}

export const SignInSuccess = (user) => {
  return {
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
  }
}

export const SignInFailure = (error) => {
  return {
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error.message
  }
}

export const emailSignInStart = (EmailAndPassword) => {
  return {
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: EmailAndPassword
  }
}

export const checkUserSession = () => {
  return {
    type: userActionTypes.CHECK_USER_SESSION
  }
}

export const signOutStart = () => {
  return {
    type: userActionTypes.SIGN_OUT_START
  }
}

export const signOutSuccess = () => {
  return {
    type: userActionTypes.SIGN_OUT_SUCCESS
  }
}

export const signOutFailure = (error) => {
  return {
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
  }
}

export const signUpStart = (userCredentials) => {
  return {
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
  }
}

export const signUpSuccess = ({user, additionalData }) => {
  return {
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
  }
}

export const signUpFailure = (error) => {
  return {
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
  }
}


