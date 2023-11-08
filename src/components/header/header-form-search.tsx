import classNames from 'classnames';
import { IconClose } from '../icon-components/icon-close';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';
import { getSearchedProducts } from '../../utils/get-searched-products';

export function HeaderFormSearch ():JSX.Element {

  const products = useAppSelector((state) => state.DATA.productsList);
  const [isSelectListShown, setIsSelectListShown] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const searchTextChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setSearchText(evt.target.value);
    if (evt.target.value.length >= 3) {
      setIsSelectListShown(true);
    } else {
      if (isSelectListShown) { // QUESTION: Выполнится ли перерисовка, если в функцию изменения состояния передать старые данные?
        setIsSelectListShown(false);
      }
    }
  };
  const filteredProducts = getSearchedProducts(products, searchText);

  const clearButtonClickHandler = () => {
    setSearchText('');
    setIsSelectListShown(false);
  };

  return(
    <div className={classNames('form-search', {'list-opened': isSelectListShown && filteredProducts.length})}>
      <form>
        <label>
          <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchText}
            onChange={searchTextChangeHandler}
          />
        </label>
        <ul className="form-search__select-list form-search.list-opened" autoFocus>
          {filteredProducts.map((product) => (
            <li key={product.id} className="form-search__select-item" tabIndex={0} >
              <Link to={RouterPaths.product(product.id)} tabIndex={-1}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </form>
      <button
        className="form-search__reset"
        type="reset"
        onClick={clearButtonClickHandler}
      >
        <IconClose/>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

