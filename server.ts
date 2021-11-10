import conexionBD from "./db/db";
import { userModel } from "./models/user";

const main = async() =>{

    await conexionBD();

    // await userModel.create({
    //     correo:"osorio@gmail.com",
    //     identificacion:"657234",
    //     nombre:"Jonathan",
    //     apellido:"Garrido"
    // })
    // .then((user)=>{
    //     console.log("Usuario Creado: ", user)
    // })
    // .catch((err)=>{
    //     console.log("Error: ",err)
    // })

    //OBTENER TODOS LOS USUARIOS

    await userModel.find()
    .then((u)=>console.log("Todos los usuarios: ", u))
    .catch(e=>console.error("Error obteniendo usuarios: ", e))


    //OBTENER USUARIOS ESPECIFICOS
    await userModel.find({
        correo:'amjose09@gmail.com'
    })
    .then(u=>console.log("Usuario filtrado: ",u))

}

main()
