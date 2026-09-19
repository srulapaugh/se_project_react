import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onUpdateUser, onClose }) => {
  const currentUser = useContext(CurrentUserContext);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const validateForm = (formValues) => {
    const nextErrors = {};
    const trimmedName = formValues.name.trim();
    const trimmedAvatar = formValues.avatar.trim();

    if (!trimmedName) {
      nextErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 30) {
      nextErrors.name = "Name must be 30 characters or fewer.";
    }

    if (!trimmedAvatar) {
      nextErrors.avatar = "Please add an avatar URL.";
    } else if (!/^https?:\/\/.+/i.test(trimmedAvatar)) {
      nextErrors.avatar = "Please enter a valid image URL.";
    }

    return nextErrors;
  };

  const {
    values,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit: submitForm,
    resetForm,
  } = useFormWithValidation(defaultValues, validateForm);

  useEffect(() => {
    if (isOpen) {
      resetForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  function handleSubmit(evt) {
    const isFormValid = submitForm(evt);

    if (!isFormValid) {
      return;
    }

    onUpdateUser({ ...values });
  }

  const showError = (fieldName) => isSubmitted && Boolean(errors[fieldName]);

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change profile data"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          name="name"
          className={`modal__input ${showError("name") ? "modal__input_invalid" : ""}`}
          id="edit-name"
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

      <label htmlFor="edit-avatar" className="modal__label">
        Avatar{" "}
        <input
          type="text"
          name="avatar"
          className={`modal__input ${showError("avatar") ? "modal__input_invalid" : ""}`}
          id="edit-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          aria-invalid={showError("avatar")}
        />
        <span
          className={`modal__error ${showError("avatar") ? "modal__error_visible" : ""}`}
        >
          {errors.avatar || ""}
        </span>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
