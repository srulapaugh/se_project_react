import { useState } from "react";

export function useFormWithValidation(defaultValues, validate) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(() => {
    if (!validate) {
      return true;
    }

    return Object.keys(validate(defaultValues)).length === 0;
  });

  function updateValidation(nextValues) {
    if (!validate) {
      setErrors({});
      setIsValid(true);
      return true;
    }

    const nextErrors = validate(nextValues);
    setErrors(nextErrors);
    const nextIsValid = Object.keys(nextErrors).length === 0;
    setIsValid(nextIsValid);
    return nextIsValid;
  }

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    const nextValues = {
      ...values,
      [name]: type === "checkbox" ? checked : value,
    };

    setValues(nextValues);

    if (isSubmitted) {
      updateValidation(nextValues);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);

    const nextErrors = validate ? validate(values) : {};
    const nextIsValid = Object.keys(nextErrors).length === 0;

    setErrors(nextErrors);
    setIsValid(nextIsValid);

    if (nextIsValid) {
      resetForm();
      return true;
    }

    return false;
  }

  function resetForm() {
    setValues(defaultValues);
    setErrors({});
    setIsSubmitted(false);
    setIsValid(!validate || Object.keys(validate(defaultValues)).length === 0);
  }

  return {
    values,
    errors,
    isValid,
    isSubmitted,
    setValues,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
