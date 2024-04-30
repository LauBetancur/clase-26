import { obtenerdatos } from "./utils.js";

const renderizarTareas =async () => {
    const tareasNormales= document.querySelector("#tareasNormales");
    tareasNormales.innerHTML="";

    const data=await obtenerdatos();

    for(const tareanormal of data.tareasNormales){
        const instanciaTarea = new Tarea(
            tareanormal.id, 
            tareanormal.nombre, 
            tareanormal.terminada);
    }

    const tareasCriticas= document.querySelector("#tareasCriticas");
    tareasCriticas.innerHTML="";

    const data=await obtenerdatos();

    for(const tareanormal of data.tareasCriticas){
        const instanciaTarea = new Tarea(
            tareanormal.id, 
            tareanormal.nombre, 
            tareanormal.terminada);
    }
};



const render = () => {
await renderizarTareas();};

document.addEventListener("DOMContentLoaded", render);