import React from "react";
import { Formik, Field, Form as FormikForm } from "formik";

const Form = ({ fields, btnName = "Submit", ...props }) => {
  return (
    <Formik {...props}>
      {({ errors, isSubmitting }) => {
        return (
          <FormikForm>
            {errors.serverError && (
              <p style={{ color: "red" }}>{errors.serverError}</p>
            )}
            {fields.map((field) => (
              <Field key={field.name} {...field} />
            ))}
            <button disabled={isSubmitting} type="submit">
              {btnName}
            </button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
