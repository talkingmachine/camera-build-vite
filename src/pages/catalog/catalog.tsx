import { Breadcrumbs } from '../../components/breadcrumbs';
import { CatalogAsideFilter } from '../../components/catalog/catalog-aside-filter';
import { CatalogBanner } from '../../components/catalog/catalog-banner';
import { CatalogProductsList } from '../../components/catalog/catalog-products-list';
import { CatalogSort } from '../../components/catalog/catalog-sort';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header/header';

export default function CatalogPage ():JSX.Element {
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
                  <CatalogSort/>
                  <CatalogProductsList/>
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

