import { dataSlice, initialState } from './data-slice-reducer';

describe('Reducer: data slice', () => {

  it('should return default state when action type is uknown', () => {
    expect(dataSlice.reducer(undefined, {type: 'UKNOWN_STATE'}))
      .toEqual(initialState);
  });

  // it('should increment step with "incrementStep" action', () => {
  //   const testInitialState = {
  //     productsList: [{id: -1, name: 'test', vendorCode: 'test', type: 'test', category: 'test', description: 'test', level: 'test', price: -1,
  //       rating: -1, reviewCount: -1, previewImg: 'test', previewImg2x: 'test', previewImgWebp: 'test', previewImgWebp2x: 'test'}],
  //     similarList: [{id: -1, name: 'test', vendorCode: 'test', type: 'test', category: 'test', description: 'test', level: 'test', price: -1,
  //       rating: -1, reviewCount: -1, previewImg: 'test', previewImg2x: 'test', previewImgWebp: 'test', previewImgWebp2x: 'test'}],
  //     promoList: [{id: -1, name: 'test', previewImg: 'test', previewImgWebp2x: 'test', previewImg2x: 'test', previewImgWebp: 'test'}],
  //     product: {id: -1, name: 'test', vendorCode: 'test', type: 'test', category: 'test', description: 'test', level: 'test', price: -1,
  //       rating: -1, reviewCount: -1, previewImg: 'test', previewImg2x: 'test', previewImgWebp: 'test', previewImgWebp2x: 'test'},
  //     reviewsList: [{id: 'test', createAt: 'test', cameraId: -1, userName: 'test', advantage: 'test', disadvantage: 'test', review: 'test', rating: -1}]
  //   };

  //   const expectedStep = 5;

  //   const result = dataSlice.reducer(testInitialState, incrementStep);

  //   expect(result.step).toBe(expectedStep);
  // });
});

