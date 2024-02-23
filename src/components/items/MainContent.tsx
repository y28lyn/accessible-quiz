import Form, { type FormDescription } from "../qcm/form/Form";

type MainProps = {
  imgSrc: string;
};

const MainContent = ({ imgSrc }: MainProps) => {
  const formDescription: FormDescription = [
    {
      id: "question1",
      title:
        "1) Pour quelles familles de handicap, la Fédération Française Handisport organise-t-elle des compétitions ?",
      type: "checkbox",
      answers: [
        "A : Handicap Moteur",
        "B : Handicap Visuel",
        "C : Handicap Auditif",
        "D : Handicap Mental",
        "E : Handicap Psychique",
      ],
      correctAnswers: [
        "A : Handicap Moteur",
        "B : Handicap Visuel",
        "C : Handicap Auditif",
      ],
    },
    {
      id: "question2",
      title:
        "2) Quel est le nom de la plateforme permettant de choisir un sport pour les personnes en situation de handicap ?",
      type: "radio",
      answers: [
        "A : Guide des parasports",
        "B : Annuaire des handisports",
        "C : Handiguide des sports",
      ],
      correctAnswers: ["C : Handiguide des sports"],
    },
  ];

  return (
    <div className="p-6 flex flex-col md:flex-row items-center">
      <img
        src={imgSrc}
        alt=""
        role="presentation"
        className="w-[90%] md:w-1/3 h-[30vh] md:h-[75vh] object-cover rounded shadow-md"
      />
      <Form
        formDescription={formDescription}
        formStyle="p-6 w-fit flex flex-col gap-4 rounded text-[#0B3168]"
        submitStyle="bg-[#0B3168] text-white rounded hover:scale-105 duration-200 w-60 p-3"
        questionStyle="font-bold text-xl mb-2"
        radioStyle="font-semibold mt-3"
        checkboxStyle="font-semibold mt-3"
        checkboxStyleLabel="ml-3"
      />
    </div>
  );
};

export default MainContent;
