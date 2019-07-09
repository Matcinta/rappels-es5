var tab = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

tab.forEach(function (valeur) {
    console.log(valeur);
});

var lettreADansToutesLesVilles = function(element, index, tab) {
    return element.match('a');
}

console.log(tab.every(lettreADansToutesLesVilles));


var auMoinsUneVilleAvecUnTiret = function(element, index, tab){
    return element.match('-');
}
console.log(tab.some(auMoinsUneVilleAvecUnTiret));


var villesMajusculeSeTerminantParS = tab.filter(function (nomVille) {
    return nomVille.charAt(nomVille.length-1) === 's';
}).map(function(nomVille){
    return nomVille.toUpperCase();
});

console.log(villesMajusculeSeTerminantParS);

