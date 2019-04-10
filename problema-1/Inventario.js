export default class Inventario {
    constructor(inventario) {
        this._numInventario = inventario.numInventario;
        this._nomProducto = inventario.nomProducto;
        this._cantProducto = inventario.cantProducto;
        this._costoProducto = inventario.costoProducto;
       
    }

    get numInventario() {
        return this._numInventario;
    }

    get nomProducto() {
        return this._nomProducto;
    }

    get cantProducto() {
        return this._cantProducto;
    }

    get costoProducto() {
        return this._costoProducto;
    }

    getCosto() {
        let costo = this._costoProducto * this._cantProducto;
        return costo;
    }

    

   
}