import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CatalogPage } from './catalog';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { initialState as statesInitialState } from '../../store/state-slice/state-slice-reducer';
import { initialState as dataInitialState} from '../../store/data-slice/data-slice-reducer';

describe('Component: Catalog', () => {
  const mockStore = configureMockStore();

  it('should render correctly', () => {
    const expectedTitleText = 'Каталог фото- и видеотехники';
    const expectedSortText = 'Сортировать:';
    const store = mockStore({
      DATA: dataInitialState,
      STATES: statesInitialState,
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogPage/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(expectedTitleText)).toBeInTheDocument();
    expect(screen.getByText(expectedSortText)).toBeInTheDocument();
  });
});

