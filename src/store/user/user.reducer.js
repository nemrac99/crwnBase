import { createSlice } from '@reduxjs/toolkit';

const USER_INITIAL_STATE = {
  currentUser: null,
  test: { a: 1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload; //mutation-style for readability but reduxtoolkit ensures code is immutable;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
