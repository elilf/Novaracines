// Base de données complète - 150 questions écologiques
const questionsDatabase = [
	// ===== ARBRES ET FORÊTS (30 questions) =====
	{
		id: 1,
		question: "Combien d'oxygène un arbre adulte produit-il par an ?",
		options: ["50 kg", "120 kg", "200 kg", "10 kg"],
		correctAnswer: 1,
		explanation: "Un arbre adulte produit environ 120 kg d'oxygène par an. C'est pour cela que les arbres sont si précieux pour notre planète !"
	},
	{
		id: 2,
		question: "Quel est l'arbre qui vit le plus longtemps ?",
		options: ["Le chêne", "Le sapin de Bristlecone", "L'if", "Le séquoia"],
		correctAnswer: 1,
		explanation: "Le sapin de Bristlecone peut vivre plus de 5000 ans. Certains individus sont parmi les êtres vivants les plus anciens de la Terre."
	},
	{
		id: 3,
		question: "Combien de temps faut-il pour qu'un arbre absorbe efficacement du CO₂ ?",
		options: ["1 an", "3 à 5 ans", "10 ans", "20 ans"],
		correctAnswer: 1,
		explanation: "Les jeunes arbres ont besoin de 3 à 5 ans pour établir un système racinaire robuste et absorber efficacement le CO₂."
	},
	{
		id: 4,
		question: "Quelle est la plus grande forêt du monde ?",
		options: ["Forêt du Congo", "Forêt amazonienne", "Taïga sibérienne", "Forêt boréale"],
		correctAnswer: 1,
		explanation: "La forêt amazonienne, couvrant environ 5,5 millions de km², est la plus grande forêt tropicale du monde."
	},
	{
		id: 5,
		question: "Un arbre produit-il plus d'oxygène que de CO₂ ?",
		options: ["Non, moins", "Oui, bien plus", "À peu près le même", "Cela dépend de l'espèce"],
		correctAnswer: 1,
		explanation: "Oui, un arbre absorbe le CO₂ et produit de l'oxygène en plus grande quantité grâce à la photosynthèse."
	},
	{
		id: 6,
		question: "Combien de temps faut-il pour qu'une forêt se régénère après une coupe ?",
		options: ["10 ans", "20-30 ans", "50-100 ans", "200+ ans"],
		correctAnswer: 2,
		explanation: "Une forêt tropicale peut prendre 50 à 100 ans ou plus pour se régénérer complètement après une coupe."
	},
	{
		id: 7,
		question: "Quel pourcentage de l'oxygène terrestre est produit par les forêts ?",
		options: ["30%", "50%", "70%", "90%"],
		correctAnswer: 0,
		explanation: "Les forêts produisent environ 30% de l'oxygène terrestre. Les océans en produisent environ 70%."
	},
	{
		id: 8,
		question: "Quelle est la profondeur moyenne des racines d'un arbre ?",
		options: ["1-2 mètres", "3-5 mètres", "10-15 mètres", "20+ mètres"],
		correctAnswer: 1,
		explanation: "Les racines d'un arbre vont généralement entre 3 et 5 mètres de profondeur, bien que certaines espèces aillent plus loin."
	},
	{
		id: 9,
		question: "Combien d'arbres sont coupés chaque minute dans le monde ?",
		options: ["1000", "5000", "15000", "30000"],
		correctAnswer: 3,
		explanation: "Environ 15 milliards d'arbres sont coupés chaque année, soit environ 30000 par minute."
	},
	{
		id: 10,
		question: "Quel type de forêt absorbe le plus de CO₂ ?",
		options: ["Forêt boréale", "Forêt tempérée", "Forêt tropicale", "Forêt méditerranéenne"],
		correctAnswer: 2,
		explanation: "Les forêts tropicales absorbent le plus de CO₂ en raison de leur croissance rapide et de leur biodiversité."
	},
	{
		id: 11,
		question: "Un arbre peut-il absorber du CO₂ aussi bien en hiver qu'en été ?",
		options: ["Oui, pareil", "Non, beaucoup moins", "Non, rien du tout", "C'est imprévisible"],
		correctAnswer: 1,
		explanation: "En hiver, les arbres feuillus arrêtent leur photosynthèse et absorbent beaucoup moins de CO₂."
	},
	{
		id: 12,
		question: "Quel est le plus grand arbre du monde par volume ?",
		options: ["Séquoia géant", "Cèdre du Liban", "Douglas géant", "Pin de Norfolk"],
		correctAnswer: 0,
		explanation: "Le séquoia géant est l'arbre le plus grand au monde par volume, avec le General Sherman qui pèse 2000 tonnes."
	},
	{
		id: 13,
		question: "Combien de litres d'eau un grand arbre absorbe-t-il par jour ?",
		options: ["50 litres", "200 litres", "1000 litres", "5000 litres"],
		correctAnswer: 2,
		explanation: "Un grand arbre peut absorber jusqu'à 1000 litres d'eau par jour par ses racines et les rejeter par ses feuilles."
	},
	{
		id: 14,
		question: "Les arbres urbains absorbent-ils du CO₂ efficacement ?",
		options: ["Non, pollution élevée", "Oui, malgré la pollution", "Impossible à dire", "Seulement les vieux arbres"],
		correctAnswer: 1,
		explanation: "Oui, les arbres urbains absorbent du CO₂ efficacement, même en présence de pollution."
	},
	{
		id: 15,
		question: "Quel est le rôle principal du liège sur un arbre ?",
		options: ["Stocker de l'eau", "Protéger de la chaleur et des parasites", "Aider à la photosynthèse", "Stocker des nutriments"],
		correctAnswer: 1,
		explanation: "Le liège protège l'arbre contre la chaleur extrême, la sécheresse et les parasites."
	},
	{
		id: 16,
		question: "Un arbre planté aujourd'hui aura-t-il un impact sur le climat dans 10 ans ?",
		options: ["Non, trop jeune", "Oui, impact limité mais réel", "Seulement s'il est grand", "Cela dépend de la région"],
		correctAnswer: 1,
		explanation: "Oui, même un jeune arbre absorbe du CO₂ efficacement après 3-5 ans, avec un impact réel sur le climat."
	},
	{
		id: 17,
		question: "Quelle est la durée de vie moyenne d'un arbre tempéré ?",
		options: ["20-50 ans", "50-100 ans", "100-300 ans", "300+ ans"],
		correctAnswer: 2,
		explanation: "Un arbre tempéré vit généralement entre 100 et 300 ans, selon l'espèce."
	},
	{
		id: 18,
		question: "Les racines des arbres peuvent-elles endommager les tuyauteries ?",
		options: ["Non, jamais", "Oui, en cherchant l'eau", "Seulement les vieux arbres", "Seulement près des routes"],
		correctAnswer: 1,
		explanation: "Oui, les racines peuvent endommager les tuyauteries en les fisssurant à la recherche d'eau."
	},
	{
		id: 19,
		question: "Un hectare de forêt peut absorber combien de CO₂ par an ?",
		options: ["1 tonne", "5 tonnes", "10-15 tonnes", "50 tonnes"],
		correctAnswer: 2,
		explanation: "Un hectare de forêt tempérée absorbe environ 10-15 tonnes de CO₂ par an."
	},
	{
		id: 20,
		question: "Quel type d'arbre pousse le plus vite ?",
		options: ["Bambou", "Eucalyptus", "Pin", "Peuplier"],
		correctAnswer: 1,
		explanation: "L'eucalyptus pousse très rapidement, atteignant une hauteur de 30-50 mètres en seulement 10-20 ans."
	},
	{
		id: 21,
		question: "Les arbres mortes continuent-elles d'absorber du CO₂ ?",
		options: ["Oui, un peu", "Non, plus du tout", "Seulement quelques mois", "Cela dépend de l'essence"],
		correctAnswer: 1,
		explanation: "Non, les arbres mortes ne font plus de photosynthèse. Elles commencent à libérer du CO₂ en se décomposant."
	},
	{
		id: 22,
		question: "Combien d'espèces d'arbres existe-t-il sur Terre ?",
		options: ["5000", "25000", "60000", "100000"],
		correctAnswer: 2,
		explanation: "Il existe environ 60000 espèces d'arbres connues sur Terre, dont beaucoup encore à découvrir."
	},
	{
		id: 23,
		question: "Un arbre en ville absorbe-t-il autant de CO₂ qu'en forêt ?",
		options: ["Oui, pareil", "Non, moins", "Non, plus", "C'est imprévisible"],
		correctAnswer: 1,
		explanation: "Un arbre en ville absorbe généralement moins de CO₂ qu'en forêt à cause de la pollution et des conditions moins idéales."
	},
	{
		id: 24,
		question: "Quel arbre peut vivre sans eau pendant plusieurs années ?",
		options: ["Le saule", "L'olivier", "Le baobab", "Le bouleau"],
		correctAnswer: 2,
		explanation: "Le baobab peut vivre sans eau pendant plusieurs années grâce à son tronc massif qui stocke l'eau."
	},
	{
		id: 25,
		question: "Les champignons mycorhiziens aident-ils les arbres ?",
		options: ["Non", "Oui, pour absorber l'eau", "Oui, pour absorber l'eau et les nutriments", "Seulement les champignons comestibles"],
		correctAnswer: 2,
		explanation: "Les champignons mycorhiziens créent une symbiose avec les racines des arbres et les aident à absorber l'eau et les nutriments."
	},
	{
		id: 26,
		question: "Un arbre peut-il guérir une blessure sur son tronc ?",
		options: ["Non", "Oui, complètement", "Oui, partiellement", "Seulement s'il est jeune"],
		correctAnswer: 2,
		explanation: "Un arbre peut guérir partiellement une blessure en formant un cal, mais ne peut pas se régénérer comme la peau humaine."
	},
	{
		id: 27,
		question: "Quelle est la largeur moyenne d'un cerne d'arbre ?",
		options: ["0,5 mm", "2 mm", "1 cm", "5 cm"],
		correctAnswer: 1,
		explanation: "Un cerne d'arbre a généralement une largeur de 1-3 mm par an, selon les conditions de croissance."
	},
	{
		id: 28,
		question: "Les forêts de pins absorbent-elles plus ou moins de CO₂ que les forêts de feuillus ?",
		options: ["Plus", "Moins", "Pareil", "Cela dépend de l'âge"],
		correctAnswer: 1,
		explanation: "Les forêts de feuillus absorbent généralement plus de CO₂ que les forêts de conifères."
	},
	{
		id: 29,
		question: "Un arbre peut-il communiquer avec d'autres arbres ?",
		options: ["Non", "Oui, par des signaux chimiques", "Seulement avec son espèce", "Par des signaux sonores"],
		correctAnswer: 1,
		explanation: "Oui, les arbres communiquent par des signaux chimiques et par le réseau mycorhizien souterrain, le 'Wood Wide Web'."
	},
	{
		id: 30,
		question: "Quel pourcentage des nouvelles plantations d'arbres survivent ?",
		options: ["50%", "70%", "85%", "95%"],
		correctAnswer: 0,
		explanation: "Malheureusement, seulement environ 50% des arbres nouvellement plantés survivent à leur premier an."
	},

	// ===== DÉFORESTATION (20 questions) =====
	{
		id: 31,
		question: "Quelle est la principale cause de la déforestation mondiale ?",
		options: ["Les incendies naturels", "L'agriculture intensive", "L'érosion du sol", "Le changement climatique"],
		correctAnswer: 1,
		explanation: "L'agriculture intensive, notamment l'élevage et la culture du soja, est responsable d'environ 80% de la déforestation."
	},
	{
		id: 32,
		question: "Combien de hectares de forêt disparaissent chaque année ?",
		options: ["100000 hectares", "5 millions de hectares", "10 millions de hectares", "50 millions de hectares"],
		correctAnswer: 2,
		explanation: "Environ 10 millions de hectares de forêt disparaissent chaque année dans le monde."
	},
	{
		id: 33,
		question: "Quel pourcentage de la forêt amazonienne a été déforestée depuis 1970 ?",
		options: ["10%", "20%", "35%", "50%"],
		correctAnswer: 2,
		explanation: "Environ 35% de la forêt amazonienne a été déforestée depuis 1970, principalement pour l'élevage et l'agriculture."
	},
	{
		id: 34,
		question: "La déforestation contribue-t-elle au changement climatique ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, la déforestation est responsable d'environ 10-15% des émissions mondiales de CO₂."
	},
	{
		id: 35,
		question: "Quel pays a la plus grande superficie de forêts restantes ?",
		options: ["Brésil", "Russie", "Canada", "Indonésie"],
		correctAnswer: 1,
		explanation: "La Russie possède environ 815 millions d'hectares de forêts, la plus grande superficie mondiale."
	},
	{
		id: 36,
		question: "La déforestation affecte-t-elle les populations autochtones ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "Seulement en Amazonie"],
		correctAnswer: 2,
		explanation: "Oui, la déforestation détruit les terres et les moyens de subsistance des populations autochtones qui dépendent des forêts."
	},
	{
		id: 37,
		question: "Combien de fois la surface des forêts tropicales s'est réduite ?",
		options: ["2 fois", "3 fois", "5 fois", "10 fois"],
		correctAnswer: 1,
		explanation: "La surface des forêts tropicales s'est réduite d'environ 2/3 depuis le début de l'industrialisation."
	},
	{
		id: 38,
		question: "La déforestation augmente-t-elle les risques d'inondation ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "Seulement en montagne"],
		correctAnswer: 2,
		explanation: "Oui, sans les arbres pour absorber l'eau, les risques d'inondation et d'érosion augmentent considérablement."
	},
	{
		id: 39,
		question: "Quel pourcentage de la biodiversité mondiale vit en forêt tropicale ?",
		options: ["20%", "40%", "60%", "80%"],
		correctAnswer: 2,
		explanation: "Environ 60-90% de la biodiversité mondiale vit dans les forêts tropicales."
	},
	{
		id: 40,
		question: "La plantation de monocultures peut-elle remplacer les forêts naturelles ?",
		options: ["Oui, c'est pareil", "Non, c'est moins bon", "Non, c'est bien pire", "Cela dépend"],
		correctAnswer: 2,
		explanation: "Non, les monocultures ne remplacent pas les forêts naturelles. Elles ne stockent pas autant de CO₂ et n'hébergent peu de biodiversité."
	},
	{
		id: 41,
		question: "Quel animal risque l'extinction à cause de la déforestation ?",
		options: ["L'éléphant", "L'orang-outan", "Le tigre", "Tous les trois"],
		correctAnswer: 3,
		explanation: "La déforestation menace de nombreuses espèces, y compris les orangs-outans, les tigres et les éléphants."
	},
	{
		id: 42,
		question: "La déforestation affecte-t-elle le cycle de l'eau ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "Seulement localement"],
		correctAnswer: 2,
		explanation: "Oui, les arbres jouent un rôle crucial dans le cycle de l'eau en évapotranspiration et infiltration."
	},
	{
		id: 43,
		question: "Quel pourcentage des terres agricoles sont utilisées pour l'élevage ?",
		options: ["20%", "40%", "60%", "80%"],
		correctAnswer: 2,
		explanation: "Environ 80% des terres agricoles mondiales sont utilisées pour l'élevage et la culture d'aliments pour bétail."
	},
	{
		id: 44,
		question: "La déforestation est-elle réversible rapidement ?",
		options: ["Oui, en quelques années", "Oui, en quelques décennies", "Difficile, très long", "Non, permanent"],
		correctAnswer: 2,
		explanation: "La régénération naturelle des forêts est très lente, prenant 50-100 ans ou plus."
	},
	{
		id: 45,
		question: "Combien d'espèces d'animaux disparaissent chaque jour à cause de la déforestation ?",
		options: ["10", "100", "137", "1000"],
		correctAnswer: 2,
		explanation: "Environ 137 espèces disparaissent chaque jour à cause de la déforestation et de la dégradation des habitats."
	},
	{
		id: 46,
		question: "La déforestation affecte-t-elle le secteur touristique ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "Seulement en Afrique"],
		correctAnswer: 2,
		explanation: "Oui, la déforestation détruit les destinations touristiques naturelles et réduit les revenus du tourisme."
	},
	{
		id: 47,
		question: "Quel type de déforestation est le plus courant ?",
		options: ["Coupe rase", "Coupe sélective", "Déboisement graduel", "Incendies"],
		correctAnswer: 0,
		explanation: "La coupe rase, où tous les arbres sont abattus, est la forme la plus destructrice et la plus courante."
	},
	{
		id: 48,
		question: "La reforestation compense-t-elle toujours la déforestation ?",
		options: ["Oui, toujours", "Oui, souvent", "Non, rarement", "C'est égal"],
		correctAnswer: 2,
		explanation: "Non, les projets de reforestation ne compensent pas toujours la perte de forêts naturelles."
	},
	{
		id: 49,
		question: "Quel secteur est responsable de la plus grande déforestation en Amazonie ?",
		options: ["Exploitation forestière", "Construction", "Élevage bovin", "Exploitation minière"],
		correctAnswer: 2,
		explanation: "L'élevage bovin est responsable de 80% de la déforestation en Amazonie."
	},
	{
		id: 50,
		question: "La déforestation contribue-t-elle aux zoonoses (maladies animales transmissibles) ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, la déforestation augmente le contact entre humains et animaux sauvages, favorisant la transmission de virus."
	},

	// ===== CHANGEMENT CLIMATIQUE (20 questions) =====
	{
		id: 51,
		question: "Quel gaz est le plus grand contributeur au changement climatique ?",
		options: ["Dioxyde d'azote", "Dioxyde de carbone", "Méthane", "Monoxyde de carbone"],
		correctAnswer: 1,
		explanation: "Le dioxyde de carbone (CO₂) est le gaz à effet de serre le plus important pour le changement climatique."
	},
	{
		id: 52,
		question: "De combien de degrés la température mondiale a-t-elle augmenté depuis 1900 ?",
		options: ["0,5°C", "1°C", "1,5°C", "2°C"],
		correctAnswer: 1,
		explanation: "La température mondiale a augmenté d'environ 1°C depuis le début du 20e siècle."
	},
	{
		id: 53,
		question: "Quel secteur émet le plus de CO₂ ?",
		options: ["Agriculture", "Énergie", "Industrie", "Transport"],
		correctAnswer: 1,
		explanation: "Le secteur de l'énergie (électricité, chauffage) est responsable d'environ 73% des émissions mondiales."
	},
	{
		id: 54,
		question: "Le changement climatique affecte-t-il les forêts ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique cause des sécheresses, des incendies et des changements de écosystèmes forestiers."
	},
	{
		id: 55,
		question: "Le changement climatique augmente-t-il le niveau des mers ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est stable"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique cause la fonte des glaciers et l'expansion thermique de l'eau, augmentant le niveau des mers."
	},
	{
		id: 56,
		question: "Quel pourcentage des émissions mondiales vient des transports ?",
		options: ["10%", "15%", "25%", "40%"],
		correctAnswer: 1,
		explanation: "Le transport routier, aérien et maritime représente environ 15% des émissions mondiales."
	},
	{
		id: 57,
		question: "Le méthane est-il plus puissant que le CO₂ ?",
		options: ["Non", "Oui, 25 fois plus", "Oui, 80 fois plus", "Oui, 400 fois plus"],
		correctAnswer: 2,
		explanation: "Le méthane est environ 80 fois plus puissant que le CO₂ pour piéger la chaleur sur 20 ans."
	},
	{
		id: 58,
		question: "Les vaches émettent-elles du méthane ?",
		options: ["Non", "Oui, une petite quantité", "Oui, énormément", "Seulement certaines races"],
		correctAnswer: 2,
		explanation: "Oui, les vaches émettent du méthane par leurs rots, contribuant énormément au changement climatique."
	},
	{
		id: 59,
		question: "Le permafrost libère-t-il du CO₂ en fondant ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le permafrost qui fond libère du carbone stocké depuis des milliers d'années, accélérant le changement climatique."
	},
	{
		id: 60,
		question: "Les énergies renouvelables peuvent-elles remplacer les énergies fossiles ?",
		options: ["Non, c'est impossible", "Oui, dans 50 ans", "Oui, dans 20-30 ans", "Oui, dès maintenant"],
		correctAnswer: 3,
		explanation: "Oui, les énergies renouvelables pourraient techniquement remplacer les énergies fossiles dès maintenant."
	},
	{
		id: 61,
		question: "Quel est le plus grand pollueur de CO₂ du monde ?",
		options: ["USA", "Chine", "Inde", "Russie"],
		correctAnswer: 1,
		explanation: "La Chine produit environ 30% des émissions mondiales de CO₂."
	},
	{
		id: 62,
		question: "Le changement climatique affecte-t-il les épidémies ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique favorise la propagation des maladies infectieuses en changeant les écosystèmes."
	},
	{
		id: 63,
		question: "Quel pourcentage de la population mondiale souffre déjà des effets du changement climatique ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 2,
		explanation: "Environ 50% de la population mondiale souffre déjà des conséquences du changement climatique."
	},
	{
		id: 64,
		question: "Le changement climatique est-il entièrement causé par l'homme ?",
		options: ["Non", "Oui, à 97%", "Oui, à 100%", "C'est imprévisible"],
		correctAnswer: 1,
		explanation: "97% des scientifiques climatiques s'accordent à dire que le changement climatique actuel est causé par l'homme."
	},
	{
		id: 65,
		question: "Quel est l'objectif de l'Accord de Paris sur le climat ?",
		options: ["Zéro émissions", "1°C de réchauffement", "1,5-2°C de réchauffement", "5°C de réchauffement"],
		correctAnswer: 2,
		explanation: "L'Accord de Paris vise à limiter le réchauffement climatique bien en dessous de 2°C, idéalement 1,5°C."
	},
	{
		id: 66,
		question: "Le changement climatique causera-t-il des guerres pour l'eau ?",
		options: ["Non", "Peut-être", "Oui, très probablement", "C'est certain"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique pourrait causer des conflits pour l'accès à l'eau douce dans le futur."
	},
	{
		id: 67,
		question: "Quel pourcentage des forêts peuvent tolérer le changement climatique actuel ?",
		options: ["90%", "70%", "50%", "30%"],
		correctAnswer: 3,
		explanation: "Seulement environ 30% des forêts existantes peuvent tolérer le changement climatique prévu."
	},
	{
		id: 68,
		question: "Le changement climatique affecte-t-il les pollinisateurs ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique affecte les pollinisateurs comme les abeilles, menaçant la production alimentaire."
	},
	{
		id: 69,
		question: "Quel est le coût économique du changement climatique non géré ?",
		options: ["5% du PIB", "10% du PIB", "20% du PIB", "50% du PIB"],
		correctAnswer: 2,
		explanation: "Le coût économique du changement climatique non géré pourrait atteindre 20% du PIB mondial."
	},
	{
		id: 70,
		question: "Les pays en développement souffrent-ils plus du changement climatique ?",
		options: ["Non, pareil", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les pays en développement souffrent disproportionnément du changement climatique qu'ils n'ont pas causé."
	},

	// ===== BIODIVERSITÉ (15 questions) =====
	{
		id: 71,
		question: "Combien d'espèces sont estimées sur Terre ?",
		options: ["5 millions", "8-10 millions", "50 millions", "100 millions"],
		correctAnswer: 1,
		explanation: "Il est estimé qu'il existe entre 8 et 10 millions d'espèces sur Terre, dont seulement 1,5 million ont été identifiées."
	},
	{
		id: 72,
		question: "Quel écosystème a la plus grande biodiversité ?",
		options: ["Forêt boréale", "Désert", "Forêt tropicale", "Toundra"],
		correctAnswer: 2,
		explanation: "Les forêts tropicales abritent plus de biodiversité que tous les autres écosystèmes réunis."
	},
	{
		id: 73,
		question: "Combien d'espèces disparaissent chaque jour ?",
		options: ["1-10", "50-100", "137", "1000"],
		correctAnswer: 2,
		explanation: "Environ 137 espèces disparaissent chaque jour, principalement à cause de la déforestation et du changement climatique."
	},
	{
		id: 74,
		question: "Les insectes sont-ils importants pour la biodiversité ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les insectes jouent un rôle crucial dans la pollinisation et la chaîne alimentaire."
	},
	{
		id: 75,
		question: "Quel pourcentage de la biodiversité est menacé d'extinction ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 1,
		explanation: "Environ 25% des animaux vertébrés et 40% des plantes sont menacés d'extinction."
	},
	{
		id: 76,
		question: "Les océans contiennent-ils plus de biodiversité que les terres ?",
		options: ["Non, moins", "Oui, plus", "C'est pareil", "C'est imprévisible"],
		correctAnswer: 1,
		explanation: "Oui, les océans abritent plus de biodiversité que tous les écosystèmes terrestres réunis."
	},
	{
		id: 77,
		question: "Quelle est la plus grande menace pour la biodiversité ?",
		options: ["Pollution", "Changement climatique", "Perte d'habitat", "Surexploitation"],
		correctAnswer: 2,
		explanation: "La perte d'habitat due à la déforestation est la plus grande menace pour la biodiversité."
	},
	{
		id: 78,
		question: "Les zones protégées sont-elles efficaces pour préserver la biodiversité ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les zones protégées sont très efficaces pour préserver la biodiversité quand elles sont bien gérées."
	},
	{
		id: 79,
		question: "Quel pourcentage des forêts tropicales reste inexploré ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 2,
		explanation: "Environ 50% des forêts tropicales restent inexplорées, cachant potentiellement des millions d'espèces inconnues."
	},
	{
		id: 80,
		question: "Les corridors écologiques aident-ils à préserver la biodiversité ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les corridors écologiques permettent aux espèces de migrer et de maintenir la diversité génétique."
	},
	{
		id: 81,
		question: "Combien de primates sont en danger d'extinction ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 2,
		explanation: "Environ 50% des espèces de primates sont en danger d'extinction."
	},
	{
		id: 82,
		question: "Les herbicides et pesticides nuisent-ils à la biodiversité ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les pesticides diminuent la biodiversité en tuant les insectes et contaminant les écosystèmes."
	},
	{
		id: 83,
		question: "Quel est le rôle des décomposeurs dans la biodiversité ?",
		options: ["Nourrir les prédateurs", "Recycler les nutriments", "Polliner les plantes", "Disperser les graines"],
		correctAnswer: 1,
		explanation: "Les décomposeurs (champignons, bactéries) recyclent les nutriments essentiels pour la biodiversité."
	},
	{
		id: 84,
		question: "Les migrations d'animaux sont-elles affectées par le changement climatique ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le changement climatique désynchronise la migration des animaux avec la disponibilité des ressources."
	},
	{
		id: 85,
		question: "Quel est le plus grand réseau de zones protégées du monde ?",
		options: ["Amazonie", "Afrique du Sud", "Australie", "Antarctique"],
		correctAnswer: 3,
		explanation: "L'Antarctique est complètement protégée par le Traité sur l'Antarctique, faisant du continent une zone protégée."
	},

	// ===== POLLUTION (15 questions) =====
	{
		id: 86,
		question: "Quelle est la principale source de pollution atmosphérique ?",
		options: ["Industries", "Transport routier", "Centrales électriques", "Agriculture"],
		correctAnswer: 2,
		explanation: "Le transport routier est responsable d'environ 40% de la pollution atmosphérique urbaine."
	},
	{
		id: 87,
		question: "Combien de microplastiques ingérons-nous chaque année ?",
		options: ["Aucun", "Quelques milligrammes", "Quelques grammes", "Plusieurs kilos"],
		correctAnswer: 2,
		explanation: "Nous ingérons environ 5-8 grammes de microplastiques par an, l'équivalent d'une carte de crédit."
	},
	{
		id: 88,
		question: "Quel pourcentage des plastiques finissent dans les océans ?",
		options: ["5%", "10%", "25%", "50%"],
		correctAnswer: 1,
		explanation: "Environ 10% des plastiques produits finissent dans les océans."
	},
	{
		id: 89,
		question: "Combien de temps pour que un sac plastique se dégrade ?",
		options: ["5 ans", "20 ans", "100-500 ans", "1000+ ans"],
		correctAnswer: 2,
		explanation: "Un sac plastique prend 100 à 500 ans pour se dégrader, jamais complètement."
	},
	{
		id: 90,
		question: "L'ozone est-il un polluant à la surface de la Terre ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, l'ozone au niveau du sol est un polluant dangereux qui endomme les poumons et les plantes."
	},
	{
		id: 91,
		question: "Quel est le plus gros contributeur à la pollution de l'eau douce ?",
		options: ["Industrie", "Agriculture", "Déchets urbains", "Transport"],
		correctAnswer: 1,
		explanation: "L'agriculture est responsable d'environ 70% de la pollution de l'eau douce via les engrais et pesticides."
	},
	{
		id: 92,
		question: "Combien de zones mortes existent dans les océans ?",
		options: ["10", "50", "500", "4000"],
		correctAnswer: 2,
		explanation: "Il existe environ 500 zones mortes (hypoxiques) dans les océans, creant des déserts marins."
	},
	{
		id: 93,
		question: "Le bruit affecte-t-il la vie marine ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, la pollution sonore des navires et installations pétrolières perturbe énormément la vie marine."
	},
	{
		id: 94,
		question: "Quel pourcentage des décharges finissent à l'océan ?",
		options: ["5%", "10%", "25%", "50%"],
		correctAnswer: 1,
		explanation: "Environ 10% des déchets mondiaux finissent dans les océans."
	},
	{
		id: 95,
		question: "Le plomb est-il encore un problème de pollution ?",
		options: ["Non, c'est résolu", "Oui, légèrement", "Oui, énormément", "Seulement en Afrique"],
		correctAnswer: 2,
		explanation: "Oui, la pollution au plomb affecte encore 900 millions de personnes, surtout dans les pays en développement."
	},
	{
		id: 96,
		question: "Les sacs plastiques réutilisables sont-ils meilleurs ?",
		options: ["Oui, un peu", "Oui, beaucoup", "Non, pareil", "C'est pire"],
		correctAnswer: 1,
		explanation: "Oui, un sac plastique réutilisable a généralement un impact environnemental plus faible après ~100 utilisations."
	},
	{
		id: 97,
		question: "Combien de litres d'eau sont pollués chaque année ?",
		options: ["1 milliard", "1 trillion", "1 quadrillion", "On ne sait pas"],
		correctAnswer: 3,
		explanation: "Il est difficile de quantifier, mais environ 2 milliards de personnes manquent d'eau douce potable."
	},
	{
		id: 98,
		question: "Les composés perfluorés (PFOA) sont-ils dangereux ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les PFOA sont des polluants très persistants liés au cancer et aux problèmes de fertilité."
	},
	{
		id: 99,
		question: "Quel pourcentage de la population mondiale respire un air pollué ?",
		options: ["25%", "50%", "75%", "90%"],
		correctAnswer: 1,
		explanation: "Environ 50% de la population mondiale respire un air dont la qualité est en dessous des normes de l'OMS."
	},
	{
		id: 100,
		question: "Les villes avec plus d'arbres ont-elles moins de pollution ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les arbres absorbent les polluants et réduisent la température urbaine, améliorant la qualité de l'air."
	},

	// ===== ÉNERGIES RENOUVELABLES (15 questions) =====
	{
		id: 101,
		question: "Quel pourcentage de l'énergie mondiale provient des énergies renouvelables ?",
		options: ["5%", "15%", "25%", "40%"],
		correctAnswer: 1,
		explanation: "Environ 15% de l'énergie mondiale provient des énergies renouvelables en 2023."
	},
	{
		id: 102,
		question: "Laquelle est la source d'énergie renouvelable la plus utilisée ?",
		options: ["Solaire", "Éolien", "Hydro-électrique", "Géothermique"],
		correctAnswer: 2,
		explanation: "L'hydro-électrique est la source d'énergie renouvelable la plus utilisée mondialement."
	},
	{
		id: 103,
		question: "Combien de panneaux solaires sont nécessaires pour alimenter une maison ?",
		options: ["5-10", "15-25", "30-50", "100+"],
		correctAnswer: 1,
		explanation: "Généralement 15-25 panneaux solaires sont nécessaires pour alimenter une maison moyenne."
	},
	{
		id: 104,
		question: "Quelle est la durée de vie d'un panneau solaire ?",
		options: ["5 ans", "15 ans", "25-30 ans", "50+ ans"],
		correctAnswer: 2,
		explanation: "Un panneau solaire a généralement une durée de vie de 25-30 ans, et produit 80% à la fin de sa vie."
	},
	{
		id: 105,
		question: "L'énergie géothermique peut-elle alimenter les villes ?",
		options: ["Non", "Oui, théoriquement", "Oui, déjà fait", "Seulement certaines régions"],
		correctAnswer: 3,
		explanation: "Oui, l'énergie géothermique alimente plusieurs villes, notamment en Islande et Nouvelle-Zélande."
	},
	{
		id: 106,
		question: "Quel est l'avantage principal de l'énergie éolienne ?",
		options: ["Gratuit", "Pas de CO₂", "Espace limité", "Bruit faible"],
		correctAnswer: 1,
		explanation: "L'avantage principal de l'énergie éolienne est qu'elle ne produit pas de CO₂ pendant l'exploitation."
	},
	{
		id: 107,
		question: "Combien d'emplois crée le secteur des énergies renouvelables ?",
		options: ["1 million", "5 millions", "12 millions", "50 millions"],
		correctAnswer: 2,
		explanation: "Le secteur des énergies renouvelables crée environ 12 millions d'emplois mondialement."
	},
	{
		id: 108,
		question: "L'énergie nucléaire est-elle considérée comme renouvelable ?",
		options: ["Non", "Oui, techniquement", "Oui, complètement", "C'est débattu"],
		correctAnswer: 3,
		explanation: "C'est débattu. Le nucléaire ne produit pas de CO₂ mais génère des déchets radioactifs."
	},
	{
		id: 109,
		question: "Quel pourcentage du coût d'une énergie renouvelable provient du stockage ?",
		options: ["5%", "15%", "30%", "60%"],
		correctAnswer: 1,
		explanation: "Le stockage d'énergie renouvelable représente environ 15% du coût total du système."
	},
	{
		id: 110,
		question: "Les batteries lithium-ion peuvent-elles stocker assez d'énergie ?",
		options: ["Non", "Oui, partiellement", "Oui, suffisamment", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les batteries lithium-ion peuvent stocker suffisamment d'énergie pour les véhicules électriques et les réseaux."
	},
	{
		id: 111,
		question: "L'énergie hydroélectrique affecte-t-elle les écosystèmes fluviaux ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les barrages hydroélectriques affectent énormément les écosystèmes fluviaux et les migrations de poissons."
	},
	{
		id: 112,
		question: "Combien d'énergie solaire frappe la Terre chaque jour ?",
		options: ["Plus que la consommation annuelle mondiale", "Égal à la consommation annuelle", "Moins que la consommation mensuelle", "C'est imprévisible"],
		correctAnswer: 0,
		explanation: "L'énergie solaire qui frappe la Terre en une heure dépasse la consommation annuelle mondiale d'énergie."
	},
	{
		id: 113,
		question: "Les énergies renouvelables sont-elles moins chères que les fossiles ?",
		options: ["Non", "Oui, pour le solaire", "Oui, pour l'éolien", "Oui, pour les deux"],
		correctAnswer: 3,
		explanation: "Oui, le solaire et l'éolien sont maintenant plus compétitifs que les énergies fossiles dans de nombreuses régions."
	},
	{
		id: 114,
		question: "Quel pourcentage du cobalt mondial est utilisé pour les batteries ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 1,
		explanation: "Environ 25% du cobalt mondial est utilisé pour les batteries rechargeables."
	},
	{
		id: 115,
		question: "L'hydrogène peut-il remplacer le pétrole ?",
		options: ["Non", "Oui, mais difficile", "Oui, probablement", "Oui, déjà fait"],
		correctAnswer: 2,
		explanation: "Oui, l'hydrogène vert (produit par électrolyse) pourrait probablement remplacer le pétrole à l'avenir."
	},

	// ===== ÉCOSYSTÈMES (15 questions) =====
	{
		id: 116,
		question: "Quel est le plus grand écosystème terrestre ?",
		options: ["Désert", "Toundra", "Taïga", "Forêt tropicale"],
		correctAnswer: 2,
		explanation: "La taïga (forêt boréale) est le plus grand écosystème terrestre par superficie."
	},
	{
		id: 117,
		question: "Les zones humides sont-elles importantes pour l'écologie ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les zones humides abritent 40% des espèces avec seulement 6% des terres."
	},
	{
		id: 118,
		question: "Quel est le rôle des récifs coralliens ?",
		options: ["Décoration", "Habitat pour 25% des poissons", "Barrière contre les tempêtes", "Tous les trois"],
		correctAnswer: 3,
		explanation: "Les récifs coralliens abritent 25% des poissons, sont des habitats crucial et protègent contre les tempêtes."
	},
	{
		id: 119,
		question: "Quel pourcentage des récifs coralliens est menacé de disparition ?",
		options: ["25%", "50%", "75%", "95%"],
		correctAnswer: 2,
		explanation: "Environ 75% des récifs coralliens mondiaux sont menacés de disparition à cause du changement climatique."
	},
	{
		id: 120,
		question: "Le blanchiment corallien est-il causé par la température ?",
		options: ["Non", "Oui, légèrement", "Oui, principalement", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, le blanchiment corallien est principalement causé par l'augmentation de la température de l'eau."
	},
	{
		id: 121,
		question: "Quel pourcentage des plantes amazonienne ont des propriétés médicinales ?",
		options: ["10%", "25%", "50%", "75%"],
		correctAnswer: 1,
		explanation: "Environ 25% des plantes amazoniennes ont des propriétés médicinales, dont peu sont explorées."
	},
	{
		id: 122,
		question: "Les mangroves sont-elles importantes pour l'écologie marine ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les mangroves abritent de nombreuses espèces marines et côtières, et stockent du carbone."
	},
	{
		id: 123,
		question: "Quel est l'écosystème souterrain le plus important ?",
		options: ["Grottes", "Réseau mycorhizien", "Aquifères", "Minéraux"],
		correctAnswer: 1,
		explanation: "Le réseau mycorhizien souterrain est crucial pour la nutrition des plantes et la communauté microbienne."
	},
	{
		id: 124,
		question: "Les prairies stockent-elles du carbone ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les prairies stockent 1/3 du carbone terrestre dans les sols."
	},
	{
		id: 125,
		question: "Quel est le plus grand lac d'eau douce du monde ?",
		options: ["Lac Baïkal", "Grand Lac", "Lac Tanganyika", "Lac Victoria"],
		correctAnswer: 0,
		explanation: "Le Lac Baïkal en Russie est le plus grand lac d'eau douce du monde par volume."
	},
	{
		id: 126,
		question: "Les spéléothèmes (stalactites) se forment comment ?",
		options: ["Cristallisation du sel", "Gouttes de calcaire", "Dépôts minéraux", "Cristallisation de l'eau"],
		correctAnswer: 1,
		explanation: "Les spéléothèmes se forment par le dépôt de calcaire transporté par l'eau s'égouttant lentement."
	},
	{
		id: 127,
		question: "Les tourbières sont-elles importants pour le climat ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les tourbières stockent deux fois plus de carbone que toutes les forêts réunies."
	},
	{
		id: 128,
		question: "Quel pourcentage des eaux côtières sont saines ?",
		options: ["25%", "50%", "75%", "90%"],
		correctAnswer: 0,
		explanation: "Seulement environ 25% des eaux côtières mondialement sont considérées comme saines."
	},
	{
		id: 129,
		question: "L'écosystème souterrain a-t-il autant de biodiversité que la surface ?",
		options: ["Non, moins", "Oui, pareil", "Oui, plus", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, l'écosystème souterrain contient plus de biodiversité que la surface, selon les scientifiques."
	},
	{
		id: 130,
		question: "Quel est le plus long fleuve du monde ?",
		options: ["Amazone", "Nil", "Yangtsé", "Mississippi"],
		correctAnswer: 1,
		explanation: "Le Nil en Afrique est le plus long fleuve du monde avec 6650 km."
	},

	// ===== CONSERVATION (20 questions) =====
	{
		id: 131,
		question: "Quel est le but principal des parcs nationaux ?",
		options: ["Tourisme", "Protection de la nature", "Exploitation des ressources", "Résidence"],
		correctAnswer: 1,
		explanation: "Le but principal des parcs nationaux est de protéger la nature et la biodiversité."
	},
	{
		id: 132,
		question: "Combien d'animaux sont sauvés par les programmes de reproduction en captivité ?",
		options: ["Quelques", "Centaines", "Milliers", "Dizaines de milliers"],
		correctAnswer: 3,
		explanation: "Les programmes de reproduction en captivité ont sauvé des dizaines de milliers d'animaux de l'extinction."
	},
	{
		id: 133,
		question: "La réintroduction d'espèces fonctionne-t-elle ?",
		options: ["Non", "Oui, 25% de succès", "Oui, 50% de succès", "Oui, 75%+ de succès"],
		correctAnswer: 2,
		explanation: "Environ 50% des projets de réintroduction d'espèces sont considérés comme réussis."
	},
	{
		id: 134,
		question: "Quel animal a été sauvé de l'extinction par les réserves ?",
		options: ["Panda géant", "Loup gris", "Bison américain", "Tous les trois"],
		correctAnswer: 3,
		explanation: "Tous ces animaux ont été sauvés de l'extinction grâce aux réserves et programmes de conservation."
	},
	{
		id: 135,
		question: "Combien de kilomètres carrés de zones protégées existent ?",
		options: ["5 millions", "15 millions", "30 millions", "50 millions"],
		correctAnswer: 1,
		explanation: "Environ 15 millions de km² de zones terrestres et marines sont maintenant protégées."
	},
	{
		id: 136,
		question: "Les banques de graines aident-elles à conserver les espèces ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les banques de graines comme Svalbard Global Seed Vault conservent la diversité génétique des cultures."
	},
	{
		id: 137,
		question: "L'écotourisme peut-il financer la conservation ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, l'écotourisme génère des milliards de dollars pour financer la conservation."
	},
	{
		id: 138,
		question: "Les populations autochtones protègent-elles mieux les forêts ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les terres gérées par les populations autochtones ont une déforestation 2-3 fois plus faible."
	},
	{
		id: 139,
		question: "Les certifications environnementales fonctionnent-elles ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 1,
		explanation: "Partiellement, certifications comme FSC aident mais ne sont pas parfaites."
	},
	{
		id: 140,
		question: "La restauration des écosystèmes est-elle coûteuse ?",
		options: ["Très cher", "Cher", "Moins cher que la perte", "Gratuit"],
		correctAnswer: 2,
		explanation: "La restauration coûte moins cher que de laisser s'aggraver la dégradation."
	},
	{
		id: 141,
		question: "Quel pourcentage de l'eau douce mondiale est utilisée pour l'agriculture ?",
		options: ["30%", "50%", "70%", "90%"],
		correctAnswer: 2,
		explanation: "Environ 70% de l'eau douce mondiale est utilisée pour l'agriculture."
	},
	{
		id: 142,
		question: "Les pratiques agricoles durables peuvent-elles nourrir le monde ?",
		options: ["Non", "Oui, partiellement", "Oui, complètement", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, l'agriculture durable pourrait nourrir 10 milliards de personnes."
	},
	{
		id: 143,
		question: "Quelle est la plus grande réserve marine du monde ?",
		options: ["Australie", "Polynésie", "Antarctique", "Nouvelle-Zélande"],
		correctAnswer: 2,
		explanation: "L'Antarctique est protégée par le Traité sur l'Antarctique, faisant du continent une zone protégée."
	},
	{
		id: 144,
		question: "Les compensations carbone aident-elles vraiment ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est débattu"],
		correctAnswer: 3,
		explanation: "C'est débattu. Les compensations carbone peuvent aider mais ne remplacent pas la réduction des émissions."
	},
	{
		id: 145,
		question: "Combien de traités environnementaux internationaux existent ?",
		options: ["10", "50", "200", "500+"],
		correctAnswer: 3,
		explanation: "Il existe plus de 500 traités environnementaux internationaux, dont Kyoto et Paris."
	},
	{
		id: 146,
		question: "Quel pourcentage des terres dégradées peuvent être restaurées ?",
		options: ["25%", "50%", "75%", "90%"],
		correctAnswer: 2,
		explanation: "Environ 75% des terres dégradées peuvent techniquement être restaurées."
	},
	{
		id: 147,
		question: "Les couloirs verts urbains aident-ils à la biodiversité ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, les couloirs verts urbains (parcs, jardins) augmentent la biodiversité urbaine."
	},
	{
		id: 148,
		question: "Quel est le coût de l'inaction sur l'environnement ?",
		options: ["1% du PIB", "5% du PIB", "10% du PIB", "20%+ du PIB"],
		correctAnswer: 3,
		explanation: "Le coût de l'inaction sur l'environnement pourrait être 20% du PIB mondial."
	},
	{
		id: 149,
		question: "Les jeunes s'engagent-ils plus pour l'environnement ?",
		options: ["Non", "Oui, légèrement", "Oui, énormément", "C'est imprévisible"],
		correctAnswer: 2,
		explanation: "Oui, la jeunesse mondiale s'engage de plus en plus pour l'environnement."
	},
	{
		id: 150,
		question: "Novaracines contribue-t-il à la reforestation ?",
		options: ["Non", "Oui, un peu", "Oui, énormément", "C'est le but !"],
		correctAnswer: 3,
		explanation: "Oui ! Novaracines plante des arbres et sensibilise les gens à l'importance de la reforestation. Merci de participer ! 🌱"
	}
];

// Exporter la base de données
if (typeof module !== 'undefined' && module.exports) {
	module.exports = questionsDatabase;
}
