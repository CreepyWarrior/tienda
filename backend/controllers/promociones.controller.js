import { modeloPromociones } from "../models/promociones.model.js";

const test = () => {
    console.log("Promocion furulando xd")
}
export default test

modeloPromociones.create({
    objeto: "telefono",
    marca: "Xiaomi",
    precio: "10000",
    descuento: "30",
    Total: "7000"
})