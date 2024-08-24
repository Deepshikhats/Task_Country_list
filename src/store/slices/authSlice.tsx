import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isValidUser: boolean | null;
}

const initialState: AuthState = {
  isValidUser: false,
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    setIsValidUser: (state, actions: PayloadAction<boolean>) => {
      localStorage.setItem('isValidUser', actions.payload.toString());
      state.isValidUser = actions.payload;
    },
  },
});

export const { setIsValidUser } = authSlice.actions;

export default authSlice.reducer;
