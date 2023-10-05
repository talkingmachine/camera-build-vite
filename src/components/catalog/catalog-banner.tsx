import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';

export function CatalogBanner ():JSX.Element {

  const promoDataList = useAppSelector((state) => state.DATA.promoList);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
    >
      {promoDataList.map((promoData) => (
        <SwiperSlide key={promoData.id} className="banner">
          <picture>
            <source type="image/webp" srcSet={`${promoData.previewImgWebp}, ${promoData.previewImgWebp2x} 2x`} />
            <img src={promoData.previewImg} srcSet={`${promoData.previewImg2x} 2x`} width={1280} height={280} alt="баннер" />
          </picture>
          <p className="banner__info">
            <span className="banner__message">Новинка!</span>
            <span className="title title--h1">{promoData.name}</span>
            <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
            <Link className="btn" to={RouterPaths.product}>Подробнее</Link>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

