import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onLogin, onClose, onToggleClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const validateForm = (formValues) => {
    const nextErrors = {};
    const trimmedEmail = formValues.email.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
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

    onLogin({ ...values });
  }

  const showError = (fieldName) => isSubmitted && Boolean(errors[fieldName]);
  const isSubmitDisabled = Object.keys(validateForm(values)).length > 0;

  return (
    <ModalWithForm
      name="login"
      title="Log in"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      toggleText="or Signup"
      onToggleClick={onToggleClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          name="email"
          className={`modal__input ${showError("email") ? "modal__input_invalid" : ""}`}
          id="login-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={showError("email")}
        />
        <span
          className={`modal__error ${showError("email") ? "modal__error_visible" : ""}`}
        >
          {errors.email || ""}
        </span>
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          name="password"
          className={`modal__input ${showError("password") ? "modal__input_invalid" : ""}`}
          id="login-password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={showError("password")}
        />
        <span
          className={`modal__error ${showError("password") ? "modal__error_visible" : ""}`}
        >
          {errors.password || ""}
        </span>
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
