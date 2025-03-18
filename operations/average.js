//fuction about calculate the average
import { listElements } from "../operation.js";

//variables
export let sum = 0;
export let avg = 0;
//let sum more ram

//function average
export function average(){
    /*
    * This function takes elements of "listElements" and adds elements. Then take the average.
    * @return float avg
    */
    listElements.forEach( e => {
        //pass from text to number 
        sum = sum + Number(e);
    });
    avg = sum/listElements.length;
    return avg;
}

