import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../consts/router-paths';
import { Picture } from '../picture';
import { ImagesParams } from '../../consts/global';
import { Status, StatusMessages } from '../../consts/enums';
import { LoadingSpinner } from '../loading-spinner';

export function CatalogBanner ():JSX.Element {

  const promoDataList = useAppSelector((state) => state.DATA.promoList);

  if (promoDataList.status === Status.pending) {
    return (
      <div className="banner">
        <LoadingSpinner/>
      </div>
    );
  } else if (promoDataList.status === Status.rejected) {
    return (
      <div className="banner">
        <p className="title title--h5 banner__info">Ошибка: {StatusMessages.promoListRejected}</p>
      </div>
    );
  } else {
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
        {promoDataList.data.map((promoData) => (
          <SwiperSlide key={promoData.id} className="banner">
            <Picture
              previewImgWebp = {promoData.previewImgWebp} previewImgWebp2x = {promoData.previewImgWebp2x}
              previewImg={promoData.previewImg} previewImg2x={promoData.previewImg2x}
              imageParams={ImagesParams.catalogPage.banner}
            />
            <p className="banner__info">
              <span className="banner__message">Новинка!</span>
              <span className="title title--h1">{promoData.name}</span>
              <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
              <Link className="btn" to={RouterPaths.product(promoData.id)}>Подробнее</Link>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }


}

