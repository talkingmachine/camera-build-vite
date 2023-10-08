import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { removeModal } from '../../store/actions';

export function Modal ():JSX.Element {

  const dispatch = useAppDispatch();
  const popup = useAppSelector((state) => state.STATES.popup);

  const modalOverlayClickHandler = () => {
    dispatch(removeModal());
  };

  if (popup) {
    return (
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={modalOverlayClickHandler}/>
          {popup}
        </div>
      </div>);
  } else {
    return (
      <>
      </>);
  }
}

