import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { getProduct, getProductsList, getPromoList, getReviewsList, getSimilarList, postReview } from '../api-actions';
import { dataInitialState } from '../../consts/global';


export const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState: dataInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getSimilarList.fulfilled, (state, action) => {
        state.similarList = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(getPromoList.fulfilled, (state, action) => {
        state.promoList = action.payload;
      })
      .addCase(getReviewsList.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviewsList.push(action.payload);
      });
  },
});

