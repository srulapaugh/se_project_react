import "./ModalWithForm.css";
import close from "../../assets/greycloseicon.png";
import AddItemModal from "../AddItemModal/AddItemModal";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  name,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close" type="button">
          <img src={close} alt="close" />
        </button>
        <form onSubmit={onSubmit} name={name} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText} Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
