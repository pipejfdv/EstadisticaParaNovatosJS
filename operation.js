//imports
import { average, avg } from "./operations/average.js";
import { variancePolation, varianceSample,varianceM,varianceP } from "./operations/variances.js";

//variables
export const listElements = [];


//elements of document
const data = document.getElementById('data');
document.getElementById("add").addEventListener('click',addElement);
document.getElementById('analyze').addEventListener('click', statistics);
const content = document.getElementById('content');

//functions

function statistics(){
    average();
    variancePolation();
    varianceSample();
    let standardDeviationPolation = varianceP.toFixed(2);
    let standardDeviationSample = varianceM.toFixed(2);
    content.innerHTML = `<div class="col-12 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Datos Ingresados</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${listElements}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Promedio</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${avg}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Varianza Poblacional</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${varianceP.toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Varianza Muestra</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${varianceM.toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Desviación Estandar Poblacional</span>
                        <input  type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${Math.sqrt(standardDeviationPolation).toFixed(2)}">
                      </div>
                </div>
                <div class="col-4 mt-3 d-flex justify-content-center">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Desviación Estandar Muestra</span>
                        <input type="text" class="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled value="${Math.sqrt(standardDeviationSample).toFixed(2)}">
                      </div>
                </div>`
}

function addElement(){
    let newElement = data.value;
    listElements.push(newElement);
    data.value='';
    console.log(listElements);
    return listElements;
}