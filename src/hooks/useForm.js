import { useFormWithValidation } from "./useFormWithValidation";

export function useForm(defaultValues) {
  return useFormWithValidation(defaultValues);
}

export { useFormWithValidation };
