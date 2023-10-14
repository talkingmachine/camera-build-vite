import { Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { productsDataToCatalogList } from '../../utils/data-formatting';
import { CatalogPagination } from './catalog-pagination';
import { showModal } from '../../store/actions';
import { PopupAddItem } from '../popups/popup-add-item';
import { CatalogCardData } from '../../types/data-types';
import { RouterPaths } from '../../consts/router-paths';
import { Rating } from '../rating';
import { Picture } from '../picture';

export function CatalogProductsList ():JSX.Element {

  const dispatch = useAppDispatch();
  const productsListData = useAppSelector((state) => state.DATA.productsList);
  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || 1);

  const catalogCardsData = productsDataToCatalogList(productsListData, currentPage);

  const buyButtonClickHandler = (catalogCardData: CatalogCardData) => {
    dispatch(showModal(<PopupAddItem catalogCardData={catalogCardData}/>));
  };

  return (
    <>
      <div className="cards catalog__cards">
        {catalogCardsData.map((catalogCardData) => (
          <div key={catalogCardData.id} className="product-card">
            <div className="product-card__img">
              <Picture
                previewImgWebp = {catalogCardData.previewImgWebp} previewImgWebp2x = {catalogCardData.previewImgWebp2x}
                previewImg = {catalogCardData.previewImg} previewImg2x = {catalogCardData.previewImg2x}
                width = {280} height = {240}
                alt = {catalogCardData.name}
              />
            </div>
            <div className="product-card__info">
              <div className="rate product-card__rate">
                <Rating rating={catalogCardData.rating}/>
                <p className="visually-hidden">Рейтинг: {catalogCardData.rating}</p>
                <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{catalogCardData.reviewCount}</p>
              </div>
              <p className="product-card__title">{catalogCardData.name}</p>
              <p className="product-card__price"><span className="visually-hidden">Цена:</span>{catalogCardData.price} ₽
              </p>
            </div>
            <div className="product-card__buttons">
              <button
                className="btn btn--purple product-card__btn"
                type="button"
                onClick={() => buyButtonClickHandler(catalogCardData)}
              >Купить
              </button>
              <Link className="btn btn--transparent" to={`${RouterPaths.product}/${catalogCardData.id}`}>Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
      <CatalogPagination listLength={productsListData.length}/>
    </>
  );
}
