import projet1 from '../assets/images/projet1.png';
import projet2 from '../assets/images/projet2.png';
import projet3 from '../assets/images/projet3.png';
import projet4 from '../assets/images/projet4.png';
import projet5 from '../assets/images/projet5.png';
import projet6 from '../assets/images/projet6.png';
import projet7 from '../assets/images/projet7.png';
import projet8 from '../assets/images/projet8.png';
import projet9 from '../assets/images/projet9.png';
import projet10 from '../assets/images/projet10.png';

export const projects = [
  {
    id: 1,
    title: "Création et requêtage d'une base de données immobilière",
    category: ["Base de données relationnelle"],
    description: "Création d'une base de données relationnelle pour stocker des informations immobilières, puis réalisation de requêtes SQL pour extraire des insights",
    image: projet1,
    tools: ["UML", "SQL", "IBM Db2", "Excel"],
    data: "Données immobilières publiques (DVF)",
    pdf: "/docs/projet-1/BD_Immobiliere.pdf",
    skills: [
      "Charger des données dans une base de données",
      "Créer des tables dans une base de données",
      "Créer le schéma d'une base de données",
      "Effectuer des requêtes SQL pour répondre à une question métier",
      "Mettre à jour un catalogue de données"
    ],
    criticalReflection: ""
  },
  {
    id: 2,
    title: "Analyses d'indicateurs RH",
    category: ["RGPD", "RH", "Data Cleaning", "Analyse exploratoire", "Visualisation"],
    description: "Analyse des indicateurs RH pour améliorer la gestion des ressources humaines",
    image: projet2,
    tools: ["ETL Knime", "Python"],
    data: "Données RH internes fictives",
    pdf: "/docs/projet-2/Soutenance_P7.pdf",
    skills: [
      "Collecter des données en respectant le RGPD",
      "Préparer des données pour l'analyse en respectant les normes internes à l'entreprise",
      "Transférer des données vers une zone de préparation"
    ],
    criticalReflection: ""
  },
  {
    id: 3,
    title: "Analyse des ventes d'une librairie",
    category: ["Analyse exploratoire", "Tests statistiques", "Visualisation"],
    description: "Analyser les ventes d'une librairie : chiffre d'affaires, produits performants/faibles, profils clients, comportements d'achat.",
    image: projet3,
    tools: ["Python", "Pandas", "Scikit-Learn", "Scipy", "Plotly"],
    data: "Données de ventes d'une entreprise fictive",
    pdf: "/docs/projet-3/Analyse_de_ventes.pdf",

    skills: [
      "Analyser des séries temporelles",
      "Réaliser une analyse bivariée pour interpréter des données",
      "Réaliser un test statistique"
    ],
    criticalReflection: ""
  },
  {
    id: 4,
    title: "Etude de santé publique",
    category: ["Data Cleaning", "Analyse exploratoire", "Visualisation"],
    description: "Établissement d'un panorama de l'état de la malnutrition dans le monde pour l'année 2017, en répondant à diverses questions.",
    image: projet4,
    tools: ["Python", "Pandas", "Plotly"],
    data: "FAO (https://www.fao.org/faostat/en/#data)",
    pdf: "/docs/projet-4/P4_Piekarec_Soutenance_sans_annexe.pdf",

    skills: [
      "Créer un environnement de développement",
      "Manipuler des DataFrames",
      "Utiliser des librairies spécialisées pour les traitements data"
    ],
    criticalReflection: ""
  },
  {
    id: 5,
    title: "Anticipation de besoins en consommation énergétique",
    category: ["Feature Engineering", "Apprentissage supervisé", "Optimisation de modèle", "Explicabilité du modèle"],
    description: "Prédiction des émissions de CO₂ et de la consommation totale d'énergie annuelle des bâtiments non résidentiels de Seattle, en se basant sur les données structurelles et les mesures préliminaires.",
    image: projet5,
    tools: ["Python", "Pandas", "Scikit-Learn", "Plotly"],
    data: "Seattle Data Portal (https://data.seattle.gov/dataset/2016-Building-Energy-Benchmarking/2bpz-gwpy)",
    pdf: "/docs/projet-5/Piekarec_Sophie_2_Presentation_062022.pdf",

    skills: [
      "Adapter les hyperparamètres d'un algorithme d'apprentissage supervisé afin de l'améliorer",
      "Évaluer les performances d'un modèle d'apprentissage supervisé",
      "Mettre en place le modèle d'apprentissage supervisé adapté au problème métier",
      "Transformer les variables pertinentes d'un modèle d'apprentissage supervisé"
    ],
    criticalReflection: ""
  },
  {
    id: 6,
    title: "Segmentation des clients d'un site e-commerce",
    category: ["Analyse exploratoire", "Feature engineering", "Clustering"],
    description: "Segmentation des clients d'un site e-commerce à partir de leurs comportements d'achat, en utilisant des techniques de clustering",
    image: projet6,
    tools: ["Python", "Pandas", "Plotly", "Scikit-Learn"],
    data: "OLIST (https://www.kaggle.com/olistbr/brazilian-ecommerce)",
    pdf: "/docs/projet-6/Segmentation_e_commerce.pdf",

    skills: [
      "Adapter les hyperparamètres d'un algorithme non supervisé afin de l'améliorer",
      "Évaluer les performances d'un modèle d'apprentissage non supervisé",
      "Transformer les variables pertinentes d'un modèle d'apprentissage non supervisé"
    ],
    criticalReflection: ""
  },
  {
    id: 7,
    title: "Analyse de données de systèmes éducatifs",
    category: ["Analyse exploratoire", "Visualisation"],
    description: "Analyse des performances des systèmes éducatifs à travers le monde.",
    image: projet7,
    tools: ["Python", "Pandas", "Plotly"],
    data: "Banque mondiale (https://datacatalog.worldbank.org/dataset/education-statistics)",
    pdf: "/docs/projet-7/Analyse_de_données_de_systèmes_éducatifs.pdf",

    skills: [
      "Effectuer une représentation graphique à l'aide d'une librairie Python adaptée",
      "Maîtriser les opérations fondamentales du langage Python pour la Data Science",
      "Manipuler des données avec des librairies Python spécialisées",
      "Utiliser un notebook Jupyter pour faciliter la rédaction du code et la collaboration",
      "Mettre en place un environnement Python"
    ],
    criticalReflection: ""
  },
  {
    id: 8,
    title: "Accès à l'eau potable dans le monde",
    category: ["Data Cleaning", "Visualisation"],
    description: "Analyse de l'accès à l'eau potable dans différents pays",
    image: projet8,
    tools: ["Python", "Tableau"],
    data: "FAO et OMS",
    tableau: "https://public.tableau.com/app/profile/sophie.piekarec/viz/OC_P8DrinkingWaterForAll/DrinkingWaterForAll",
    skills: [
      "Analyser un besoin client pour formuler des questions analytiques",
      "Créer un tableau de bord répondant à des questions analytiques",
      "Générer des graphiques adaptés aux types de données",
      "Synthétiser des résultats à destination d'un client"
    ],
    criticalReflection: ""
  },
  {
    id: 9,
    title: "Scoring bancaire",
    category: ["Data Cleaning", "Analyse exploratoire", "Feature Engineering", "Apprentissage supervisé", "Explicabilité du modèle"],
    description: "Développement d'un modèle de scoring bancaire pour évaluer la solvabilité des clients.",
    image: projet9,
    tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "LightGBM", "Streamlit", "FastAPI", "Plotly"],
    data: "Home Credit : https://www.kaggle.com/c/home-credit-default-risk/data",
    pdf: "/docs/projet-9/Implémentation_d_un_modele_de_scoring.pdf",
    github: "https://github.com/herospiki/OC",
    additionalLinks: [
      { url: "/docs/projet-9/Piekarec_Sophie_3_note_méthodologique_112022.pdf", label: "Note méthodologique" },
      { url: "/docs/projet-9/Piekarec_Sophie_3_dashboard_112022.pdf", label: "Déploiement" }
    ],
    skills: [
      "Déployer un modèle via une API dans le Web",
      "Réaliser un dashboard pour présenter son travail de modélisation",
      "Rédiger une note méthodologique afin de communiquer sa démarche de modélisation",
      "Utiliser un logiciel de version de code pour assurer l'intégration du modèle",
      "Présenter son travail de modélisation à l'oral",
      "Définir et mettre en œuvre une stratégie de suivi de la performance d'un modèle",
      "Définir et mettre en œuvre un pipeline d'entraînement des modèles",
      "Définir la stratégie d'élaboration d'un modèle d'apprentissage supervisé",
      "Évaluer les performances des modèles d'apprentissage supervisé"
    ],
    criticalReflection: ""
  },
  {
    id: 10,
    title: "Classification automatique de biens de consommation",
    category: ["Data Cleaning", "Analyse exploratoire", "Feature Engineering", "Apprentissage supervisé", "NLP", "Deep Learning"],
    description: "Réalisation d'une première étude de faisabilité d'un moteur de classification d'articles, basé sur une image et une description",
    image: projet10,
    tools: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "NLTK", "spaCy", "Plotly"],
    pdf: "/docs/projet-10/Piekarec_Sophie_6_presentation_0922022.pdf",

    skills: [
      "Prétraiter des données texte pour obtenir un jeu de données exploitable",
      "Représenter graphiquement des données à grandes dimensions",
      "Prétraiter des données image pour obtenir un jeu de données exploitable",
      "Mettre en œuvre des techniques de réduction de dimension",
      "Utiliser des techniques d'augmentation des données",
      "Définir la stratégie de collecte de données en recensant les API disponibles",
      "Définir la stratégie d'élaboration d'un modèle d'apprentissage profond",
      "Évaluer la performance des modèles d'apprentissage profond selon différents critères"
    ],
    criticalReflection: ""
  }
];
