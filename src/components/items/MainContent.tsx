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
    {
      id: "question3",
      title:
        "3) Quel est le pourcentage de clubs sportifs qui se disent en capacité d’accueillir des personnes en situation de handicap ?",
      type: "radio",
      answers: ["A : 1,4%", "B : 14 %", "C : 28 %"],
      correctAnswers: ["A : 1,4%"],
    },
    {
      id: "question4",
      title:
        "4) Quel est le nom du programme créé par le Comité Paralympique et Sportif Français pour les clubs, qui souhaitent ouvrir leurs portes aux personnes en situation de handicap ?",
      type: "radio",
      answers: [
        "A : Sport pour tous",
        "B : Club inclusif",
        "C : Ensemble au sport",
      ],
      correctAnswers: ["B : Club inclusif"],
    },
    {
      id: "question5",
      title:
        "5) Quel est le nom du programme lancé par le Comité Paralympique et Sportif Français afin de détecter des personnes âgées de 16 à 35 ans qui auraient un potentiel de performance dans un ou plusieurs sports paralympiques ?",
      type: "radio",
      answers: ["A : La relève", "B : La quête", "C : Performance pour tous"],
      correctAnswers: ["A : La relève"],
    },
    {
      id: "question6",
      title:
        "6) Quelle fédération a la délégation pour organiser la pratique du rugby fauteuil ?",
      type: "radio",
      answers: [
        "A : La Fédération Française de Rugby",
        "B : La Fédération Française Handisport",
        "C : La Fédération Française des Sports Adaptés",
      ],
      correctAnswers: ["B : La Fédération Française Handisport"],
    },
    {
      id: "question7",
      title:
        "7) Que signifie le préfixe 'para' accompagnant les noms de certains sports ?",
      type: "radio",
      answers: ['A : "Paralympique"', 'B : "Pour tous"', 'C : "Parallèle"'],
      correctAnswers: ['C : "Parallèle"'],
    },
    {
      id: "question8",
      title:
        "8) En quelle année, la loi pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées apporte-t-elle un cadre législatif pour la pratique sportive des personnes en situation de handicap ?",
      type: "radio",
      answers: ["A : 1955", "B : 1975", "C : 2005"],
      correctAnswers: ["C : 2005"],
    },
    {
      id: "question9",
      title:
        "9) Sur les 22 sports présents aux jeux paralympiques, combien ont un équivalent aux jeux olympiques ?",
      type: "radio",
      answers: ["A : 18", "B : 20", "C : 22"],
      correctAnswers: ["B : 20"],
    },
    {
      id: "question10",
      title:
        "10) Sur les 22 sports présents aux jeux paralympiques, combien sont organisés à l'année par la Fédération Française Handisport ?",
      type: "radio",
      answers: ["A : 11", "B : 15", "C : 22"],
      correctAnswers: ["A : 11"],
    },
    {
      id: "question11",
      title:
        "11) Aux jeux paralympiques, les athlètes ayant un handicap mental peuvent participer aux épreuves de (plusieurs réponses possibles) :",
      type: "checkbox",
      answers: ["A : Natation", "B : Ping Pong", "C : Judo", "D : Athlétisme"],
      correctAnswers: ["A : Natation", "B : Ping Pong", "D : Athlétisme"],
    },
    {
      id: "question12",
      title:
        "12) Les anneaux olympiques sont également le symbole des jeux paralympiques.",
      type: "radio",
      answers: ["A : VRAI", "B : FAUX"],
      correctAnswers: ["B : FAUX"],
    },
    {
      id: "question13",
      title:
        "13) En quelle année ont eu lieu les premiers jeux paralympiques d'été ?",
      type: "radio",
      answers: ["A : 1950", "B : 1960", "C : 1970"],
      correctAnswers: ["B : 1960"],
    },
    {
      id: "question14",
      title:
        "14) Dans quel pays ont eu lieu les premiers jeux paralympiques d'hiver ?",
      type: "radio",
      answers: ["A : France", "B : Etats Unis", "C : Suède"],
      correctAnswers: ["C : Suède"],
    },
    {
      id: "question15",
      title:
        "15) En quelle année ont eu lieu les premiers jeux (Deaflympics) d'été pour les sourds ?",
      type: "radio",
      answers: ["A : 1904", "B : 1924", "C : 1944"],
      correctAnswers: ["A : 1904"],
    },
    {
      id: "question16",
      title:
        "16) Dans quelle ville ont eu lieu les premiers jeux (Deaflympics) d'été pour les sourds ?",
      type: "radio",
      answers: ["A : Paris", "B : Madrid", "C : New York"],
      correctAnswers: ["A : Paris"],
    },
    {
      id: "question17",
      title:
        "17) En quelle année ont eu lieu les premiers jeux (Global Virtus Game) d'été pour les personnes en situation de handicap mental ou psychique ?",
      type: "radio",
      answers: ["A : 1984", "B : 1994", "C : 2004"],
      correctAnswers: ["C : 2004"],
    },
    {
      id: "question18",
      title:
        "18) En quelle année la France a-t-elle accueilli les jeux (Global Virtus Game) d'été pour les personnes en situation de handicap mental ou psychique ?",
      type: "radio",
      answers: ["A : 2003", "B : 2013", "C : 2023"],
      correctAnswers: ["C : 2023"],
    },
    {
      id: "question19",
      title:
        "19) Combien de médailles d'or la France a-t-elle gagnée lors des Global Virtus Game d'été 2023, pour les personnes en situation de handicap mental ou psychique ?",
      type: "radio",
      answers: ["A : 48", "B : 88", "C : 128"],
      correctAnswers: ["B : 88"],
    },
    {
      id: "question20",
      title:
        "20) Les 'Invictus games' est le nom de la compétition internationale dédiée aux soldats et vétérans blessés ou en situation de handicap.",
      type: "radio",
      answers: ["A : VRAI", "B : FAUX"],
      correctAnswers: ["A : VRAI"],
    },
    {
      id: "question21",
      title:
        "21) En 2016, Frédéric Sausset est la première personne amputée des 4 membres à finir une célèbre course d'endurance, laquelle ?",
      type: "radio",
      answers: [
        "A : 6 Heures de Spa-Francorchamps",
        "B : 24 Heures du Mans",
        "C : Bol d'or",
      ],
      correctAnswers: ["B : 24 Heures du Mans"],
    },
    {
      id: "question22",
      title:
        "22) En 2021, Damien Seguin est le premier skippeur atteint de handicap à terminer le Vendée Globe, tour du monde à la voile en solitaire",
      type: "radio",
      answers: ["A : VRAI", "B : FAUX"],
      correctAnswers: ["A : VRAI"],
    },
    {
      id: "question23",
      title:
        "23) Quel est le sport de Sandrine Martinet, porte-drapeau de la France pour les jeux paralympiques de Tokyo 2021",
      type: "radio",
      answers: ["A : Para équitation", "B : Para judo", "C : Boccia"],
      correctAnswers: ["B : Para judo"],
    },
    {
      id: "question24",
      title:
        "24) Quel est le sport de Marie-Amélie Le Fur, présidente depuis 2018 du Comité Paralympique et Sportif Français (CPSF)",
      type: "radio",
      answers: [
        "A : Para Athlétisme",
        "B : Para Tennis de Table",
        "C : Volley Assis",
      ],
      correctAnswers: ["A : Para Athlétisme"],
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
        radioStyleLabel="ml-3"
        checkboxStyle="font-semibold mt-3"
        checkboxStyleLabel="ml-3"
      />
    </div>
  );
};

export default MainContent;
