import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 

import testEmpleados from './backend/controllers/empleados.controller.js';
import testClientes from './backend/controllers/clientes.controller.js';
import testGerentes from './backend/controllers/gerentes.controller.js';
import testProductos from './backend/controllers/productos.controller.js';
import testPromociones from './backend/controllers/promociones.controller.js';

dotenv.config()
mongoose.connect(process.env.url)
/*Promesa*/
.then(()=> {
    console.log("Estoy furulando")
})
.catch((error) => {
    console.log("No estoy furulando")
})

const app =express()
app.use(cors())

app.listen(4500,()=>{
    console.log("Estoy furulandooOOOOoooo")
})

testClientes()
testEmpleados()
testGerentes()
testProductos()
testPromociones()