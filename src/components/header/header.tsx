import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';
import { IconClose } from '../icon-components/icon-close';
import { HeaderSelectList } from './header-select-list';
import { useAppSelector } from '../../hooks/typed-wrappers';

export function Header ():JSX.Element {

  const products = useAppSelector((state) => state.DATA.productsList);

  return (
    <header className="header" id="header">
      <div className="container">
        <Link className="header__logo" to={RouterPaths.catalog()} aria-label="Переход на главную">
          <svg width={100} height={36} aria-hidden="true">
            <use xlinkHref="#icon-logo" />
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={RouterPaths.catalog()}>Каталог</Link>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Гарантии</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Доставка</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form>
            <label>
              <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
                <use xlinkHref="#icon-lens" />
              </svg>
              <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
            </label>
            <HeaderSelectList selectListData={products}/>
          </form>
          <button className="form-search__reset" type="reset">
            <IconClose/>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <a className="header__basket-link" href="#">
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </a>
      </div>
    </header>
  );
}

