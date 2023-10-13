import { useSwiper } from 'swiper/react';


export function ProductSimilarNavButtons ():JSX.Element {

  const swiper = useSwiper();

  const handler = () => {
    console.log('button pressed');
    //swiper.slideNext();
  };

  return (
    <>
      <button className="slider-controls slider-controls--prev" onClick={handler} style={{zIndex: 99}}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow" />
        </svg>
      </button>
      <button className="slider-controls slider-controls--next" onClick={handler} style={{zIndex: 99}}>
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow" />
        </svg>
      </button>
    </>
  );
}


