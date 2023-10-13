import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { getSimilarList } from '../../store/api-actions';
import { formatProductData } from '../../utils/data-formatting';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Picture } from '../picture';
import { ProductRate } from './product-rate';
import 'swiper/css';
import 'swiper/css/navigation';


export function ProductSimilar ():JSX.Element {

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.DATA.product);
  const similarListData = useAppSelector((state) => state.DATA.similarList);
  const similarCardsList = similarListData.map(formatProductData);

  useEffect(() => {
    dispatch(getSimilarList({id: product.id}));
  }, [dispatch, product.id]);

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <Swiper
            className='product-similar__slider-list'
            modules={[Navigation]}
            slidesPerView='auto'
            navigation={{
              prevEl: 'slider-controls--prev',
              nextEl: 'slider-controls--next'
            }}
          >
            {similarCardsList.map((similarCard) => (
              <SwiperSlide key={similarCard.id} className='product-card is-active'>
                <div className="product-card__img">
                  <Picture
                    previewImg={similarCard.previewImg}
                    previewImg2x={similarCard.previewImg2x}
                    previewImgWebp={similarCard.previewImgWebp}
                    previewImgWebp2x={similarCard.previewImgWebp2x}
                    width={280}
                    height={240}
                    alt={similarCard.name}
                  />
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <ProductRate rating={similarCard.rating}/>
                    <p className="visually-hidden">Рейтинг: {similarCard.rating}</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{similarCard.reviewCount}</p>
                  </div>
                  <p className="product-card__title">{similarCard.name}</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>{similarCard.price} ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn--purple product-card__btn" type="button">Купить
                  </button>
                  <a className="btn btn--transparent" href="#">Подробнее
                  </a>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="product-card is-active">
              <div className="product-card__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/fast-shot.webp, img/content/fast-shot@2x.webp 2x" /><img src="img/content/fast-shot.jpg" srcSet="img/content/fast-shot@2x.jpg 2x" width={280} height={240} alt="Фотоаппарат FastShot MR-5" />
                </picture>
              </div>
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-full-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-full-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-full-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-full-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <p className="visually-hidden">Рейтинг: 4</p>
                  <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                </div>
                <p className="product-card__title">FastShot MR-5</p>
                <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <button className="btn btn--purple product-card__btn" type="button">Купить
                </button>
                <a className="btn btn--transparent" href="#">Подробнее
                </a>
              </div>
            </SwiperSlide>
            <button slot="container-end" className="slider-controls--prev" type="button" aria-label="Предыдущий слайд">
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button slot="container-end" className="slider-controls--next" type="button" aria-label="Следующий слайд">
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </Swiper>

        </div>
      </div>
    </section>
  );
}


