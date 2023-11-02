import { createAction } from '@reduxjs/toolkit';
import { SortDirection, SortType } from '../consts/enums';

export const setTimerSeconds = createAction<number>('setTimerSeconds');
export const showModal = createAction<JSX.Element>('showModal');
export const removeModal = createAction('removeModal');
export const sortProductsList = createAction<{sortType: SortType; sortDirection: SortDirection}>('sortProductsList');

