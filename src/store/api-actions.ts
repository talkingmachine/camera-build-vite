import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, ItemData, State } from '../types/data-types';
import APIRoutes from '../consts/api-routes';

type ThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

const getItemsList = createAsyncThunk<ItemData[], undefined, ThunkConfig>(
  'GET_ITEMS_LIST',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<ItemData[]>(APIRoutes.GetItemsList());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// const getQuest = createAsyncThunk<QuestPage, {id: string}, ThunkConfig>(
//   'GET_QUEST',
//   async ({id}, {extra: api, rejectWithValue}) => {
//     try {
//       const {data} = await api.get<QuestPage>(APIRoutes.GetQuest(id));
//       return data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

export {getItemsList};
