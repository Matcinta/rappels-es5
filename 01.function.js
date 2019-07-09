console.log("01 - Fonctions");

var nb1 = 10;
var nb2 = 20;

function additionner(nb1, nb2){
    return nb1 + nb2;
}

var resultat1 = additionner(nb1, nb2);
console.log('resultat1 = ' + resultat1);


var somme = additionner(nb1, nb2);

var resultat2 = somme;
console.log('resultat2 = ' + resultat2);

var multiplication = function(nb1, nb2){
    return nb1 * nb2;
}

var resultat3 = multiplication;
console.log('resultat3 = ' + resultat3(nb1, nb2));


var soustraction = function(nb1, nb2){
    return nb1 - nb2;
}



var afficherOperation = function(nomOperation, operation, nb1, nb2){
    var resultat4 = operation;
    return console.log(nomOperation + ' (' + nb1 + ',' + nb2 +') = ' + resultat4)
}

var resultat4 = afficherOperation('somme', additionner(20, 40), 20, 40);
var resultat5 = afficherOperation('multiplication', multiplication(10, 20), 10, 20);
var resultat5 = afficherOperation('soustraction', soustraction(15, 5), 15, 5);

