import { Swiper } from 'swiper/types';
import { SIMILAR_PRODUCTS_PER_PAGE } from '../../consts/global';

type ProductSimilarNavButtonsProps = {
  swiperInstance: Swiper | undefined;
}
export function ProductSimilarNavButtons ({swiperInstance}: ProductSimilarNavButtonsProps):JSX.Element {

  if (!swiperInstance) {
    return (
      <>
      </>
    );
  }

  const nextButtonClickHandler = () => {
    for (let i = 0; i < SIMILAR_PRODUCTS_PER_PAGE; i++) {
      swiperInstance.slideNext();
    }
  };
  const prevButtonClickHandler = () => {
    for (let i = 0; i < SIMILAR_PRODUCTS_PER_PAGE; i++) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <>
      <button className="slider-controls-button slider-controls--prev" onClick={prevButtonClickHandler}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow"/>
        </svg>
      </button>
      <button className="slider-controls-button slider-controls--next" onClick={nextButtonClickHandler}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow"/>
        </svg>
      </button>
    </>
  );
}


