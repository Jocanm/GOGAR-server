import conexionBD from "./db/db";
import { userModel } from "./models/user";
import { Enum_Rol } from './models/enums';

const main = async() =>{

    await conexionBD();


    //CRUD EJEMPLO

    //CREAR UN USUARIO

    const usuario = await userModel.create({
        correo:"pedrogmail.com",
        identificacion:"14255442",
        nombre:"pedro",
        apellido:"Sarmiento",
        rol:Enum_Rol.estudiante,
    })
    console.log("Usuario creado: ", usuario);

    // OBTENER TODOS LOS USUARIOS

    await userModel.find()
    .then((u)=>console.log("Todos los usuarios: ", u))
    .catch(e=>console.error("Error obteniendo usuarios: ", e))


    //OBTENER USUARIOS ESPECIFICOS
    //Esto nos traera todos los que cumplan con el filtro, .findOne podemos traer uno solo

    await userModel.find({
        correo:'amjose09@gmail.com'
    })
    .then(u=>console.log("Usuario filtrado: ",u))

    //ACTUALIZAR

    await userModel.findOneAndUpdate(
        {correo:"david@gmail.com"},
        {
            nombre:"David123",
            apellido:"Perez"
        }
    ).then(u=>console.log("Usuario actualizado",u))

    //ELIMINAR

    await userModel.findOneAndDelete(
        {correo:"amjose09@gmail.com"}
    ).then(u=>console.log("usuario eliminado",u))

}

main()
