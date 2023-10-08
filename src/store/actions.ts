import { createAction } from '@reduxjs/toolkit';

export const setTimerSeconds = createAction<number>('setTimerSeconds');
export const showModal = createAction<JSX.Element>('showModal');
export const removeModal = createAction('removeModal');

