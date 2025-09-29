//1.  Créer un objet entreprise qui contient un objet adresse (rue, ville, codePostal). Affiche la ville.

let entreprise = {
  addresse: {
    rue: "12 saint pierre",
    ville: "Paris",
    codePostal: "75300",
  },
};
console.log(`La ville est : ${entreprise.addresse.ville}`);

//2. - Créer un tableau produits d’objets { nom, prix, quantite }.
// - Affiche la valeur totale en stock (prix * quantite pour chaque produit).

let produitsArray = [
  {
    nom: "Arial",
    prix: "100",
    quantite: "10",
  },
  {
    nom: "chocolate",
    prix: "29",
    quantite: "100",
  },
  {
    nom: "succer",
    prix: "120",
    quantite: "300",
  },
  {
    nom: "lemonad",
    prix: "10",
    quantite: "200",
  },
];
let stock = 0;
for (let index = 0; index < produitsArray.length; index++) {
  stock = produitsArray[index].prix * produitsArray[index].quantite;
}
console.log('la valeur totale en stock', stock);

//  Créer une classe Animal avec les propriétés nom, type et une méthode parler(). 
// Puis crée une instance chien.

class Animal{
    constructor(nom,type){
        this.nom=nom;
        this.type=type;
    }
    parler(){}
}

let chien = new Animal('cat','chiwawa');

// 4.  Dans un tableau employes, trouve tous ceux qui ont un salaire > 3000. 

let employes = [
    {
        nom:'Nasrdin',
        salaire : 2000,
    },{
        nom:'Achraf',
        salaire : 20000,
    },
    {
        nom:'Ahmed',
        salaire : 5000,
    }
]
for (let index = 0; index < employes.length; index++) {
    if(employes[index].salaire>3000)
        console.log( employes[index]);
}

// 5. Créer une fonction cloner(obj) qui retourne une copie de l’objet donné.
    function cloner(obj){
        let objCopier = obj;
        return objCopier;
    }
console.log('Copie d objet ', cloner(entreprise));
