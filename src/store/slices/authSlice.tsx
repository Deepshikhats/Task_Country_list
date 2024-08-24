import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isValidUser: boolean | null;
  userName: string;
  password: string;
}

const initialState: AuthState = {
  isValidUser: false,
  userName: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    setIsValidUser: (state, actions: PayloadAction<TUserCred>) => {
      if (state.userName === actions.payload.userName) {
        if (state.password === actions.payload.password) {
          localStorage.setItem('isValidUser', actions.payload.toString());
          state.isValidUser = true;
        } else alert('WRONG PASSWORD');
      } else alert('WRONG USERNAME');
    },
    setUserCred: (state, actions: PayloadAction<TUserCred>) => {
      state.password = actions.payload.password;
      state.userName = actions.payload.userName;
    },
  },
});

export const { setIsValidUser, setUserCred } = authSlice.actions;

export default authSlice.reducer;
