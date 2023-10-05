import { Breadcrumbs } from '../components/breadcrumbs';
import { CatalogAsideFilter } from '../components/catalog/catalog-aside-filter';
import { CatalogBanner } from '../components/catalog/catalog-banner';
import { CatalogItemsList } from '../components/catalog/catalog-items-list';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export function CatalogPage ():JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <CatalogBanner/>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <Breadcrumbs/>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <CatalogAsideFilter/>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <form action="#">
                      <div className="catalog-sort__inner">
                        <p className="title title--h5">Сортировать:</p>
                        <div className="catalog-sort__type">
                          <div className="catalog-sort__btn-text">
                            <input type="radio" id="sortPrice" name="sort" defaultChecked />
                            <label htmlFor="sortPrice">по цене</label>
                          </div>
                          <div className="catalog-sort__btn-text">
                            <input type="radio" id="sortPopular" name="sort" />
                            <label htmlFor="sortPopular">по популярности</label>
                          </div>
                        </div>
                        <div className="catalog-sort__order">
                          <div className="catalog-sort__btn catalog-sort__btn--up">
                            <input type="radio" id="up" name="sort-icon" defaultChecked aria-label="По возрастанию" />
                            <label htmlFor="up">
                              <svg width={16} height={14} aria-hidden="true">
                                <use xlinkHref="#icon-sort" />
                              </svg>
                            </label>
                          </div>
                          <div className="catalog-sort__btn catalog-sort__btn--down">
                            <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" />
                            <label htmlFor="down">
                              <svg width={16} height={14} aria-hidden="true">
                                <use xlinkHref="#icon-sort" />
                              </svg>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <CatalogItemsList/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

