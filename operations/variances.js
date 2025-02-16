//imports
import { listElements } from "../operation.js";
import { avg } from "./average.js";

export let varianceP = 0;
export let varianceM = 0;
//functions

//population
export function variancePolation(){
    let sum = 0;
    listElements.forEach(element=> {
        sum += (Number(element) - avg)**2;
    });
    
    varianceP = sum / listElements.length;
    console.log(listElements.length);
    console.log("varianza population:" +varianceP.toFixed(2));
    return varianceP.toFixed(2);
}
//sample
export function varianceSample(){
    let sum = 0;
    listElements.forEach(element => {
        sum += (Number(element) - avg) ** 2;
    });
    varianceM = sum / (listElements.length - 1);
    console.log("Varianza muestra: " + varianceM.toFixed(2));
    return varianceM.toFixed(2);
}