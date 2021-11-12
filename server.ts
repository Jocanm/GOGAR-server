import conexionBD from "./db/db";
import { Enum_Rol, Enum_tipoObjetivo, Enum_estadoProyecto } from './models/enums';
import { ProjectModel } from "./models/project";
import { ObjetiveModel } from "./models/objetivo";

const main = async() =>{

    await conexionBD();

    // PROBANDO CRUD EN AVANCES E INSCRIPCIONES
    
}

main()

    // const proyecto = await ProjectModel.create({
    //     nombre:"Proyecto7",
    //     fechaInicio: new Date().toLocaleDateString(),
    //     fechaFin: new Date("2022/11/11"),
    //     presupuesto:120000,
    //     lider:"618bffb52b01123891aa36b7"
    // })

    // console.log("Nuevo proyecto: ",proyecto)

    // const objetivoGeneral = await ObjetiveModel.create({
    //     descripcion:"Este es un objetivo general",
    //     tipo:Enum_tipoObjetivo.general,
    //     proyecto:"618d8be4c5cf5715131b901a"
    // })


    // //Obtener los avances de un proyecto especifico

    // const misObjetivos = await ObjetiveModel.find({ proyectos:"618d8be4c5cf5715131b901a"})
    // console.log(misObjetivos)
    

    // console.log("Objetivo general creado: ",objetivoGeneral.populate("proyecto"))

    // // const objetivoGeneral = await ObjetiveModel.find({descripcion:"Este es un objetivo general"}).populate("proyecto")

    // console.log("Objetivo: ",objetivoGeneral)

    // await ObjetiveModel.find({id:"618d8cf05f2f8257f51c3019"}).populate("proyecto").then(e=>console.log("objetivo: ",e))


    
// //CRUD PROYECTOS

// //Creamos un un objetivo para añadirlo a un proyecto

// // const objetivo = await ObjetiveModel.create({
// //     descripcion:"Objetivo especifico",
// //     tipo: Enum_tipoObjetivo.especifico
// // })

// //CREATE

// // ProjectModel.create({
// //     nombre:"Proyecto5",
// //     presupuesto:120,
// //     fechaInicio: new Date().toLocaleDateString(),
// //     fechaFin: new Date("2022/11/10"),
// //     lider:"618bffb52b01123891aa36b7",
// // })

// const proyecto3 = await ProjectModel.find({nombre:"Proyecto3"}).populate("objetivos").populate("lider")

// console.log("Proyecto con los objetivos en relacion fuerte: ", JSON.stringify(proyecto3));


// //Debido a que el id de lider es un objectId, cuando usamos el metodo populate y le pasamos como parametro el campo que queremos traer, al traer la información del proyectom, tambien nos traera toda la información del lider en este caso.

// //READ
// const proyecto = await ProjectModel.find({nombre:"Proyecto2"}).populate("lider")

// console.log("Proyecto: ",proyecto)

// //UPDATE

// await ProjectModel.findOneAndUpdate(
//     {nombre:"Proyecto5"},
//     {
//         estado:Enum_estadoProyecto.activo
//     }
// )
// .then(u=>console.log("Projecto actualizado: ",u))
// .catch(e=>console.error("Error: ",e))

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