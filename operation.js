//imports
import { average } from "./operations/average.js";
import { variancePolation, varianceSample} from "./operations/variances.js";

// array list of data 
const listElements = [];

//function primary

function statistics(data, fncAverage, fncVariancePolation, fncVarianceSample){
    /*
    * When executing this fuction, it will do all operations necessary and finally do an insert the document HTML with the different results.
    */
    fncAverage(data);
    let variancePolation = fncVariancePolation(data, fncAverage);
    let varianceSample = fncVarianceSample(data, fncAverage);

    content.innerHTML = `<div class="col-12 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Datos Ingresados</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${listElements}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Promedio</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${fncAverage(data).toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Varianza Poblacional</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${variancePolation.toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Varianza Muestra</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${varianceSample.toFixed(2)}">  
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Desviación Estandar Poblacional</span>
                        <input  type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${variancePolation.sqrt(2).toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Desviación Estandar Muestra</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${varianceSample.sqrt(2).toFixed(2)}">
                      </div>
                </div>`
}

function addElement(){
    /*
    * this fuction takes care of add data in the array "listElements" and clear the input
    * @return Array listElement
    */
    let newElement = data.value;
    listElements.push(newElement);
    data.value='';
    console.log(listElements);
    return listElements;
}


//elements of document
const content = document.getElementById('content');
const data = document.getElementById('data');
document.getElementById("add").addEventListener('click',addElement);
document.getElementById('analyze').addEventListener('click', () => statistics(listElements, average, variancePolation, varianceSample));
