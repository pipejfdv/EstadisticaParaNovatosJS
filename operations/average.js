//variables
export let sum = 0;
export let avg = 0;
//let sum more ram

//function average
export function average(data){
    /*
    * This function takes a list of number elements floating or integers and returns the average.
    * @return float avg
    */
    data.forEach( e => {
        //pass from text to number 
        sum = sum + Number(e);
    });
    avg = sum/data.length;
    return avg;
}

