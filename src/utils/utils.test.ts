import { ProductCategory, ProductLevel, ProductType } from '../consts/enums';
import { RouterPaths } from '../consts/router-paths';
import { getBreadcrumbsData } from './utils';


describe('Utils', () => {
  describe('getBreadcrumbsData', () => {
    it('should return breadcrumbs data for catalog page', () => {
      const expectedBreadcrumbsData = [
        { name: 'Главная', path: '/', isLast: false },
        { name: 'Каталог', path: '/', isLast: true }
      ];

      expect(getBreadcrumbsData(RouterPaths.catalog(), undefined)).toEqual(expectedBreadcrumbsData);
    });

    it('should return breadcrumbs data for product page', () => {
      const expectedBreadcrumbsData = [
        { name: 'Главная', path: '/', isLast: false },
        { name: 'Каталог', path: '/', isLast: false },
        { name: 'FastShot MR-5', path: '/product/2', isLast: true }
      ];
      const fakeProductData = {
        id: 2,
        name: 'FastShot MR-5',
        vendorCode: '',
        type: ProductType['Коллекционная'],
        category: ProductCategory['Видеокамера'],
        description: '',
        level: ProductLevel['Любительский'],
        price: '0',
        rating: 0,
        reviewCount: 0,
        previewImg: '',
        previewImg2x: '',
        previewImgWebp: '',
        previewImgWebp2x: '',
      };

      expect(getBreadcrumbsData(RouterPaths.product(2), fakeProductData)).toEqual(expectedBreadcrumbsData);
    });
  });
});

