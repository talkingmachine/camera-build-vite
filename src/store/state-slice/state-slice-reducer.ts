import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { addToBasket, removeFromBasket, removeModal, setFilterPriceLimiters, setNarrow, showModal } from '../actions';
import { statesInitialState } from '../../consts/global';



export const statesSlice = createSlice({
  name: ReducerNameSpaces.states,
  initialState: statesInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(showModal, (state, action) => {
        state.popupInfo.popup = action.payload;
      })
      .addCase(removeModal, (state) => {
        state.popupInfo.popup = false;
        state.popupInfo.isNarrow = false;
      })
      .addCase(setNarrow, (state) => {
        state.popupInfo.isNarrow = true;
      })
      .addCase(setFilterPriceLimiters, (state, action) => {
        state.filterPriceLimiters = action.payload;
      })
      .addCase(addToBasket, (state, action) => {
        state.productsInBasket.add(action.payload);
      })
      .addCase(removeFromBasket, (state, action) => {
        state.productsInBasket.delete(action.payload);
      });
  },
});
