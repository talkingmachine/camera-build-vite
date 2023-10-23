import { Swiper } from 'swiper/types';
import { SIMILAR_PRODUCTS_PER_PAGE } from '../../consts/global';
import { RefObject } from 'react';

type ProductSimilarNavButtonsProps = {
  swiperInstance: Swiper | undefined;
  buttonElements: {
    prevEl: RefObject<HTMLButtonElement>;
    nextEl: RefObject<HTMLButtonElement>;
  };
}
export function ProductSimilarNavButtons ({buttonElements, swiperInstance}: ProductSimilarNavButtonsProps):JSX.Element {

  if (!swiperInstance) {
    return (
      <>
      </>
    );
  }


  const prevButtonClickHandler = () => {
    for (let i = 0; i < SIMILAR_PRODUCTS_PER_PAGE - 1; i++) { // (SIMILAR_PRODUCTS_PER_PAGE - 1) because one slidePrev() by default
      swiperInstance.slidePrev();
    }
  };
  const nextButtonClickHandler = () => {
    for (let i = 0; i < SIMILAR_PRODUCTS_PER_PAGE - 1; i++) {
      swiperInstance.slideNext();
    }
  };

  return (
    <>
      <button className="slider-controls-button slider-controls--prev" onClick={prevButtonClickHandler} ref={buttonElements.prevEl}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow"/>
        </svg>
      </button>
      <button className="slider-controls-button slider-controls--next" onClick={nextButtonClickHandler} ref={buttonElements.nextEl}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow"/>
        </svg>
      </button>
    </>
  );
}


