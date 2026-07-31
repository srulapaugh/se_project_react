import "./ItemModal.css";
import close from "../../assets/closeicon.png";

function ItemModal({ onClose, isOpen, card = {} }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={close} alt="close" />
        </button>
        <img src={card.link} alt="clothing" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
