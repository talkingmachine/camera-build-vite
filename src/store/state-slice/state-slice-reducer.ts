import { createSlice } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../consts/enums';
import { incMistakes } from '../actions';

type InitialStateType = {
  test: string;
}

const initialState: InitialStateType = {
  test: 'something'
};

const statesSlice = createSlice({
  name: ReducerNameSpaces.states,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(incMistakes, (state) => { //REMOVE
        state.test = 'hello';
      });
  },
});

export default statesSlice;
