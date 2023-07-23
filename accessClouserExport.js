import { setX } from "./myModule";
import { getX } from "./closureCreator";

console.log(getX());
setX(2);
console.log(getX());
