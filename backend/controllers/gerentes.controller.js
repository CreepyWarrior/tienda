import { modeloGerentes } from "../models/gerentes.model.js"

const test = () => {
    console.log("Gerente ta bien")
}
   
export default test

modeloGerentes.create({
    nombre: "Ingrid Janet",
    apellido: "Hernandez Salazar",
    edad: 20,
    sueldo: 1200
})