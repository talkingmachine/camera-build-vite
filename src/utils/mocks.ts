import { ThunkDispatch } from '@reduxjs/toolkit';
import createAPI from '../services/api-axios';
import { Action } from 'redux';
import { ReviewPostData, State } from '../types/data-types';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
export const getMockReviewData = (): ReviewPostData => ({
  cameraId: 1,
  userName: 'Test User',
  advantage: 'Test advantage',
  disadvantage: 'Test disadvantage',
  review: 'Test review',
  rating: 5,
});
