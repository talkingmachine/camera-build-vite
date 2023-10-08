import { ProductCategory } from '../consts/enums';
import { PRODUCTS_PER_PAGE } from '../consts/global';
import { ProductData } from '../types/data-types';

export const formatPrice = (price: number) => price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export const formatProductData = (productData: ProductData) => ({
  ...productData,
  price: formatPrice(productData.price),
});

export const productsDataToCatalogList = (productsData: ProductData[], currentPage: number) =>
  productsData
    .map(formatProductData)
    .slice(
      PRODUCTS_PER_PAGE * (currentPage - 1),
      PRODUCTS_PER_PAGE * currentPage
    );

export const formatTypeAndCategory = (type:string, category:ProductCategory) => {
  const mode2Categories = [ProductCategory.Видеокамера];

  return `${mode2Categories.includes(category) ?
    type : `${type.slice(0, type.length - 2)}ый`} ${category.toLocaleLowerCase()}`;
};

