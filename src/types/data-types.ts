import { ItemCategory, ItemLevel, ItemType } from '../consts/enums';
import { store } from '../store';


export type ItemData = {
    id: number;
    name: string;
    vendorCode: string;
    type: ItemType;
    category: ItemCategory;
    description: string;
    level: ItemLevel;
    price: number;
    rating: number;
    reviewCount: number;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

