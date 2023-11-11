import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces, Status } from '../../consts/enums';
import { getProduct, getProductsList, getPromoList, getReviewsList, getSimilarList, postReview } from '../api-actions';
import { dataInitialState } from '../../consts/global';
import { sortProductsList } from '../actions';
import { getSortedProductsList } from '../../utils/utils';


export const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState: dataInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.productsList.data = action.payload;
        state.productsList.status = Status.downloaded;
      })
      .addCase(getSimilarList.fulfilled, (state, action) => {
        state.similarList = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.product = null;
      })
      .addCase(getPromoList.fulfilled, (state, action) => {
        state.promoList = action.payload;
      })
      .addCase(getReviewsList.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviewsList.push(action.payload);
      })
      .addCase(sortProductsList, (state, action) => {
        const {sortType, sortDirection} = action.payload;
        state.productsList.data = getSortedProductsList(state.productsList.data, sortType, sortDirection);
      });
  },
});

