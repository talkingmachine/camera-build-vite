import { useAppDispatch } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';
import { CatalogCardData } from '../../types/data-types';
import { formatTypeAndCategory } from '../../utils/data-formatting';


type PopupAddItemProps = {
  catalogCardData: CatalogCardData;
}
export function PopupAddItem ({catalogCardData}: PopupAddItemProps):JSX.Element {

  const dispatch = useAppDispatch();
  const closePopupHandler = () => {
    dispatch(removeModal());
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet={`${catalogCardData.previewImgWebp}, ${catalogCardData.previewImgWebp2x} 2x`} />
            <img
              src={catalogCardData.previewImg}
              srcSet={`${catalogCardData.previewImg2x} 2x`}
              width={140} height={120}
              alt={`${catalogCardData.type} ${catalogCardData.name}`}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{catalogCardData.name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул: </span>
              <span className="basket-item__number">{catalogCardData.vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{formatTypeAndCategory(catalogCardData.type, catalogCardData.category)}</li>
            <li className="basket-item__list-item">{catalogCardData.level} уровень</li>
          </ul>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{catalogCardData.price} ₽</p>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
          <svg width={24} height={16} aria-hidden="true">
            <use xlinkHref="#icon-add-basket" />
          </svg>Добавить в корзину
        </button>
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={closePopupHandler}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </div>
  );
}

