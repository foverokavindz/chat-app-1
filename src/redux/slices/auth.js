import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
  isLoggedIn: false,
  token: '',
  isLoading: false,
  //error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = '';
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// export reducer
export default authSlice.reducer;

// thunk actions

// login thunk
export function LoginUser(formValues) {
  // thunk function has to return another function here
  // it will be asunc because we are making an API call inside of it

  return async (dispatch, getState) => {
    axiosInstance
      .post(
        '/auth/login',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch(
          authSlice.actions.login({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}
