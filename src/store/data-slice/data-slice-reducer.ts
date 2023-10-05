import { createSlice } from '@reduxjs/toolkit';
import { ItemCategory, ItemLevel, ItemType, ReducerNameSpaces } from '../../consts/enums';
import { ItemData } from '../../types/data-types';
import { getItemsList } from '../api-actions';

type InitialStateType = {
  itemsList: ItemData[];
}

const initialState: InitialStateType = {
  itemsList: [
    {
      'id': 1,
      'name': 'Ретрокамера Dus Auge lV',
      'vendorCode': 'DA4IU67AD5',
      'type': ItemType['Коллекционная'],
      'category': ItemCategory['Видеокамера'],
      'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
      'level': ItemLevel['Нулевой'],
      'price': 65000,
      'rating': 5,
      'reviewCount': 16,
      'previewImg': 'img/content/das-auge.jpg',
      'previewImg2x': 'img/content/das-auge@2x.jpg',
      'previewImgWebp': 'img/content/das-auge.webp',
      'previewImgWebp2x': 'img/content/das-auge@2x.webp'
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
      .addCase(getItemsList.fulfilled, (state, action) => {
        state.itemsList = action.payload;
      });
  },
});

