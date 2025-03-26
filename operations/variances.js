// Description: It has the functions to calculate the variance of a population and a sample.
// Used in: operations/operations.js

let varianceP = 0;
let varianceM = 0;
//functions of differents formulates the variants

/*
* This formula does the sum of elements in the listElements and squares them, but the difference is when total numbers are subtracted and one.
* @return: float with two decimals
*/

//population
export function variancePolation(data, fncAverage){
    let sum = 0;
    data.forEach(element=> {
        sum += (Number(element) - fncAverage(data))**2;
    });
    
    varianceP = sum / data.length;
    console.log(data.length);
    console.log("varianza population:" +varianceP.toFixed(2));
    return varianceP.toFixed(2);
}

//sample
export function varianceSample(data, fncAverage){
    let sum = 0;
    data.forEach(element => {
        sum += (Number(element) - fncAverage(data)) ** 2;
    });
    varianceM = sum / (data.length - 1);
    console.log("Varianza muestra: " + varianceM.toFixed(2));
    return varianceM.toFixed(2);
}
