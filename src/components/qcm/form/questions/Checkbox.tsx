import { ErrorMessage, Field } from "formik";

type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  style?: string | undefined;
  styleField?: string | undefined;
  styleLabel?: string | undefined;
};

const Checkbox = ({
  id,
  name,
  value,
  label,
  style,
  styleField,
  styleLabel,
}: CheckboxProps) => (
  <div className={style}>
    <Field
      aria-describedby={`${id}-error`}
      aria-labelledby={`${id}-label`}
      className={styleField}
      id={id}
      name={name}
      type="checkbox"
      value={value}
    />
    <label className={styleLabel} htmlFor={id} id={`${id}-label`}>
      {label}
    </label>

    <ErrorMessage name={name}>
      {(message) => <p id={`${id}-error`}>{message}</p>}
    </ErrorMessage>
  </div>
);

export default Checkbox;
