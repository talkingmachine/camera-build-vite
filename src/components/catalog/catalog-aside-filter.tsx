import { useForm } from 'react-hook-form';
import { FormFilter } from '../../consts/enums';
import { useSearchParams } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';

export function CatalogAsideFilter ():JSX.Element {

  type FormInputs = {
    [key in keyof typeof FormFilter]: string;
  }

  const {
    register,
    reset,
    resetField,
    watch,
    getValues,
    setValue
  } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const formChangeHandler = () => {
    setSearchParams(getValues() as FormInputs);
  };

  const changeCategoryHandler = (evt: FormEvent<HTMLFieldSetElement>) => {
    const options = Object.keys(FormFilter.category) as (keyof typeof FormFilter.category)[];
    options.forEach((option) => {
      if (FormFilter.category[option] !== (evt.target as HTMLInputElement).value) {
        resetField(FormFilter.category[option]);
      }
    });
  };

  const resetFiltersHandler = () => {
    formChangeHandler();
    reset();
  };

  useEffect(() => {
    for (const filter in FormFilter) {
      // console.log('------');
      // console.log(filter);
      if (searchParams.has(filter)) {

        setValue(filter, searchParams.get(filter));
      }
    }
  }, [getValues, searchParams, setSearchParams, setValue]);


  return (
    <div className="catalog-filter">
      <form action="#" onChange={formChangeHandler}>
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  {...register(FormFilter.priceMin)}
                  placeholder="от"
                />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  {...register(FormFilter.priceMax)}
                  placeholder="до"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block" onChange={changeCategoryHandler}>
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.category.photocamera}
                {...register(FormFilter.category.photocamera)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.category.videocamera}
                {...register(FormFilter.category.videocamera)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.type.digital}
                {...register(FormFilter.type.name)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.type.film}
                {...register(FormFilter.type.name)}
                disabled={watch(FormFilter.category.videocamera) === FormFilter.category.videocamera}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.type.snapshot}
                {...register(FormFilter.type.name)}
                disabled={watch(FormFilter.category.videocamera) === FormFilter.category.videocamera}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.type.collection}
                {...register(FormFilter.type.name)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.level.zero}
                {...register(FormFilter.level.name)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.level.nonProfessional}
                {...register(FormFilter.level.name)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                defaultValue={FormFilter.level.professional}
                {...register(FormFilter.level.name)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
          onClick={resetFiltersHandler}
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

