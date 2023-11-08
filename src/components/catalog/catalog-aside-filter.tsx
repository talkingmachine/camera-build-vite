import { useForm } from 'react-hook-form';
import { FormFilter } from '../../consts/enums';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export function CatalogAsideFilter ():JSX.Element {

  type FormInputs = {
    [key in keyof typeof FormFilter]: string;
  }
  type ParamsType = {[key: string]: string}

  const {
    register,
    reset,
    resetField,
    watch,
    getValues,
    setValue
  } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const formChangeHandler = () => { // when filters changed, add new param
    const values = (getValues() as FormInputs);
    const newParams: ParamsType = {};

    for (const key in values) {
      const value = values[key as keyof FormInputs];
      if (value) {
        newParams[key] = value;
      }
    }
    setSearchParams(newParams);
  };

  const changeCategoryClickHandler = (evt: React.MouseEvent<HTMLInputElement>) => { // radio-like behavior
    if ((evt.target as HTMLInputElement).value === (getValues(FormFilter.category.name) as string[])[0]) {
      resetField(FormFilter.category.name);
      formChangeHandler(); // onChange event after reset
    } else {
      resetField(FormFilter.category.name);
      setValue(FormFilter.category.name, (evt.target as HTMLInputElement).value);
    }
  };

  const resetFiltersHandler = () => {
    reset();
    formChangeHandler(); // onChange event after reset
  };

  const getFieldsDisabledStatus = () => {
    const categoryField = watch(FormFilter.category.name) as string[];
    return categoryField ? categoryField[0] === FormFilter.category.videocamera : false;
  };


  useEffect(() => {
    for (const key in FormFilter) {
      const value = searchParams.getAll(key);
      if (value) {
        setValue(key, value);
      }
    }
  }, [searchParams, setValue]);


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
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                value={FormFilter.category.photocamera}
                {...register(FormFilter.category.name)}
                onClick={changeCategoryClickHandler}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                value={FormFilter.category.videocamera}
                {...register(FormFilter.category.name)}
                onClick={changeCategoryClickHandler}
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
                disabled={getFieldsDisabledStatus()}
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
                disabled={getFieldsDisabledStatus()}
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

