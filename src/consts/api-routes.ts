export const APIRoutes = {
  GetProductsList: ():string => '/cameras',
  GetPromoList: ():string => '/promo',
  GetProduct: (id: number):string => `/cameras/${id}`
};
