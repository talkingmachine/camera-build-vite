export const RouterPaths = {
  catalog: ():string => '/',
  product: (id: number):string => `/product/${id}`,
  productWithAnyId: ():string => '/product/:id',
  productWithoutId: ():string => '/product',
  notFound: ():string => '*',
};

export const RouterPathsNames = {
  [RouterPaths.catalog()]: 'Каталог'
};
