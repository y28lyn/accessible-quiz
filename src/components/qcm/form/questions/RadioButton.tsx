import { ErrorMessage, Field } from "formik";

type RadioProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  style?: string | undefined;
  styleField?: string | undefined;
  styleLabel?: string | undefined;
};

const RadioButton = ({
  id,
  name,
  value,
  label,
  style,
  styleField,
  styleLabel,
}: RadioProps) => (
  <div className={style}>
    <Field
      aria-describedby={`${id}-error`}
      aria-labelledby={`${id}-label`}
      className={styleField}
      id={id}
      name={name}
      type="radio"
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

export default RadioButton;
