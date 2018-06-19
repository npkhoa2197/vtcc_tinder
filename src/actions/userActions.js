// import {
//   FETCHUSER_REQUEST,
//   FETCHUSER_PENDING,
//   FETCHUSER_SUCCESS,
//   FETCHUSER_FAIL,
// } from '../constants/strings/actionTypes';

import { FETCHUSER_REQUEST } from '../constants/strings/actionTypes';

export const requestFetchUser = () => ({ type: FETCHUSER_REQUEST });

// export const fetchUserPending = () => ({ type: FETCHUSER_PENDING });

// export const fetchUserSuccess = users => ({ type: FETCHUSER_SUCCESS, payload: users });

// export const fetchUserFail = errorMsg => ({ type: FETCHUSER_FAIL, payload: errorMsg });
