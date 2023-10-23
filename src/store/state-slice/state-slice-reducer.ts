import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { removeModal, showModal } from '../actions';

export type InitialStateType = {
  popup: JSX.Element | false;
}

export const initialState: InitialStateType = {
  popup: false,
};

export const statesSlice = createSlice({
  name: ReducerNameSpaces.states,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(showModal, (state, action) => {
        state.popup = action.payload;
      })
      .addCase(removeModal, (state) => {
        state.popup = false;
      });
  },
});
