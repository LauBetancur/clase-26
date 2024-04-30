export const obtenerdatos = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  };

  export class Tarea {
    #id;
    nombre;
    terminada;
    
    constructor(id, nombre, terminada) {
      this.#id = id;
      this.nombre = nombre;
      this.terminada = terminada;
    }
    render() {

        const contenedorTarea= document.createElement("div");
        contenedorTarea.id=this.#id;
        const checkbox = document.createElement("input");
        checkboTarea.type = "checkbox";
        checkboxTarea = this.terminada;

        const nombreTarea=document.createElement("p");
        nombreTarea.textContent=this.nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent="Eliminar";

        contenedortarea.appendChild(checkboxTarea);
        contenedortarea.appendChild(nombreTarea);
        contenedortarea.appendChild(botonEliminar); 
        
        return contenedorTarea;
    }
  }