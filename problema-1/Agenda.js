import Inventario from "./Inventario.js";

export default class Agenda {
    constructor(tablaAgenda) {
        this._tablaAgenda = tablaAgenda;
        this._inventarios = [];

        this._initTables();
    }

    _initTables() {
        let inventarios = JSON.parse(localStorage.getItem("inventarios"));
        if(inventarios === null) {
            return;
        }
        inventarios.forEach((inventario, index) => {
            this._showIntable(new Inventario(inventario));
        });
    }

    _showIntable(inventario) {
        let row = this._tablaAgenda.insertRow(-1);

        let cellNumInventario = row.insertCell(0);
        let cellNomProducto = row.insertCell(1);
        let cellCantProducto = row.insertCell(2);
        let cellCostoProducto = row.insertCell(3);

        cellNumInventario.innerHTML = inventario.numInventario;
        cellNomProducto.innerHTML = inventario.nomProducto;
        cellCantProducto.innerHTML = inventario.cantProducto;
        cellCostoProducto.innerHTML = inventario.getCosto();

        let objInventario = {
            numInventario: inventario.numInventario,
            nomProducto: inventario.nomProducto,
            cantProducto: inventario.cantProducto,
            costoProducto: inventario.costoProducto
        }
        this._inventarios.push(objInventario);
    }

    _findInventario(numInventario) {
        let foundAt = -1;
        this._inventarios.forEach((inventario, index) => {
            if(inventario.numInventario === numInventario) {
                foundAt = index;
                return;
            }
        });
        return foundAt;
    }

    addInventario(inventario) {
        this._showIntable(inventario);
        localStorage.setItem("inventarios", JSON.stringify(this._inventarios));
   
    }

    addSalidaMercancia(inventario) {
        let found = this._findInventario(inventario.numInventario);
        if(found >= 0) {
            this._inventarios[found].cantProducto = this._inventarios[found].cantProducto - inventario.cantProducto;
            localStorage.setItem("inventario", JSON.stringify(this._inventarios));
            let row = this._tablaAgenda.rows[found+1];
            row.cells[2].innerHTML = this._inventarios[found].cantProducto;
      }
        else{
            alert('No está registrado');
            return;
        }
        localStorage.setItem("inventarios", JSON.stringify(this._inventarios));
  

    }
}