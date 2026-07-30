import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">New Garmet</h2>
        <button className="modal__close" type="button">
          CLOSE
        </button>
        <form action="" className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="ImageUrl"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__radio-input" />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input id="warm" type="radio" className="modal__radio-input" />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__radio-input" />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
