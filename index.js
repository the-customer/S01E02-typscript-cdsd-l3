//Type de retour de Fonction
// - Les fonctions avec type de retour
// - Les fonctions sans type de retour :
//      - void
//      - undefined
function testFunc_1() {
    console.log('Hi! from testFunc_1');
}
// Cette fonction va retourner undefined
// on peut l'ecrire de cette facon : 
// - avec undefined:
function testFunc_2() {
    console.log('Hi! from testFunc_2');
    return undefined;
}
//APPEL DE LA Fonction pour voir son retour
console.log(testFunc_1());
// - avec void :
function testFunc_3() {
    console.log('Hi! from testFunc_3');
}
console.log(testFunc_3());
console.log('--------');
//Fonction avec type de retour:
function testFunc_4() {
    return 'Hi! from testFunc_4';
}
console.log(testFunc_4());
console.log('--------');
//Le type Function
// Ex:
var my_function;
my_function = function () {
    console.log('Cette est une fonction');
};
my_function = function (a, b) {
    return a + b;
};
my_function = testFunc_2; //✅
// my_function = 1;  //❌ Erreur car la valeur 1 n'est pas une fonction
// console.log(typeof my_function);
// REMARQUE :
// Dans l'exemple qu'on vient de faire, my_function est une variable qui doit 
// recevoir une fonction mais le probleme est que on ne sait pas le type de retour de la fonction
// ni le nombre de parametres.
//Solution:
Rappel: 
// les methode pour definir une fonction :
// function hello_1(name:string){
//     console.log(`Hello ${name}! How are you?`);
// }
// let hello_2 = function (name:string){
//     console.log(`Hello ${name}! How are you?`);
// }
// let hello_3 = (name:string) => {
//     console.log(`Hello ${name}! How are you?`);
// }
var myCustomFunc;
myCustomFunc = function () {
    return 12;
};
// myCustomFunc = function():string{ //❌ Erreur car la valeur doit etre une fonction qui retourne un entier
//     return '12';
// }
var myCustomFunc_2;
// myCustomFunc_2 = function(x:number,r:number):number{
//     return x+r;
// }
// myCustomFunc_2(34,4);
console.log('----------------------CALLBACK--------------------');
// Parametre Callback:
// Un parametre de fonction peut avoir comme type une fonction cad qu'un parametre peut etre
// une fonction : on parle de CALLBACK
// Exemple:
//
function afficherNombre(nbr) {
    console.log(nbr);
}
function afficherNombre_2(nbr) {
    console.log("le nombre est : ".concat(nbr));
}
function somme(a, b, cb) {
    var som = a + b; // let som = 12 + 3
    cb(som); // afficherNombre(15)
}
somme(12, 3, afficherNombre);
somme(13, 34, afficherNombre_2);
console.log('----------------------Exemple--------------------');
function conversion(mnt, devise) {
    if (devise === '$') {
        return mnt / 500;
    }
    else if (devise === '€') {
        return mnt / 650;
    }
    return mnt;
}
function facture(coms) {
    console.log("Produits commandées : ");
    coms.forEach(function (c) {
        console.log("".concat(c.qte, " x ").concat(c.libelle, " de ").concat(c.prix, " ......... ").concat(c.prix * c.qte, " FCFA"));
    });
    console.log('Total : ???');
}
console.log(conversion(5000, '€'));
//
facture([{ libelle: 'Pizza', prix: 3000, qte: 2 }, { libelle: 'Burger', prix: 2000, qte: 1 }]);
