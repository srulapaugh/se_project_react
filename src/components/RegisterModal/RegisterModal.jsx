import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onRegister, onClose }) => {
  const defaultValues = {
    name: "",
    avatar: "",
    email: "",
    password: "",
  };

  const validateForm = (formValues) => {
    const nextErrors = {};
    const trimmedName = formValues.name.trim();
    const trimmedAvatar = formValues.avatar.trim();
    const trimmedEmail = formValues.email.trim();

    if (!trimmedName) {
      nextErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 30) {
      nextErrors.name = "Name must be 30 characters or fewer.";
    }

    if (!trimmedAvatar) {
      nextErrors.avatar = "Please add an image URL.";
    } else if (!/^https?:\/\/.+/i.test(trimmedAvatar)) {
      nextErrors.avatar = "Please enter a valid image URL.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^https?:\/\/.+/i.test(trimmedAvatar)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formValues.weatherType) {
      nextErrors.weatherType = "Please select a weather type.";
    }

    return nextErrors;
  };

  const {
    values,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit: submitForm,
  } = useFormWithValidation(defaultValues, validateForm);

  function handleSubmit(evt) {
    const isFormValid = submitForm(evt);

    if (!isFormValid) {
      return;
    }

    onAddItem({ ...values });
  }

  const showError = (fieldName) => isSubmitted && Boolean(errors[fieldName]);

  return (
    <ModalWithForm
      name="add-garment"
      title="New garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          name="name"
          className={`modal__input ${showError("name") ? "modal__input_invalid" : ""}`}
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={showError("name")}
        />
        <span
          className={`modal__error ${showError("name") ? "modal__error_visible" : ""}`}
        >
          {errors.name || ""}
        </span>
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className={`modal__input ${showError("imageUrl") ? "modal__input_invalid" : ""}`}
          name="imageUrl"
          id="imageUrl"
          placeholder="ImageUrl"
          value={values.imageUrl}
          onChange={handleChange}
          aria-invalid={showError("imageUrl")}
        />
        <span
          className={`modal__error ${showError("imageUrl") ? "modal__error_visible" : ""}`}
        >
          {errors.imageUrl || ""}
        </span>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            value="hot"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            value="warm"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            value="cold"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
        <span
          className={`modal__error ${showError("weatherType") ? "modal__error_visible" : ""}`}
        >
          {errors.weatherType || ""}
        </span>
      </fieldset>
    </ModalWithForm>
  );
};

export default RegisterModal;
