import { createSlice } from '@reduxjs/toolkit';

// need dispatch here to dispatch action here
// import { dispatch } from '../store';

const initialState = {
  sidebar: {
    open: false,
    type: 'CONTACT', // can be contact, stated,shared
  },
  snackbar: {
    open: false,
    message: '',
    severity: 'info',
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // update states using reducers
    // toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    }, // state is now state, action contains payload and action type
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.message = '';
      state.snackbar.severity = 'info';
    },
  },
});

// reducer
export default slice.reducer;

// thunk functions

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
  // try {
  //   // Perform asynchronous operations here
  //   // For example, you can make an API call using axios or fetch
  //   // const response = await fetch('your-api-endpoint');
  //   // const data = await response.json();
  //   // After the async operation is complete, dispatch the action
  //   dispatch(slice.actions.toggleSidebar());
  // } catch (error) {
  //   // Handle any errors here
  //   console.error('An error occurred:', error);
  // }
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

export function ShowSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackbar({
        severity,
        message,
      })
    );
    setTimeout(() => {
      dispatch(slice.actions.closeSnackbar());
    }, 3000);
  };
}

export function CloseSnackbar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackbar());
  };
}
