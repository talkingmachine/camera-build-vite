import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialState as statesInitialState } from '../../store/state-slice/state-slice-reducer';
import { initialState as dataInitialState} from '../../store/data-slice/data-slice-reducer';
import { ProductPage } from './product';
import createAPI from '../../services/api-axios';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/data-types';
import { AppThunkDispatch } from '../../utils/mocks';
import userEvent from '@testing-library/user-event';


describe('Component: Product', () => {
  const axios = createAPI();
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeAll(() => {
    store = mockStoreCreator({
      DATA: dataInitialState,
      STATES: statesInitialState
    });
  });

  it('should render correctly', () => {
    const expectedInfoText = 'Характеристики';
    const expectedDescriptionText = 'Описание';
    const expectedSimilarProductsText = 'Похожие товары';
    const expectedReviewTitleText = 'Отзывы';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductPage/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(expectedInfoText)).toBeInTheDocument();
    expect(screen.getByText(expectedDescriptionText)).toBeInTheDocument();
    expect(screen.getByText(expectedSimilarProductsText)).toBeInTheDocument();
    expect(screen.getByText(expectedReviewTitleText)).toBeInTheDocument();
  });

  it('should show description when button clicked', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductPage/>
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByText('Характеристики'));
    expect(screen.getByTestId('descriptionList')).toHaveClass('is-active');
  });
});

