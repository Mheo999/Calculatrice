//-----------PROJET CALCULATRICE ---------------
// choix de l'utilisateur
do {
    
    var choix = Number(prompt('Que souhaitez vous faire?\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n\n ---by Théo MAITRIAS---'));

} while (choix != 1 && choix != 2 && choix != 3 && choix != 4 );


// choix des chiffres/nombres
do {
    
    var premierNombre = Number(prompt('Entrez un chiffre/nombre '));
    var secondNombre = Number(prompt('Entrez à nouveau un chiffre/nombre '));

} while (isNaN(premierNombre) || isNaN(secondNombre));


// Fonction Addition
function addition(nombreA,nombreB){
    return nombreA + nombreB;
}

// Fonction Soustraction
function soustraction(nombreA,nombreB){
    return nombreA - nombreB;
}

// Fonction Multiplication
function multiplication(nombreA,nombreB){
    return nombreA * nombreB;
}
// Fonction Division
function division(nombreA,nombreB){
    if(nombreB == 0){
        throw new Error("Impossible de diviser par 0");
    }
    return nombreA / nombreB;
}


// Choisir sa fonction
try{
    switch(choix) {
        case 1:
            var resultat = addition(premierNombre,secondNombre);
            break;
        
        case 2:
            var resultat = soustraction(premierNombre,secondNombre);
            break;

        case 3:
            var resultat = multiplication(premierNombre,secondNombre);
            break;

        case 4:
            var resultat = division(premierNombre,secondNombre);
            break;

        default:
            throw new Error("Une erreur est survenue\n Vous devez choisir avec le chiffre présent devant la fonction")
    }

        alert("Le résultat est : " +resultat);

} catch(error){
    alert(error);
}