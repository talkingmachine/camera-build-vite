import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { removeModal, setFilterPriceLimiters, showModal } from '../actions';
import { statesInitialState } from '../../consts/global';


export const statesSlice = createSlice({
  name: ReducerNameSpaces.states,
  initialState: statesInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(showModal, (state, action) => {
        state.popup = action.payload;
      })
      .addCase(removeModal, (state) => {
        state.popup = false;
      })
      .addCase(setFilterPriceLimiters, (state, action) => {
        state.filterPriceLimiters = action.payload;
      });
  },
});
