import conexionBD from "./db/db";
import { Enum_EstadoUsuario, Enum_Rol, Enum_tipoObjetivo, Enum_estadoProyecto, Enum_faseProyecto,Enum_EstadoInscripcion } from "./models/enums/enum";
import { ObjetivoModel } from "./models/objetivo/objective";
import { ProyectoModel } from "./models/proyecto/proyecto";
import { UserModel } from "./models/usuario/usuario";
import { InscripcionModel } from './models/inscripcion/inscripcion'
import { AvancesModel } from "./models/avance/avances";

const main = async () => {
    await conexionBD();

    // PROBANDO LOS POPULATE VIRTUALES

    const proyecto = await UserModel.find().populate("inscripciones")
    console.log(proyecto)

    // CREAR INSCRIPCION A UN PROYECTO SIENDO ESTUDIANTE HU_020

    // const inscr = await InscripcionModel.create({
    //     proyecto: "61986bf903d3bcc34f73101a",
    //     estudiante: "6198691df9dae4f11c04c656",
    // })

    // COMO ESTUDIANTE AGREGAR UN AVANCE A UN PROYECTO HU_022

    // const avance = await AvancesModel.create({
    //     fecha:new Date("2021-11-21"),
    //     descripcion:"Descripcion avance",
    //     proyecto:"61986bf903d3bcc34f73101a",
    //     creadoPor:"6198691df9dae4f11c04c656"
    // })

    // COMO ESTUDIANTE ACTUALIZAR LA DESCRIPCION DE UN AVANCE  HU_023

    // const avanceActualizado = await AvancesModel.findOneAndUpdate(
    //     {_id:avance._id},
    //     {descripcion:"Descripcion de avance actualizada"}
    // )

    // VER A QUE PROYECTOS ESTOY INSCRITO USANDO 

    // AGREGAR OBSERVACIONES A UN AVANCE

    // const avance = await AvancesModel.findOneAndUpdate(
    //     {_id:"619adf0d422f1f5a744481e9"},
    //     {observaciones:["Observacion1","Observacion2"]}
    // )

    // VER TODA LA INFORMACIÓN COMPLETA DE UN PROYECTO

    // const proyecto = await ProyectoModel.findOne({_id:"61986bf903d3bcc34f73101a"})

    // const inscripcionesProyecto = await InscripcionModel.find({proyectos:"61986bf903d3bcc34f73101a"})
    // const avanceProyecto = await AvancesModel.find({proyectos:"61986bf903d3bcc34f73101a"})
    // const userProyecto = await UserModel.find({proyectos:"61986bf903d3bcc34f73101a"})

    // console.log(proyecto,inscripcionesProyecto,avanceProyecto,userProyecto)

    // ACEPTAR RECHAZAR INSCRIPCIONES

    // const inscripcion = await InscripcionModel.findOneAndUpdate(
    //     {_id:"6198715efd5e452b1fdbb955"},
    //     {estado:Enum_EstadoInscripcion.ACEPTADA}    
    // )
    // console.log("Inscripcion aceptada: ",inscripcion)

    // INSCRIPCIONES DE UN PROYECTO ESPECIFICO

    // const inscr = await InscripcionModel.find(
    //     {proyectos:"61986bf903d3bcc34f73101a"}
    // ).populate("proyecto")
    // console.log("Inscripciones: ",inscr)

    // CREAR INSCRIPCION

    // const inscr = await InscripcionModel.create({
    //     proyecto: "61986bf903d3bcc34f73101a",
    //     estudiante: "6198691df9dae4f11c04c656",
    // })

    // VER LOS PROYECTOS DE UN USUARIO LIDER ESPECIFICO

    // const proyecto = await ProyectoModel.find(
    //     {users:"6198691df9dae4f11c04c656"}
    // )
    // console.log("Proyectos de lider especifico: ",proyecto)

    // CREAR UN PROYECTO

    // const proyecto = await ProyectoModel.create({
    //     nombre:"proyecto 6",
    //     presupuesto:120400,
    //     fechaInicio:new Date("2021-11-11"),
    //     fechaFin:new Date("2021-11-11"),
    //     lider:"6198691df9dae4f11c04c656"
    // })


    // CAMBIAR EL ESTADO DE UN PROYECTO Y SU FASE

    // const proyectoActualizado = await ProyectoModel.findOneAndUpdate(
    //     {_id:"61986bf903d3bcc34f73101a"},
    //     {
    //         estado:Enum_estadoProyecto.ACTIVO,
    //         fase:Enum_faseProyecto.DESARROLLO
    //     }
    // )
    // console.log("Proyecto actualizado: ",proyectoActualizado)

    // LISTAR PROYECTOS

    // const proyectos = await ProyectoModel.find().populate("lider")
    // console.log("Proyectos: ",proyectos)

    // CAMBIAR EL ESTADO DEL USUARIO:

    // const user = await UserModel.findOneAndUpdate(
    //     {_id:"6198691df9dae4f11c04c656"},
    //     {estado:Enum_EstadoUsuario.AUTORIZADO}
    // )

    // console.log("Estado usuario actualizado: ",user)


    // LEER LOS USUARIOS:

    // const usuarios = await UserModel.find()
    // console.log("Usuarios listados: ",usuarios)


    //ACTUALIZAR USUARIO:

    // const user = await UserModel.findOneAndUpdate(
    //     {correo:"amjose09@gmail.com"},
    //     {correo:"jlam@gmail.com"}
    // )

    // console.log("Usuario actualizado: ",user)


    //CREAR USUARIO

    // const user = await UserModel.create({
    //     correo:"amjose09@gmail.com",
    //     identificacion:"12345",
    //     nombre:"jose",
    //     apellido:"Angarita",
    //     rol:Enum_Rol.ESTUDIANTE,
    // })

    // console.log("Usuario Creado: ",user)



}

main()