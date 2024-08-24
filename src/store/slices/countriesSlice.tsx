import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CountryListState {
  countryList: TCountryList[];
  asiaList: TCountryList[];
  europeList: TCountryList[];
}

const initialState: CountryListState = {
  countryList: [],
  asiaList: [],
  europeList: [],
};

export const countryListSlice = createSlice({
  name: 'countrylist',

  initialState,
  reducers: {
    setCountryList: (state, actions: PayloadAction<TCountryList[]>) => {
      state.countryList = actions.payload;
      actions.payload.forEach((country) => {
        if (country.region === 'Asia') {
          state.asiaList.push(country);
        } else if (country.region === 'Europe') {
          state.europeList.push(country);
        }
        return;
      });
    },
  },
});

export const { setCountryList } = countryListSlice.actions;

export default countryListSlice.reducer;
