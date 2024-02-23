import { Formik, Form as FormikForm } from "formik";
import { Fragment } from "react";

import FieldGroup from "./FieldGroup";
import Checkbox from "./questions/Checkbox";
import RadioButton from "./questions/RadioButton";

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
  const initialValues: Record<string, string> = formDescription.reduce(
    (acc, question) => {
      acc[question.title] = "";
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Réponses de l'utilisateur:", values);
            console.log("Réponses correctes:", formDescription);

            const incorrectResponses: {
              question: string;
              correctAnswer: string;
            }[] = [];

            formDescription.forEach((question) => {
              if (question.type === "checkbox") {
                const userResponses = Object.entries(values)
                  .filter(([key, value]) => key === question.title && value)
                  .map(([key]) => key);

                console.log(
                  "Réponses de l'utilisateur pour",
                  question.title + ":",
                  userResponses,
                );
                console.log(
                  "Réponses correctes pour",
                  question.title + ":",
                  question.correctAnswers,
                );

                const isAnyCorrect = userResponses.some((response) =>
                  question.correctAnswers.includes(response),
                );

                if (!isAnyCorrect) {
                  incorrectResponses.push({
                    question: question.title,
                    correctAnswer: question.correctAnswers.join(", "),
                  });
                }
              } else {
                const userResponse = values[question.title];

                if (
                  userResponse &&
                  !question.correctAnswers.includes(userResponse)
                ) {
                  incorrectResponses.push({
                    question: question.title,
                    correctAnswer: question.correctAnswers.join(", "),
                  });
                }
              }
            });

            alert("Passage à la question suivante");

            setSubmitting(false);
          }, 500);
        }}
      >
        <FormikForm className={formStyle}>
          {formDescription.map((question, index) => {
            switch (question.type) {
              case "radio":
                return (
                  <Fragment key={index}>
                    <h2 className={questionStyle} id={`${question.id}-title`}>
                      {question.title}
                    </h2>

                    <FieldGroup aria-labelledby={`${question.id}-title`}>
                      {question.answers?.map((answer, ansIndex) => (
                        <RadioButton
                          key={ansIndex}
                          id={`${question.title}-${ansIndex}`}
                          name={question.title}
                          value={answer}
                          label={answer}
                          style={radioStyle}
                          styleField={radioStyleField}
                          styleLabel={radioStyleLabel}
                        />
                      ))}
                    </FieldGroup>
                  </Fragment>
                );

              case "checkbox":
                return (
                  <Fragment key={index}>
                    <h2 className={questionStyle} id={`${question.id}-title`}>
                      {question.title}
                    </h2>

                    <FieldGroup aria-labelledby={`${question.id}-title`}>
                      {question.answers?.map((answer, ansIndex) => (
                        <Checkbox
                          key={ansIndex}
                          id={`${question.title}-${ansIndex}`}
                          name={question.title}
                          value={answer}
                          label={answer}
                          style={checkboxStyle}
                          styleField={checkboxStyleField}
                          styleLabel={checkboxStyleLabel}
                        />
                      ))}
                    </FieldGroup>
                  </Fragment>
                );
            }
          })}

          <button className={submitStyle} type="submit">
            Suivant
          </button>
        </FormikForm>
      </Formik>
    </>
  );
};

export default Form;
