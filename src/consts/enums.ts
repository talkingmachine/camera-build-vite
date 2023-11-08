export enum ReducerNameSpaces {
  states = 'STATES',
  data = 'DATA'
}

export enum Tabs {
  description = 'description',
  details = 'details'
}

export enum FormReviewNames {
  rating = 'rating',
  userName = 'userName',
  advantage = 'advantage',
  disadvantage = 'disadvantage',
  review = 'review'
}

export enum ProductType {
  'Коллекционная' = 'Коллекционная',
  'Моментальная' = 'Моментальная',
  'Цифровая' = 'Цифровая',
  'Плёночная' = 'Плёночная'
}

export enum ProductCategory {
  'Видеокамера' = 'Видеокамера',
  'Фотоаппарат' = 'Фотоаппарат'
}

export enum ProductLevel {
  'Нулевой' = 'Нулевой',
  'Любительский' = 'Любительский',
  'Профессиональный' = 'Профессиональный'
}

export enum SortDirection {
  Descending = -1,
  Ascending = 1
}

export enum SortType {
  Price = 'Price',
  Popular = 'Popular'
}

export const LocalizeFilterNames = {
  'Фотоаппарат': 'photocamera',
  'Видеокамера': 'videocamera',
  'Цифровая': 'digital',
  'Плёночная': 'film',
  'Моментальная': 'snapshot',
  'Коллекционная': 'collection',
  'Нулевой': 'zero',
  'Любительский': 'nonProfessional',
  'Профессиональный': 'professional'
};

export const FormFilter = {
  priceMin: 'priceMin',
  priceMax: 'priceMax',
  category: {
    name: 'category',
    photocamera: 'photocamera',
    videocamera: 'videocamera',
  },
  type: {
    name: 'type',
    digital: 'digital',
    film: 'film',
    snapshot: 'snapshot',
    collection: 'collection',
  },
  level: {
    name: 'level',
    zero: 'zero',
    nonProfessional: 'nonProfessional',
    professional: 'professional'
  }
};
