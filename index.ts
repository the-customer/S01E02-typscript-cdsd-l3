//Type de retour de Fonction
// - Les fonctions avec type de retour
// - Les fonctions sans type de retour :
//      - void
//      - undefined



function testFunc_1(){
    console.log('Hi! from testFunc_1');
}
// Cette fonction va retourner undefined
// on peut l'ecrire de cette facon : 
// - avec undefined:
function testFunc_2(): undefined{
    console.log('Hi! from testFunc_2');
    return undefined;
}
//APPEL DE LA Fonction pour voir son retour
console.log(testFunc_1());
// - avec void :
function testFunc_3(): void{
    console.log('Hi! from testFunc_3');
}

console.log(testFunc_3());
console.log('--------');
//Fonction avec type de retour:
function testFunc_4():string{
    return 'Hi! from testFunc_4';
}
console.log(testFunc_4());

console.log('--------');
//Le type Function
// Ex:

let my_function: Function;

my_function = function(){ //affectation de foncton anonyme
    console.log('Cette est une fonction')
}

my_function = function(a:number,b:number):number{
    return a+b;
}

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




let myCustomFunc: () => number;

myCustomFunc = function():number{
    return 12;
}

// myCustomFunc = function():string{ //❌ Erreur car la valeur doit etre une fonction qui retourne un entier
//     return '12';
// }

let myCustomFunc_2: (a:number,b:number)=> number;

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
function afficherNombre(nbr:number): void{
    console.log(nbr);
}

function afficherNombre_2(nbr:number): void{
    console.log(`le nombre est : ${nbr}`);
}

function somme(a:number,b:number,cb:Function):void{
    let som = a + b; // let som = 12 + 3
    cb(som); // afficherNombre(15)
}


somme(12,3, afficherNombre);
somme(13,34, afficherNombre_2);
console.log('----------------------Exemple--------------------');
// Exemple 2:
type Commande = {
    libelle: string,
    prix:number,
    qte:number
};

function conversion(mnt:number,devise:'$'|'€'|'cfa'):number{
    if(devise === '$'){
        return mnt / 500;
    }else if(devise === '€'){
        return mnt / 650;
    }
    return mnt;
}

function facture(coms:Commande[]):void{
    console.log("Produits commandées : ");
    coms.forEach(c => {
        console.log(`${c.qte} x ${c.libelle} de ${c.prix} ......... ${c.prix * c.qte} FCFA`)
    });
    console.log('Total : ???');
    
}

console.log(conversion(5000,'€'));
//
const commandes = [
    {libelle:'Pizza',prix:3000,qte:2},
    {libelle:'Burger',prix:2000,qte:1}
];
facture(commandes);
