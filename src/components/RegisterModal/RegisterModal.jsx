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
    } else if (!/^https?:\/\/.+/i.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formValues.password) {
      nextErrors.password = "Please enter a password.";
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

    onRegister({ ...values });
  }

  const showError = (fieldName) => isSubmitted && Boolean(errors[fieldName]);

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
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
      <label htmlFor="avatar" className="modal__label">
        Avatar{" "}
        <input
          type="text"
          className={`modal__input ${showError("avatar") ? "modal__input_invalid" : ""}`}
          name="avatar"
          id="avatar"
          placeholder="avatar"
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
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className={`modal__input ${showError("email") ? "modal__input_invalid" : ""}`}
          name="email"
          id="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={showError("email")}
        />
        <span
          className={`modal__error ${showError("weatherType") ? "modal__error_visible" : ""}`}
        >
          {errors.email || ""}
        </span>
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className={`modal__input ${showError("password") ? "modal__input_invalid" : ""}`}
          name="password"
          id="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={showError("password")}
        />
        <span
          className={`modal__error ${showError("weatherType") ? "modal__error_visible" : ""}`}
        >
          {errors.password || ""}
        </span>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
