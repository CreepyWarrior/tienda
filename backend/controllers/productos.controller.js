import { modeloProductos } from "../models/productos.model.js"

const test = () => {
    console.log("Productos ta bien")
} 

export default test

modeloProductos.create({
    objeto: "Laptop", 
    modelo: "Lenovo",
    total: 12000
})