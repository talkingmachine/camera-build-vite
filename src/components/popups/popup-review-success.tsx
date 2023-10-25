import { useAppDispatch } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';
import { IconClose } from '../icon-components/icon-close';

export function PopupReviewSuccess ():JSX.Element {

  const dispatch = useAppDispatch();
  const closePopupHandler = () => {
    dispatch(removeModal());
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width={80} height={78} aria-hidden="true">
        <use xlinkHref="#icon-review-success" />
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={closePopupHandler}
          autoFocus
        >
            Вернуться к покупкам
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
}
