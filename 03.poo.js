function Personne (nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function() {
        return this.nom + ' '+ this.prenom + ' '+ this.pseudo;
    }

    this.getInitiales = function () {
        var initiales = this.nom.charAt(0) + this.prenom.charAt(0);
       return initiales.toUpperCase();
    }
    
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());


var afficherPersonne = function (personne) {
    console.log(personne.nom + '\n' + personne.prenom + '\n' + personne.pseudo + '\n' + personne.getNomComplet());
}


afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

Personne.prototype.age = 'NON RENSEIGNE';
console.log('age = '+ jules.age);
console.log('----------------------------');

jules.age = 25;
console.log(jules.age);

console.log(jules.getNomComplet());
console.log('----------------------------');
jules.age = 30;
console.log(jules.age);

console.log(jules.getInitiales());

console.log('----------------------------');


var robert = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + ' '+ this.prenom + ' '+ this.pseudo;
    }
};

afficherPersonne(robert);

console.log('----------------------------');
function Client (nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function () {
        return this.numeroClient + ' '+ this.nom + ' '+ this.prenom;
    }
    
}

var steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');

afficherPersonne(steve);

console.log(steve.numeroClient);
console.log('----------------------------');
console.log(steve.getInfos());