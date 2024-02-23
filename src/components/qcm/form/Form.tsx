import { useState, Fragment } from "react";
import { Formik, Form as FormikForm } from "formik";

import FieldGroup from "./FieldGroup";
import Checkbox from "./questions/Checkbox";
import RadioButton from "./questions/RadioButton";
import ProgressionBar from "../../items/ProgressionBar";

export type FormDescription = Question[];

type Question = {
  id: string;
  title: string;
  type: "checkbox" | "radio";
  answers?: string[];
  correctAnswers: string[];
};

type Props = {
  formDescription: FormDescription;
  formStyle?: string;
  submitStyle?: string;
  questionStyle?: string;
  radioStyle?: string;
  checkboxStyle?: string;
  radioStyleField?: string;
  checkboxStyleField?: string;
  radioStyleLabel?: string;
  checkboxStyleLabel?: string;
};

const Form = ({
  formDescription,
  formStyle,
  submitStyle,
  questionStyle,
  radioStyle,
  checkboxStyle,
  radioStyleField,
  checkboxStyleField,
  radioStyleLabel,
  checkboxStyleLabel,
}: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = formDescription[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === formDescription.length - 1;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishForm = () => {
    alert("Vous avez répondues à toutes les questions.");
  };

  const initialValues: Record<string, string> = {};
  initialValues[currentQuestion.title] = "";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Réponses de l'utilisateur :", values);
          console.log("Réponses correctes :", currentQuestion);

          if (!isLastQuestion) {
            handleNextQuestion();
          } else {
            handleFinishForm();
          }

          setSubmitting(false);
        }, 500);
      }}
    >
      <FormikForm className={formStyle}>
        <ProgressionBar
          totalQuestions={formDescription.length}
          currentQuestionIndex={currentQuestionIndex}
        />
        <Fragment key={currentQuestionIndex}>
          <h2 className={questionStyle} id={`${currentQuestion.id}-title`}>
            {currentQuestion.title}
          </h2>

          <FieldGroup aria-labelledby={`${currentQuestion.id}-title`}>
            {currentQuestion.type === "checkbox"
              ? currentQuestion.answers?.map((answer, ansIndex) => (
                  <Checkbox
                    key={ansIndex}
                    id={`${currentQuestion.title}-${ansIndex}`}
                    name={currentQuestion.title}
                    value={answer}
                    label={answer}
                    style={checkboxStyle}
                    styleField={checkboxStyleField}
                    styleLabel={checkboxStyleLabel}
                  />
                ))
              : currentQuestion.answers?.map((answer, ansIndex) => (
                  <RadioButton
                    key={ansIndex}
                    id={`${currentQuestion.title}-${ansIndex}`}
                    name={currentQuestion.title}
                    value={answer}
                    label={answer}
                    style={radioStyle}
                    styleField={radioStyleField}
                    styleLabel={radioStyleLabel}
                  />
                ))}
          </FieldGroup>
        </Fragment>

        <div>
          {!isLastQuestion && (
            <button
              className={submitStyle}
              type="button"
              onClick={handleNextQuestion}
            >
              Suivant
            </button>
          )}
          {isLastQuestion && (
            <button
              className={submitStyle}
              type="submit"
              onClick={handleFinishForm}
            >
              Envoyez vos réponses
            </button>
          )}
        </div>
      </FormikForm>
    </Formik>
  );
};

export default Form;
