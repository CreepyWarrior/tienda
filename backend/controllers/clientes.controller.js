import { modeloClientes } from "../models/clientes.model.js"

const test = () => {
    console.log("Clientes ta bien")
}
  
export default test

modeloClientes.create({ 
    nombre: "Diego Yisus",
    apellidos:"Palos Padilla",
    edad: "20",
    Total: "1200"
})