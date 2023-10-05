import { useAppSelector } from '../../hooks/typed-wrappers';
import { itemsDataToCatalogCardsData } from '../../utils/data-formatting';

export function CatalogItemsList ():JSX.Element {

  const catalogCardsData = itemsDataToCatalogCardsData(
    useAppSelector((state) => state.DATA.itemsList).slice(0, 9) // "pagination"
  );

  return (
    <>
      <div className="cards catalog__cards">
        {catalogCardsData.map((catalogCardData) => (
          <div key={catalogCardData.id} className="product-card">
            <div className="product-card__img">
              <picture>
                <source type="image/webp" srcSet={`${catalogCardData.previewImgWebp}, ${catalogCardData.previewImgWebp2x} 2x`} />
                <img src={catalogCardData.previewImg} srcSet={`${catalogCardData.previewImg2x} 2x`} width={280} height={240} alt={catalogCardData.name} />
              </picture>
            </div>
            <div className="product-card__info">
              <div className="rate product-card__rate">
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-full-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-star" />
                </svg>
                <svg width={17} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-star" />
                </svg>
                <p className="visually-hidden">Рейтинг: 3</p>
                <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
              </div>
              <p className="product-card__title">{catalogCardData.name}</p>
              <p className="product-card__price"><span className="visually-hidden">Цена:</span>{catalogCardData.price} ₽
              </p>
            </div>
            <div className="product-card__buttons">
              <button className="btn btn--purple product-card__btn" type="button">Купить
              </button>
              <a className="btn btn--transparent" href="#">Подробнее
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item"><a className="pagination__link pagination__link--active" href="1">1</a>
          </li>
          <li className="pagination__item"><a className="pagination__link" href="2">2</a>
          </li>
          <li className="pagination__item"><a className="pagination__link" href="3">3</a>
          </li>
          <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a>
          </li>
        </ul>
      </div>
    </>
  );
}
