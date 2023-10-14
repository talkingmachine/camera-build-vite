import { BreadcrumbData } from '../types/state-types';

export const PRODUCTS_PER_PAGE = 9;
export const STARS_NUMBER = 5;
export const SIMILAR_PRODUCTS_PER_PAGE = 3;
export const REVIEWS_PER_PAGE = 3;

export const messages = {
  productNameNotFound: 'Название продукта не найдено'
};

export const defaultBreadcrumbData: BreadcrumbData = {
  name: 'Главная',
  path: '#',
  isLast: true,
};
