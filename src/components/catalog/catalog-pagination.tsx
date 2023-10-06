import { useSearchParams } from 'react-router-dom';
import { getPaginationInfo } from '../../utils/get-pagination-info';
import classNames from 'classnames';

type CatalogPaginationProps = {
  listLength: number;
}
export function CatalogPagination ({listLength}: CatalogPaginationProps):JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || 1);

  const paginationInfo = getPaginationInfo(currentPage, listLength);

  const changePageHandler = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetPage: number) => {
    evt.preventDefault();
    setSearchParams({page: targetPage.toString()});
  };

  return (
    <div className="pagination">
      {paginationInfo ?
        <ul className="pagination__list">
          {paginationInfo.prevButton ?
            <li className="pagination__item">
              <a
                className="pagination__link pagination__link--text"
                onClick={(evt) => changePageHandler(evt, currentPage - 1)}
                href="#"
              >Назад
              </a>
            </li> : false}
          {paginationInfo.pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="pagination__item">
              <a
                className={classNames('pagination__link', {'pagination__link--active': currentPage === pageNumber})}
                onClick={(evt) => {
                  changePageHandler(evt, pageNumber);
                }}
                href="#"
              >{pageNumber}
              </a>
            </li>
          ))}
          {paginationInfo.nextButton ?
            <li className="pagination__item">
              <a
                className="pagination__link pagination__link--text"
                onClick={(evt) => changePageHandler(evt, currentPage + 1)}
                href="#"
              >Далее
              </a>
            </li> : false}
        </ul> : false}
    </div>
  );
}
