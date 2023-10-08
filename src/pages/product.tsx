import { useEffect } from 'react';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ProductProductSimilar } from '../components/product/product-product-similar';
import { ProductReviewBlock } from '../components/product/product-review-block';
import { useAppDispatch, useAppSelector } from '../hooks/typed-wrappers';
import { formatProductData } from '../utils/data-formatting';
import { useParams } from 'react-router-dom';
import { getProduct } from '../store/api-actions';
import { ProductRate } from '../components/product/product-rate';

export function ProductPage ():JSX.Element {

  const dispatch = useAppDispatch();
  const productPageId = +(useParams().id || -1);
  const productData = useAppSelector((state) => state.DATA.product);

  useEffect(() => {
    if (productPageId && productData.id !== productPageId) {
      dispatch(getProduct({id: productPageId}));
    }
  }, [dispatch, productData.id, productPageId]);

  const productPageInfo = formatProductData(productData);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <Breadcrumbs/>
            </div>
          </div>
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet={`${productPageInfo.previewImgWebp}, ${productPageInfo.previewImgWebp2x} 2x`} />
                    <img src={productPageInfo.previewImg} srcSet={`${productPageInfo.previewImg2x} 2x`} width={560} height={480} alt={productPageInfo.name} />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{productPageInfo.name}</h1>
                  <div className="rate product__rate">
                    <ProductRate rating={productPageInfo.rating}/>
                    <p className="visually-hidden">Рейтинг: {productPageInfo.rating}</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{productPageInfo.reviewCount}</p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{productPageInfo.price} ₽</p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button className="tabs__control" type="button">Характеристики</button>
                      <button className="tabs__control is-active" type="button">Описание</button>
                    </div>
                    <div className="tabs__content">
                      <div className="tabs__element">
                        <ul className="product__tabs-list">
                          <li className="item-list"><span className="item-list__title">Артикул:</span>
                            <p className="item-list__text"> {productPageInfo.vendorCode}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Категория:</span>
                            <p className="item-list__text">{productPageInfo.category}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">{productPageInfo.type}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{productPageInfo.level}</p>
                          </li>
                        </ul>
                      </div>
                      <div className="tabs__element is-active">
                        <div className="product__tabs-text">
                          {productPageInfo.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <ProductProductSimilar/>
          </div>
          <div className="page-content__section">
            <ProductReviewBlock/>
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2"/>
        </svg>
      </a>
      <Footer/>
    </div>
  );
}

