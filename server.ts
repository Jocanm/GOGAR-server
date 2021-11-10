import conexionBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from './models/enums';
import { ProjectModel } from "./models/project";

const main = async() =>{

    await conexionBD();

    //CRUD PROYECTOS
    
    // ProjectModel.create({
    //     nombre:"Proyecto2",
    //     presupuesto:120,
    //     fechaInicio: new Date().toLocaleDateString(),
    //     fechaFin: new Date("2022/11/10"),
    //     lider:"618bffb52b01123891aa36b7"
    // })

    //Debido a que el id de lider es un objectId, cuando usamos el metodo populate y le pasamos como parametro el campo que queremos traer, al traer la información del proyectom, tambien nos traera toda la información del lider en este caso.
    
    const proyecto = await ProjectModel.find({nombre:"Proyecto2"}).populate("lider")

    console.log("Proyecto: ",proyecto)
}

main()

// //CRUD USUARIO EJEMPLO

// //CREAR UN USUARIO

// const usuario = await UserModel.create({
//     correo:"pedrogmail.com",
//     identificacion:"14255442",
//     nombre:"pedro",
//     apellido:"Sarmiento",
//     rol:Enum_Rol.estudiante,
// })
// console.log("Usuario creado: ", usuario);

// // OBTENER TODOS LOS USUARIOS

// await UserModel.find()
// .then((u)=>console.log("Todos los usuarios: ", u))
// .catch(e=>console.error("Error obteniendo usuarios: ", e))


// //OBTENER USUARIOS ESPECIFICOS
// //Esto nos traera todos los que cumplan con el filtro, .findOne podemos traer uno solo

// await UserModel.find({
//     correo:'amjose09@gmail.com'
// })
// .then(u=>console.log("Usuario filtrado: ",u))

// //ACTUALIZAR

// await UserModel.findOneAndUpdate(
//     {correo:"david@gmail.com"},
//     {
//         nombre:"David123",
//         apellido:"Perez"
//     }
// ).then(u=>console.log("Usuario actualizado",u))

// //ELIMINAR

// await UserModel.findOneAndDelete(
//     {correo:"amjose09@gmail.com"}
// ).then(u=>console.log("usuario eliminado",u))