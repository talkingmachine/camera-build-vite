export const APIRoutes = {
  GetProductsList: ():string => '/cameras',
  GetSimilarList: (id: number):string => `/cameras/${id}/similar`,
  GetPromoList: ():string => '/promo',
  GetProduct: (id: number):string => `/cameras/${id}`
};
