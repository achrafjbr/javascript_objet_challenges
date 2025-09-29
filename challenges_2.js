// 1.  Crée un objet etudiant avec les propriétés nom, age, et une méthode
// sePresenter() qui affiche : "Bonjour, je m’appelle [nom] et j’ai [age] ans."

let etudiant = {
  nom: "Achraf",
  age: 21,
  sePresenter: function () {
    return `Bonjour, je m’appelle ${this.nom} et j’ai ${this.age} ans`;
  },
};

console.log(etudiant.sePresenter());

// 2.  Créer un objet personne et affiche toutes ses clés et valeurs avec une boucle for...in.
let personne = {
  nom: "Achraf",
  age: 21,
  specialité: "Computer sience",
};

for (const key in personne) {
  let value = personne[key];
  console.log(`Clé : ${key}, Valeur : ${value}`);
}

// 3. Crée un objet classe qui contient une propriété etudiants (un tableau de noms).
// Ajoutez une méthode afficherEtudiants() qui affiche chaque étudiant.

let classe = {
  etudiants: {
    noms: ["Achraf", "Jamal", "Ibrahim", "Salma", "Laila"],
  },
  afficherEtudiants: function afficherEtudiants() {
    let noms = classe.etudiants.noms;
    for (let index = 0; index < noms.length; index++) {
      console.log(`Nom: ${noms[index]}`);
    }
  },
};
console.log(classe.afficherEtudiants());

// 4.  Créer un tableau livres contenant 3 objets  { titre, auteur, annee }.
// Affiche seulement les titres avec une boucle.

let livres = [
  {
    titre: "L'enfance",
    auteur: "Salam mousa",
    annee: "1923",
  },
  {
    titre: "El gharib",
    auteur: "Albert kami",
    annee: "1982",
  },
  {
    titre: "la double crime",
    auteur: "AKATA KTISTI",
    annee: "1932",
  },
];

for (let index = 0; index < livres.length; index++) {
  console.log(`Le titre : ${livres[index].titre}`);
}

// 5.  Dans le tableau livres, écris une fonction trouverLivre(titre) qui retourne l’objet correspondant.

function trouverLivre(titre) {
  for (let index = 0; index < livres.length; index++) {
    if (livres[index].titre == titre) {
      return livres[index];
    }
  }
}

console.log(trouverLivre("la double crime"));
