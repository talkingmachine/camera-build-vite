import { defaultBreadcrumbData, messages } from '../consts/global';
import { RouterPaths, RouterPathsNames } from '../consts/router-paths';
import { CatalogCardData } from '../types/data-types';
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
