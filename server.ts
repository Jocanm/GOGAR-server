import conexionBD from "./db/db";
import { userModel } from "./models/user";
import { Enum_Rol } from './models/enums';

const main = async() =>{

    await conexionBD();

    await userModel.create({
        correo:"jorge@gmail.com",
        identificacion:"1423442",
        nombre:"Jorge",
        apellido:"Perez",
        rol:Enum_Rol.estudiante
    })
    .then((user)=>{
        console.log("Usuario Creado: ", user)
    })
    .catch((err)=>{
        console.log("Error: ",err)
    })

    // OBTENER TODOS LOS USUARIOS

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
