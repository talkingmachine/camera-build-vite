import { useAppDispatch } from '../../hooks/typed-wrappers';
import { removeModal, showModal } from '../../store/actions';
import { postReview } from '../../store/api-actions';
import { useState } from 'react';
import { ReviewPostData } from '../../types/data-types';
import { PopupReviewSuccess } from './popup-review-success';

type PopupAddReviewProps = {
  cameraId: number;
}
export function PopupAddReview ({cameraId}: PopupAddReviewProps):JSX.Element {

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ReviewPostData>({
    cameraId: cameraId,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const closePopupHandler = () => {
    dispatch(removeModal());
  };

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({reviewPostData: formData}));
    dispatch(removeModal());
    dispatch(showModal(<PopupReviewSuccess/>));
  };

  const updateFormData = (field: keyof ReviewPostData, data: ReviewPostData[typeof field]) => { // QUESTION about data
    setFormData((prev) => ({
      ...prev,
      [field]: data
    }));
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form onSubmit={formSubmitHandler} >
          <div className="form-review__rate">
            <fieldset className="rate form-review__item">
              <legend className="rate__caption">Рейтинг
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </legend>
              <div className="rate__bar">
                <div
                  className="rate__group"
                  onChange={(evt) => updateFormData('rating', 'value' in evt.target ? Number(evt.target.value) : 0)}
                >
                  <input className="visually-hidden" id="star-5" name="rate" type="radio" defaultValue={5}
                    defaultChecked={formData.rating === 5}
                  />
                  <label className="rate__label" htmlFor="star-5" title="Отлично" />
                  <input className="visually-hidden" id="star-4" name="rate" type="radio" defaultValue={4} defaultChecked={formData.rating === 4}/>
                  <label className="rate__label" htmlFor="star-4" title="Хорошо" />
                  <input className="visually-hidden" id="star-3" name="rate" type="radio" defaultValue={3}defaultChecked={formData.rating === 3}/>
                  <label className="rate__label" htmlFor="star-3" title="Нормально" />
                  <input className="visually-hidden" id="star-2" name="rate" type="radio" defaultValue={2}defaultChecked={formData.rating === 2}/>
                  <label className="rate__label" htmlFor="star-2" title="Плохо" />
                  <input className="visually-hidden" id="star-1" name="rate" type="radio" defaultValue={1}defaultChecked={formData.rating === 1}/>
                  <label className="rate__label" htmlFor="star-1" title="Ужасно" />
                </div>
                <div className="rate__progress">
                  <span className="rate__stars">{formData.rating}</span> <span>/</span> <span className="rate__all-stars">5</span>
                </div>
              </div>
              <p className="rate__message">Нужно оценить товар</p>
            </fieldset>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Ваше имя
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-name"
                  placeholder="Введите ваше имя"
                  required autoFocus
                  value={formData.userName}
                  onChange={(evt) => updateFormData('userName', evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать имя</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Достоинства
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-plus"
                  minLength={5}
                  maxLength={160}
                  placeholder="Основные преимущества товара"
                  required
                  value={formData.advantage}
                  onChange={(evt) => updateFormData('advantage', evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать достоинства</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Недостатки
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-minus"
                  minLength={2}
                  maxLength={160}
                  placeholder="Главные недостатки товара"
                  required
                  value={formData.disadvantage}
                  onChange={(evt) => updateFormData('disadvantage', evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать недостатки</p>
            </div>
            <div className="custom-textarea form-review__item">
              <label>
                <span className="custom-textarea__label">Комментарий
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <textarea
                  name="user-comment"
                  minLength={2}
                  maxLength={160}
                  placeholder="Поделитесь своим опытом покупки"
                  value={formData.review}
                  onChange={(evt) => updateFormData('review', evt.target.value)}
                />
              </label>
              <div className="custom-textarea__error">Нужно добавить комментарий</div>
            </div>
          </div>
          <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
        </form>
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

