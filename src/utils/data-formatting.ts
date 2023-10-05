import { ProductData } from '../types/data-types';

export const productsDataToCatalogCardsData = (productsData: ProductData[]) =>
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

