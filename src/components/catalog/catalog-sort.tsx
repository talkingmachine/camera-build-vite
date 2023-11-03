import { useState } from 'react';
import { useAppDispatch } from '../../hooks/typed-wrappers';
import { IconSort } from '../icon-components/icon-sort';
import { SortDirection, SortType } from '../../consts/enums';
import { sortProductsList } from '../../store/actions';

export function CatalogSort ():JSX.Element {

  const dispatch = useAppDispatch();
  const [sortType, setSortType] = useState<SortType | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection | null>(null);

  const changeSortTypeHandler = (newSortType: SortType) => {
    setSortType(newSortType);
    if (!sortDirection) {
      setSortDirection(SortDirection.Ascending);
    }
    dispatch(sortProductsList({
      sortType: newSortType,
      sortDirection: sortDirection ? sortDirection : SortDirection.Ascending
    }));
  };

  const changeSortDirectionHandler = (newSortDirection: SortDirection) => {
    setSortDirection(newSortDirection);
    if (!sortType) {
      setSortType(SortType.Price);
    }
    dispatch(sortProductsList({
      sortType: sortType ? sortType : SortType.Price ,
      sortDirection: newSortDirection
    }));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="sort"
                defaultChecked={sortType === SortType.Price}
                onClick={() => changeSortTypeHandler(SortType.Price)}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="sort"
                defaultChecked={sortType === SortType.Popular}
                onClick={() => changeSortTypeHandler(SortType.Popular)}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="up"
                name="sort-icon"
                aria-label="По возрастанию"
                defaultChecked={sortDirection === SortDirection.Ascending}
                onClick={() => changeSortDirectionHandler(SortDirection.Ascending)}
              />
              <label htmlFor="up">
                <IconSort/>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
                defaultChecked={sortDirection === SortDirection.Descending}
                onClick={() => changeSortDirectionHandler(SortDirection.Descending)}
              />
              <label htmlFor="down">
                <IconSort/>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
