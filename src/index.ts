import { CocaCreator } from "./CocaCreator";
import { FantaCreator } from "./FantaCreator";
import { Creator } from "./MainCreator";


function main(creator: Creator){
console.log(creator.imprimirSabor())
}

console.log("Coca: ");
main(new CocaCreator())


console.log("Fanta: ");
main(new FantaCreator())