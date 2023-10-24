import { ImagesParams } from '../../consts/global';
import { useAppDispatch } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';
import { CatalogCardData } from '../../types/data-types';
import { formatTypeAndCategory } from '../../utils/data-formatting';
import { IconAddBasket } from '../icon-components/icon-add-basket';
import { IconClose } from '../icon-components/icon-close';
import { Picture } from '../picture';


type PopupAddItemProps = {
  catalogCardData: CatalogCardData;
}
export const PopupAddItem:React.FC<PopupAddItemProps> = ({catalogCardData}: PopupAddItemProps) => {

  const dispatch = useAppDispatch();
  const closePopupHandler = () => {
    dispatch(removeModal());
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <Picture
            previewImgWebp = {catalogCardData.previewImgWebp} previewImgWebp2x = {catalogCardData.previewImgWebp2x}
            previewImg = {catalogCardData.previewImg} previewImg2x = {catalogCardData.previewImg2x}
            imageParams={{
              ...ImagesParams.popups.addItem,
              alt: `${catalogCardData.type} ${catalogCardData.name}`
            }}
          />
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
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          autoFocus
        >
          <IconAddBasket/>
          Добавить в корзину
        </button>
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={closePopupHandler}
      >
        <IconClose/>
      </button>
    </div>
  );
};

