import { createSlice } from '@reduxjs/toolkit';

// need dispatch here to dispatch action here
import { dispatch } from '../store';

const initialState = {
  sidebar: {
    open: true,
    type: 'CONTACT', // can be contact, stated,shared
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
  },
});

// reducer
export default slice.reducer;

//

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async () => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}
