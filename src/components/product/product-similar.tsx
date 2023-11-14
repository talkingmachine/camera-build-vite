import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { getSimilarList } from '../../store/api-actions';
import { formatProductData } from '../../utils/data-formatting';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Picture } from '../picture';
import { Rating } from '../rating';
import 'swiper/css';
import 'swiper/css/navigation';
import { showModal } from '../../store/actions';
import { CatalogCardData } from '../../types/data-types';
import { PopupAddItem } from '../popups/popup-add-item';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';
import { ProductSimilarNavButtons } from './product-similar-nav-buttons';
import { ImagesParams } from '../../consts/global';
import { Status, StatusMessages } from '../../consts/enums';
import { LoadingSpinner } from '../loading-spinner';


export function ProductSimilar ():JSX.Element {

  const dispatch = useAppDispatch();
  const productId = useAppSelector((state) => state.DATA.product.data).id;
  const similarListData = useAppSelector((state) => state.DATA.similarList);
  const similarCardsList = similarListData.data.map(formatProductData);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const buttonPrevElement = useRef<HTMLButtonElement>(null);
  const buttonNextElement = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (productId) {
      dispatch(getSimilarList({id: productId}));
    }
  }, [dispatch, productId]);

  const buyButtonClickHandler = (catalogCardData: CatalogCardData) => {
    dispatch(showModal(<PopupAddItem catalogCardData={catalogCardData}/>));
  };


  if (similarListData.status === Status.pending) {
    return (
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <LoadingSpinner/>
          </div>
        </div>
      </section>
    );
  } else if (similarListData.status === Status.rejected) {
    return (
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="title title--h5">Ошибка: {StatusMessages.similarListRejected}</div>
          </div>
        </div>
      </section>
    );
  } else {
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
                prevEl: buttonPrevElement.current,
                nextEl: buttonNextElement.current,
                disabledClass: 'disabled'
              }}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              {similarCardsList.map((similarCard) => (
                <SwiperSlide key={similarCard.id} className='product-card is-active' >
                  <div className="product-card__img">
                    <Picture
                      previewImg={similarCard.previewImg}
                      previewImg2x={similarCard.previewImg2x}
                      previewImgWebp={similarCard.previewImgWebp}
                      previewImgWebp2x={similarCard.previewImgWebp2x}
                      imageParams={{
                        ...ImagesParams.productPage.similarProducts,
                        alt: similarCard.name
                      }}
                    />
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <Rating rating={similarCard.rating}/>
                      <p className="visually-hidden">Рейтинг: {similarCard.rating}</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{similarCard.reviewCount}</p>
                    </div>
                    <p className="product-card__title">{similarCard.name}</p>
                    <p className="product-card__price">
                      <span className="visually-hidden">Цена:</span>{similarCard.price} ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button
                      className="btn btn--purple product-card__btn"
                      type="button"
                      onClick={() => buyButtonClickHandler(similarCard)}
                    >Купить
                    </button>
                    <Link className="btn btn--transparent" to={RouterPaths.product(similarCard.id)}>Подробнее
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ProductSimilarNavButtons
              buttonElements={{prevEl: buttonPrevElement, nextEl: buttonNextElement}}
              swiperInstance={swiperInstance}
            />
          </div>
        </div>
      </section>
    );
  }
}


