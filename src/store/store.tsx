import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import authSlice, { AuthState } from './slices/authSlice';
import countryListSlice, { CountryListState } from './slices/countriesSlice';

const store: EnhancedStore<{
  authSlice: AuthState;
  countryListSlice: CountryListState;
}> = configureStore({
  reducer: {
    authSlice,
    countryListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
