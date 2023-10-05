import { createAction } from '@reduxjs/toolkit';

export const setTimerSeconds = createAction<number>('setTimerSeconds');
export const incMistakes = createAction('incMistakes'); //REMOVE


