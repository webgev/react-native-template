import { useCallback, useMemo, useRef } from 'react';

import { FormikConfig, FormikHelpers, FormikValues, useFormik } from 'formik';

export interface FieldProps<Value = string> {
  value: Value;
  onChange: (v: Value) => void;
  onSubmit?: () => void;
  error?: string;
}

export type OnSubmit<Values extends object> = (
  values: Values,
  formikHelpers: FormikHelpers<Values>,
) => Promise<void>;

interface OwnConfig<F extends object> {
  validateForm?: boolean;
  onSubmit: OnSubmit<F>;
}

export const useForm = <T extends FormikValues>({
  validateForm = true,
  ...config
}: Omit<FormikConfig<T>, 'onSubmit'> & OwnConfig<T>) => {
  const shouldValidateOnChange = useRef(false);
  const formik = useFormik<T>({
    validateOnChange: shouldValidateOnChange.current,
    validateOnBlur: false,
    ...config,
  });
  shouldValidateOnChange.current = !!formik.submitCount;

  const field = useCallback(
    <K extends keyof T & string>(
      name: K,
      allowSubmit = false,
      showError = true,
    ) => ({
      onChange: (value?: T[K]) => {
        void formik.setFieldValue(name, value);
        formik.setFieldError(name, '');
      },
      onBlur: formik.handleBlur(name),
      error: showError ? formik.errors[name] : undefined,
      value: formik.values[name] as T[K],
      onSubmit: allowSubmit ? formik.handleSubmit : undefined,
    }),
    [formik],
  );

  const submitProps = useMemo(
    () => ({
      onPress: formik.handleSubmit,
      loading: formik.isSubmitting,
      disabled: formik.isSubmitting || (validateForm && !formik.dirty),
    }),
    [formik.dirty, formik.handleSubmit, formik.isSubmitting, validateForm],
  );

  return useMemo(
    () => ({ field, submitProps, formik }),
    [field, formik, submitProps],
  );
};
