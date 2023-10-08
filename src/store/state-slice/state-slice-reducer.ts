import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { removeModal, showModal } from '../actions';

type InitialStateType = {
  test: string;
  popup: JSX.Element | false;
}

const initialState: InitialStateType = {
  test: 'something',
  popup: false,
};

const statesSlice = createSlice({
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

export default statesSlice;
