import { createSlice } from '@reduxjs/toolkit';
import { ProductCategory, ProductLevel, ProductType, ReducerNameSpaces } from '../../consts/enums';
import { ProductData, PromoData } from '../../types/data-types';
import { getProductsList, getPromoList } from '../api-actions';

type InitialStateType = {
  productsList: ProductData[];
  promoList: PromoData[];
}

const initialState: InitialStateType = {
  productsList: [
    {
      'id': 1,
      'name': 'Ретрокамера Dus Auge lV',
      'vendorCode': 'DA4IU67AD5',
      'type': ProductType['Коллекционная'],
      'category': ProductCategory['Видеокамера'],
      'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
      'level': ProductLevel['Нулевой'],
      'price': 65000,
      'rating': 5,
      'reviewCount': 16,
      'previewImg': 'img/content/das-auge.jpg',
      'previewImg2x': 'img/content/das-auge@2x.jpg',
      'previewImgWebp': 'img/content/das-auge.webp',
      'previewImgWebp2x': 'img/content/das-auge@2x.webp'
    }
  ],
  promoList: [
    {
      id: 1,
      name: 'Ретрокамера Dus Auge lV',
      previewImg: 'img/content/promo.jpg',
      previewImgWebp2x: 'img/content/promo@2x.webp',
      previewImg2x: 'img/content/promo@2x.jpg',
      previewImgWebp: 'img/content/promo.webp',
    }
  ]
};


export const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getPromoList.fulfilled, (state, action) => {
        state.promoList = action.payload;
      });
  },
});

