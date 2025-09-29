
// 1.  Créer un objet voiture avec les propriétés marque, modele, annee et affiche-les.

    let voiture = {
        marque:'Toyota',
        modele:'A11',
        annee:2010,
    };
    console.log(`Marque:${voiture.marque}, Model:${voiture.modele}, ${voiture.annee}`);


    // 2.  À partir de l’objet voiture, affiche seulement la marque et l’année.
    console.log(`Marque:${voiture.marque}, ${voiture.annee}`);


    // 3.  Modifié l’année de la voiture et affiche l’objet mis à jour. 
    //--Modification de l'année de voiture avec la method de square brackets.
    voiture["annee"]=2002;
    console.log(` l'année aprés modification ${voiture.annee}`);


    // 4.  Ajoute une propriété couleur à l’objet voiture.
    voiture["annee"]=2002;

    // 5.  Supprime la propriété modele de l’objet voiture. 
    delete voiture.modele;

    

    