import { Link, useLocation } from 'react-router-dom';
import { CatalogCardData } from '../types/data-types';
import { getBreadcrumbsData } from '../utils/utils';

type BreadcrumbsProps = {
  productPageInfo?: CatalogCardData;
}
export function Breadcrumbs ({productPageInfo}: BreadcrumbsProps):JSX.Element {

    // лучше вынести в отдельный компонент
    // <svg width={5} height={8} = магические числа
  const Arrow = ():JSX.Element => (
    <svg width={5} height={8} aria-hidden="true">
      <use xlinkHref="#icon-arrow-mini" />
    </svg>);
  const pathname = useLocation().pathname;
  const breadcrumbsData = getBreadcrumbsData(pathname, productPageInfo);

  return (
    <ul className="breadcrumbs__list">
      {breadcrumbsData.map((breadcrumb) => (
        <li key={breadcrumb.path} className="breadcrumbs__item">
          {breadcrumb.isLast ?
            <span className="breadcrumbs__link breadcrumbs__link--active">{breadcrumb.name}</span> :
            <Link className="breadcrumbs__link" to={breadcrumb.path}>{breadcrumb.name}
              <Arrow/>
            </Link>}
        </li>
      ))}
    </ul>
  );
}
