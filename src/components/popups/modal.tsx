import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';

export function Modal ():JSX.Element {

  const dispatch = useAppDispatch();
  const popupInfo = useAppSelector((state) => state.STATES.popupInfo);

  const modalRemoveHandler = (evt: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
    if ('key' in evt) {
      if (evt.key === 'Escape') {
        dispatch(removeModal());
      }
    } else {
      dispatch(removeModal());
    }
  };

  if (popupInfo.popup) {
    document.body.style.overflow = 'hidden';

    return (
      <div
        className={classNames('modal is-active', {'modal--narrow': popupInfo.isNarrow})}
        onKeyDown={modalRemoveHandler}
      >
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={modalRemoveHandler}/>
          {popupInfo.popup}
        </div>
      </div>);
  } else {
    document.body.style.overflow = 'scroll';
    return (
      <>
      </>);
  }
}

