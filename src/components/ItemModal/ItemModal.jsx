import { useState } from "react";
import close from "../../assets/closeicon.png";
import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDelete }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  const handleConfirmDelete = () => {
    onDelete(card);
    setIsConfirmingDelete(false);
  };

  const handleClose = () => {
    setIsConfirmingDelete(false);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      {isConfirmingDelete ? (
        <div className="modal__content modal__content_type_confirm">
          <button onClick={handleClose} type="button" className="modal__close">
            <img src={close} alt="close" />
          </button>
          <p className="modal__confirm-text">
            Are you sure you want to delete this item?
            <br />
            This action is irreversible.
          </p>
          <button
            onClick={handleConfirmDelete}
            type="button"
            className="modal__confirm-button"
          >
            Yes, delete item
          </button>
          <button
            onClick={handleCancelDelete}
            type="button"
            className="modal__cancel-button"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="modal__content modal__content_type_image">
          <button onClick={handleClose} type="button" className="modal__close">
            <img src={close} alt="close" />
          </button>
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
          <div className="modal__footer">
            <div className="modal__info">
              <h2 className="modal__caption">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>
            </div>
            <button
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-button"
            >
              Delete item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemModal;
