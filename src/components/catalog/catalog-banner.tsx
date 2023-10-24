import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';
import { Picture } from '../picture';

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
          <Picture
            previewImgWebp = {promoData.previewImgWebp} previewImgWebp2x = {promoData.previewImgWebp2x}
                  previewImg={promoData.previewImg} previewImg2x={promoData.previewImg2x}
            // выглядит как пропсы для swiper или константы      
            width = {1280} height = {280}
            alt = {'баннер'}
          />
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

