import "./ModalWithForm.css";
import close from "../../assets/closeicon.png";

function ModalWithForm({ children, buttonText, title, activeModal }) {
  return (
    <div className={'modal ${activeModal == "add-garment" && "modal__opened"}'}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button">
          <img src={close} alt="close" />
        </button>
        <form action="" className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
