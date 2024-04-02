interface Description {
    id: number;
    description: string;

}

export const descriptionSalon: Description[] = [
    {
        id: 1,
        description: "Plongez dans l'élégance et le raffinement au cœur du quartier Liberté avec notre salon de coiffure exclusif. Niché dans un cadre chaleureux et cosy, notre établissement vous offre une expérience unique où le style et le bien-être se rencontrent. Laissez-vous choyer par notre équipe de coiffeurs talentueux, experts dans les dernières tendances et techniques de coiffure. Que vous recherchiez une coupe moderne, une coloration audacieuse ou un simple rafraîchissement, notre salon est l'endroit idéal pour sublimer votre look. Nous mettons un point d'honneur à créer une atmosphère conviviale où chaque client se sent comme chez lui."
    }
]

export const descriptionService: Description[] = [
    {
        id: 1,
        description: "Découvrez une expérience de coiffure complète et personnalisée chez nous. Notre équipe passionnée vous offre des services de coiffure exceptionnels pour hommes, femmes et enfants. Que vous recherchiez une coupe tendance, une coloration vibrante ou une coiffure spéciale pour votre enfant, notre salon est l'adresse incontournable."
    }
]

interface Coiffeur {
    nom: string;
    description: string;
    img: string;
}
  
export   const listeCoiffeurs: Coiffeur[] = [
    {
      nom: "Gael",
      description: "Gael, le maître des tendances capillaires, apporte une touche moderne à chaque coupe. Sa vision audacieuse et son expertise en matière de style font de chaque rendez-vous un voyage unique dans le monde de la coiffure.",
      img: 'IMG_9666.PNG'
    },
    {
      nom: "Yollande",
      description: "Yollande, une véritable artiste de la coiffure, crée des looks personnalisés qui captivent et mettent en valeur la beauté unique de chaque client. Sa personnalité chaleureuse rend chaque séance agréable et relaxante.",
      img: 'IMG_9667.PNG'
    },
    {
      nom: "Tripescia",
      description: "Tripescia, experte en transformations capillaires, excelle dans la création de styles audacieux et expressifs. Sa polyvalence et sa compréhension approfondie des tendances en font une coiffeuse recherchée.",
      img: 'IMG_9669.PNG'
    },
];
  

export interface ProduitCapillaire {
    id: number;
    nom: string;
    description: string;
    prix: number;
    nombreEtoiles: number;
    image: string;
    slug: string;
    rating: number
    reviewCount: number
}

export const listeProduitsCapillaires: ProduitCapillaire[] = [
    { id: 1, nom: "Shampooing Nutri-Repair", description: "Répare et nourrit les cheveux secs", prix: 12.99, nombreEtoiles: 4.5, image: "../../IMG_9670.PNG", slug: "shampooing-nutri-repair", rating: 4, reviewCount: 150 },
    { id: 2, nom: "Après-shampooing Hydra-Silk", description: "Apporte une hydratation intense et rend les cheveux soyeux", prix: 15.99, nombreEtoiles: 4.2, image: "../../IMG_9677.PNG", slug: "apres-shampooing-hydra-silk", rating: 4, reviewCount: 256 },
    { id: 3, nom: "Masque Réparateur Intensif", description: "Répare en profondeur les cheveux abîmés", prix: 19.99, nombreEtoiles: 4.8, image: "../../IMG_9676.PNG", slug: "masque-reparateur-intensif", rating: 4, reviewCount: 34 },
    { id: 4, nom: "Spray Protecteur Thermique", description: "Protège les cheveux de la chaleur des appareils chauffants", prix: 14.99, nombreEtoiles: 4.3, image: "../../IMG_9675.PNG", slug: "spray-protecteur-thermique", rating: 4, reviewCount: 2540 },
    { id: 5, nom: "Sérum Lissant Anti-Frizz", description: "Dompte les frisottis et laisse les cheveux lisses", prix: 17.99, nombreEtoiles: 4.6, image: "../../IMG_9673.PNG", slug: "serum-lissant-anti-frizz", rating: 4, reviewCount: 34 },
    { id: 6, nom: "Gel Coiffant Tenue Forte", description: "Offre une tenue durable pour des coiffures élaborées", prix: 9.99, nombreEtoiles: 4.0, image: "../../IMG_9674.PNG", slug: "gel-coiffant-tenue-forte", rating: 4, reviewCount: 542 },
    { id: 7, nom: "Huile Capillaire Revitalisante", description: "Revitalise et nourrit les pointes sèches", prix: 22.99, nombreEtoiles: 4.7, image: "../../IMG_9678.PNG", slug: "huile-capillaire-revitalisante", rating: 4, reviewCount: 789 },
    { id: 8, nom: "Mousse Volumisante Sans Rinçage", description: "Donne du volume et de la texture aux cheveux fins", prix: 13.99, nombreEtoiles: 4.4, image: "../../IMG_9671.PNG", slug: "mousse-volumisante-sans-rincage", rating: 4, reviewCount: 10058 },
    { id: 9, nom: "Coloration Naturelle Longue Tenue", description: "Offre une couleur intense qui dure longtemps", prix: 16.99, nombreEtoiles: 4.9, image: "../../IMG_9672.PNG", slug: "coloration-naturelle-longue-tenue", rating: 4, reviewCount: 1925 },
    { id: 10, nom: "Eau de Parfum Capillaire Fraîcheur", description: "Parfume délicatement les cheveux avec une note fraîche", prix: 25.99, nombreEtoiles: 4.1, image: "../../IMG_9679.PNG", slug: "eau-de-parfum-capillaire-fraicheur", rating: 4, reviewCount: 2008 },
];


interface Commentaire {
   prenomClient: string;
   contenu: string;
 }
 
 export const commentairesSalon: Commentaire[] = [
   {
     prenomClient: "Abou",
     contenu: "Je suis ravi de ma nouvelle coupe chez Élégance Capillaire. Le coiffeur a compris exactement ce que je voulais, et le résultat est incroyable ! Un service professionnel et une ambiance chaleureuse."
   },
   {
     prenomClient: "Patrick",
     contenu: "Chaque visite chez Élégance Capillaire est une expérience exceptionnelle. Les coiffeurs sont talentueux et attentionnés. Je suis toujours satisfait du résultat et je recommande vivement ce salon !"
   },
   {
     prenomClient: "Oxana",
     contenu: "Élégance Capillaire est mon choix depuis des années. J'adore la créativité des coiffeurs et la qualité des produits utilisés. Toujours un plaisir de sortir avec une nouvelle coupe éblouissante !"
   },
   {
     prenomClient: "Laure",
     contenu: "Je suis une cliente fidèle de Élégance Capillaire. L'équipe est fantastique, l'atmosphère est relaxante, et je suis toujours impressionnée par le résultat. Merci pour l'excellent service !"
   },
   {
     prenomClient: "Hamid",
     contenu: "Élégance Capillaire est mon choix numéro un pour une coupe élégante. Le service est impeccable, le personnel est amical, et je ressors toujours satisfait. Merci pour votre professionnalisme !"
   },
 ];
 

