import { modeloPromociones } from "../models/promociones.model.js"

const test = () => {
    console.log("Promocion furulando xd")
} 
 
export default test

modeloPromociones.create({
    objeto: "Laptop",
    marca: "Lenovo",
    precio: "12001",
    descuento: "1",
    Total: "12000"
})