import { SortDirection, SortType } from '../consts/enums';
import { defaultBreadcrumbData, messages } from '../consts/global';
import { RouterPaths, RouterPathsNames } from '../consts/router-paths';
import { CatalogCardData, ProductData } from '../types/data-types';
import { BreadcrumbData } from '../types/state-types';


export const getBreadcrumbsData = (pathname: string, productPageInfo: CatalogCardData | undefined) => {

  const breadcrumbsListData: BreadcrumbData[] = [defaultBreadcrumbData];
  const setBreadcrumbNotLast = () => {
    breadcrumbsListData[breadcrumbsListData.length - 1].isLast = false;
  };

  if (pathname.includes(RouterPaths.catalog())) {
    setBreadcrumbNotLast();
    breadcrumbsListData.push({
      name: RouterPathsNames[RouterPaths.catalog()],
      path: RouterPaths.catalog(),
      isLast: true
    });
  }
  if (pathname.includes(RouterPaths.productWithoutId())) {
    setBreadcrumbNotLast();
    breadcrumbsListData.push({
      name: productPageInfo ? productPageInfo.name : messages.productNameNotFound,
      path: productPageInfo ? `${RouterPaths.productWithoutId()}/${productPageInfo.id}` : '#',
      isLast: true
    });
  }

  return breadcrumbsListData;
};

export const getSortedProductsList = (productsList: ProductData[], sortType: SortType, sortDirection: SortDirection) =>
  productsList.sort((productA, productB) => {
    let diff;
    switch (sortType) {
      case SortType.Popular:
        diff = productA.rating - productB.rating;
        break;
      case SortType.Price:
        diff = productA.price - productB.price;
        break;
      default:
        diff = productA.rating - productB.rating;
        break;
    }
    return diff * sortDirection;
  });
