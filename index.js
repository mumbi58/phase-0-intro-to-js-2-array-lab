// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.length=0;

function destructivelyAppendCat(name){
    return cats.push(name);

}
(destructivelyAppendCat("Ralph"))

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat ("Bob");

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
destructivelyRemoveLastCat();

function appendCat(name){
    return [...cats, name];

}
appendCat('Broom');


function PrependCat(name){
    const newCats =[name, ...cats];
    return newCats;
}

function removeLastCat(name){
    return cats.slice (0, cats.length -1)
}

removeLastCat();
function removeFirstCat(){
    const cats2=cats.slice(1)
    return cats2
}