import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';

export function Modal ():JSX.Element {

  const dispatch = useAppDispatch();
  const popup = useAppSelector((state) => state.STATES.popup);

  const modalRemoveHandler = (evt: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
    if ('key' in evt) {
      if (evt.key === 'Escape') {
        dispatch(removeModal());
      }
    } else {
      dispatch(removeModal());
    }
  };

  if (popup) {
    return (
      <div className="modal is-active" onKeyDown={modalRemoveHandler}>
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={modalRemoveHandler} data-testid='modal'/>
          {popup}
        </div>
      </div>);
  } else {
    return (
      <>
      </>);
  }
}

