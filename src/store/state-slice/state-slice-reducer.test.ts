import { showModal } from '../actions';
import { InitialStateType, initialState, statesSlice } from './state-slice-reducer';

describe('Reducer: user interaction slice', () => {
  it('should return default state when action type is uknown', () => {
    expect(statesSlice.reducer(undefined, {type: 'UKNOWN_STATE'}))
      .toEqual(initialState);
  });

  it('should return JSX.Element when showModel action is called', () => {
    const testInitialState: InitialStateType = { popup: false };
    const expectedState = {} as JSX.Element;

    const result = statesSlice.reducer(testInitialState, showModal({} as JSX.Element));

    expect(result.popup).toStrictEqual(expectedState);
  });
});
