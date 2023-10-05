import { ProductCategory, ProductLevel, ProductType } from '../consts/enums';
import { store } from '../store';


export type ProductData = {
    id: number;
    name: string;
    vendorCode: string;
    type: ProductType;
    category: ProductCategory;
    description: string;
    level: ProductLevel;
    price: number;
    rating: number;
    reviewCount: number;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
}

export type PromoData = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

