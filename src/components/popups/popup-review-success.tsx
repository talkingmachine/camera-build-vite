import { useRef } from 'react';
import { useAppDispatch } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';
import { IconClose } from '../icon-components/icon-close';

export function PopupReviewSuccess ():JSX.Element {

  const dispatch = useAppDispatch();
  const closePopupHandler = () => {
    dispatch(removeModal());
  };

  const focusElements = {
    firstFocusElement: useRef<HTMLButtonElement>(null),
    lastFocusElement: useRef<HTMLButtonElement>(null),
  };


  return (
    <div className="modal__content">
      <p className="title title--h4">Спасибо за отзыв</p>
      <span tabIndex={1} onFocus={() => {
        focusElements.lastFocusElement.current?.focus();
      }}
      />
      <svg className="modal__icon" width={80} height={78} aria-hidden="true">
        <use xlinkHref="#icon-review-success" />
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          tabIndex={2}
          onClick={closePopupHandler}
          autoFocus
          ref={focusElements.firstFocusElement}
        >
            Вернуться к покупкам
        </button>
      </div>
      <button
        className="cross-btn"
        type="button"
        tabIndex={3}
        aria-label="Закрыть попап"
        onClick={closePopupHandler}
        ref={focusElements.lastFocusElement}
      >
        <IconClose/>
      </button>
      <span tabIndex={4} onFocus={() => {
        focusElements.firstFocusElement.current?.focus();
      }}
      />
    </div>
  );
}
