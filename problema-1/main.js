import Agenda from "./Agenda.js";
import Inventario from "./Inventario.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let numInventario = document.querySelector("#numInventario").value;
                let nomProducto = document.querySelector("#nomProducto").value;
                let cantProducto = document.querySelector("#cantProducto").value;
                let costoProducto = document.querySelector("#costoProducto").value;

                let objInventario = {
                    numInventario:  numInventario,
                    nomProducto:  nomProducto,
                    cantProducto:  cantProducto,
                    costoProducto: costoProducto
                
                };

                let inventario = new Inventario(objInventario);
                agenda.addInventario(inventario);
            }
        });

        document.querySelector("#btnAdd2").addEventListener("click", () => {

            let numInventario = document.querySelector("#numInventario").value;
                let nomProducto = document.querySelector("#nomProducto").value;
                let cantProducto = document.querySelector("#cantProducto").value;
                let costoProducto = document.querySelector("#costoProducto").value;

                let objInventario = {
                    numInventario:  numInventario,
                    nomProducto:  nomProducto,
                    cantProducto:  cantProducto,
                    costoProducto: costoProducto
                };
                let inventario = new Inventario(objInventario);
                agenda.addSalidaMercancia(inventario);
            
        });
    }
}
let m = new Main();