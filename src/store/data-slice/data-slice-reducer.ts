import { createSlice } from '@reduxjs/toolkit';
import { ProductCategory, ProductLevel, ProductType, ReducerNameSpaces } from '../../consts/enums';
import { ProductData, PromoData, ReviewData } from '../../types/data-types';
import { getProduct, getProductsList, getPromoList, getReviewsList, getSimilarList, postReview } from '../api-actions';

type InitialStateType = {
  productsList: ProductData[];
  similarList: ProductData[];
  promoList: PromoData[];
  product: ProductData;
  reviewsList: ReviewData[];
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
  similarList: [
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
  ],
  product: {
    'id': -1,
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
  },
  reviewsList: [
    {
      'id': 'f1d10ddd-2a21-4f71-9e1e-5f511703fbdd',
      'createAt': '2022-07-09T13:24:57.980Z',
      'cameraId': 1,
      'userName': 'Кирилл',
      'advantage': 'Легкая в плане веса, удобная в интерфейсе',
      'disadvantage': 'Быстро садиться зарядка',
      'review': 'Это моя первая камера. Я в восторге, нареканий нет',
      'rating': 5
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
      .addCase(getSimilarList.fulfilled, (state, action) => {
        state.similarList = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(getPromoList.fulfilled, (state, action) => {
        state.promoList = action.payload;
      })
      .addCase(getReviewsList.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviewsList.push(action.payload);
      });
  },
});

