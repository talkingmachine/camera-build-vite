import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CatalogAsideFilter } from './catalog-aside-filter';
import { ProductCategory, ProductLevel, ProductType } from '../../consts/enums';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';


describe('Component: CatalogAsideFilter', () => {
  const mockStore = configureMockStore();
  const minLimiter = 1000;
  const maxLimiter = 20000;
  const store = mockStore({
    STATES: {
      filterPriceLimiters: {
        min: minLimiter,
        max: maxLimiter
      }
    },
  });
  const setup = (urlParams = '') => {
    const utils = render(
      <MemoryRouter initialEntries={[urlParams]}>
        <Provider store={store}>
          <CatalogAsideFilter/>
        </Provider>
      </MemoryRouter>
    );
    const form = {
      price: {
        min: screen.getByPlaceholderText<HTMLInputElement>(/^от.*/i),
        max: screen.getByPlaceholderText<HTMLInputElement>(/^до.*/i)
      },
      category: {
        [ProductCategory['Видеокамера']]: screen.getByLabelText<HTMLInputElement>(ProductCategory['Видеокамера']),
        [ProductCategory['Фотоаппарат']]: screen.getByLabelText<HTMLInputElement>('Фотокамера'),
      },
      type: {
        [ProductType['Коллекционная']]: screen.getByLabelText<HTMLInputElement>(ProductType['Коллекционная']),
        [ProductType['Моментальная']]: screen.getByLabelText<HTMLInputElement>(ProductType['Моментальная']),
        [ProductType['Плёночная']]: screen.getByLabelText<HTMLInputElement>(ProductType['Плёночная']),
        [ProductType['Цифровая']]: screen.getByLabelText<HTMLInputElement>(ProductType['Цифровая']),
      },
      level: {
        [ProductLevel['Любительский']]: screen.getByLabelText<HTMLInputElement>(ProductLevel['Любительский']),
        [ProductLevel['Нулевой']]: screen.getByLabelText<HTMLInputElement>(ProductLevel['Нулевой']),
        [ProductLevel['Профессиональный']]: screen.getByLabelText<HTMLInputElement>(ProductLevel['Профессиональный']),
      },
      buttons: {
        reset: screen.getByText<HTMLButtonElement>('Сбросить фильтры'),
      }
    };
    return {
      form,
      ...utils,
    };
  };

  it('should set form state by URLParams', () => {
    const {form} = setup(
      '?category=photocamera&priceMin=1000&priceMax=20000&type=digital&type=film&type=collection&level=zero&level=professional'
    );
    expect(form.price.min).toHaveValue('1000');
    expect(form.price.max).toHaveValue('20000');
    expect(form.level['Профессиональный']).toBeChecked();
    expect(form.category['Фотоаппарат']).toBeChecked();
    expect(form.type['Коллекционная']).toBeChecked();
    expect(form.type['Плёночная']).toBeChecked();
    expect(form.type['Цифровая']).toBeChecked();
    expect(form.level['Нулевой']).toBeChecked();
    expect(form.level['Профессиональный']).toBeChecked();
  });

  it('should reset form when reset button pressed', () => {
    const {form} = setup(
      '?category=photocamera&priceMin=1000&priceMax=20000&type=digital&type=film&type=collection&level=zero&level=professional'
    );
    expect(form.price.min).toHaveValue('1000');
    expect(form.level['Профессиональный']).toBeChecked();
    expect(form.category['Фотоаппарат']).toBeChecked();
    expect(form.type['Коллекционная']).toBeChecked();
    fireEvent.click(form.buttons.reset);
    expect(form.price.min).not.toHaveValue('1000');
    expect(form.level['Профессиональный']).not.toBeChecked();
    expect(form.category['Фотоаппарат']).not.toBeChecked();
    expect(form.type['Коллекционная']).not.toBeChecked();
  });

  describe('Filter price-field tests', () => {
    it('should update min value', () => {
      const {form} = setup();
      fireEvent.change(form.price.min, {target: {value: minLimiter - 1}});
      fireEvent.blur(form.price.min);
      expect(form.price.min).toHaveValue(minLimiter.toString());
    });
    it('should update max value', () => {
      const {form} = setup();
      fireEvent.change(form.price.max, {target: {value: maxLimiter + 1}});
      fireEvent.blur(form.price.max);
      expect(form.price.max).toHaveValue(maxLimiter.toString());
    });
    it('should ignore negative numbers', () => {
      const {form} = setup();
      fireEvent.change(form.price.max, {target: {value: -1}});
      fireEvent.change(form.price.min, {target: {value: -1}});
      fireEvent.blur(form.price.max);
      fireEvent.blur(form.price.min);
      expect(form.price.max).toHaveValue('0');
      expect(form.price.min).toHaveValue(minLimiter.toString());
    });
    it('should update max, if max less then min', () => {
      const {form} = setup();
      fireEvent.change(form.price.min, {target: {value: 4000}});
      fireEvent.change(form.price.max, {target: {value: 2000}});
      fireEvent.blur(form.price.min);
      fireEvent.blur(form.price.max);
      expect(form.price.max).toHaveValue('4000');
    });
  });
});

