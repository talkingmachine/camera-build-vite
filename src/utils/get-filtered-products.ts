import { FormFilter, LocalizeFilterNames } from '../consts/enums';
import { ProductData } from '../types/data-types';


const filterFunctions: {[key in keyof typeof FormFilter]: (key: string[]) => (product: ProductData) => boolean} = {
  priceMin: (min) => (product) => min[0] ? product.price >= Number(min[0]) : true,
  priceMax: (max) => (product) => max[0] ? product.price <= Number(max[0]) : true,
  category: (allowedCategories) => (product) => allowedCategories.length ? allowedCategories.indexOf(LocalizeFilterNames[product.category]) !== -1 : true,
  type: (allowedTypes) => (product) => allowedTypes.length ? allowedTypes.indexOf(LocalizeFilterNames[product.type]) !== -1 : true,
  level: (allowedLevels) => (product) => allowedLevels.length ? allowedLevels.indexOf(LocalizeFilterNames[product.level]) !== -1 : true,
};


export const getFilteredProducts = (array: ProductData[], searchParams: URLSearchParams) => {
  const activeFilters: {[key: string]: string[]} = {};
  let newArray = array.slice(0);

  for (const key in FormFilter) {
    const value = searchParams.getAll(key);
    if (value) {
      activeFilters[key] = value;
    }
  }

  for (const key in activeFilters) {
    newArray = newArray.filter(filterFunctions[key as keyof typeof FormFilter](activeFilters[key]));
  }

  return newArray;
};

