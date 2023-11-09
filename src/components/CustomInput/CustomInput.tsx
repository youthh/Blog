import React from "react";
import { FieldInputProps, useFormikContext } from "formik";
import { BaseTextFieldProps, FormHelperText, TextField } from "@mui/material";

export interface CustomTextFieldProps extends BaseTextFieldProps {
  field?: FieldInputProps<HTMLInputElement>;
}

export const CustomInput = ({
  error,
  field,
  name,
  ...rest
}: CustomTextFieldProps) => {
  const { errors } = useFormikContext();

  const fieldName = field?.name;
  const errorExists = fieldName && errors[fieldName as keyof typeof errors];
  const errorMessage = errorExists
    ? errors[fieldName as keyof typeof errors]
    : "";

  return (
    <>
      <TextField {...field} {...rest} />
      <FormHelperText error={!!errorExists}>{errorMessage}</FormHelperText>
    </>
  );
};
