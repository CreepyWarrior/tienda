import { modeloEmpleados } from "../models/empleados.model.js"

const test = () => {
    console.log("Empleado ta bien")
}
 
export default test
 
modeloEmpleados.create({
    nombre: "Armando",
    apellido: "Palos Moreno",
    edad: 40,
    sueldo: 1200
})
