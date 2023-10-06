import { PRODUCTS_PER_PAGE } from '../consts/global';
import { ProductData } from '../types/data-types';

const productsDataToCatalogCardsData = (productsData: ProductData[]) =>
  productsData.map(({
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    price,
    name,
    id
  }) => ({
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    price: price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '),
    name,
    id
  }));


export const productsDataToCatalogList = (productsData: ProductData[], currentPage: number) =>
  productsDataToCatalogCardsData(productsData)
    .slice(
      PRODUCTS_PER_PAGE * (currentPage - 1),
      PRODUCTS_PER_PAGE * currentPage
    );
