import conexionBD from "./db/db";
import { Enum_EstadoUsuario, Enum_Rol, Enum_tipoObjetivo, Enum_estadoProyecto, Enum_faseProyecto,Enum_EstadoInscripcion } from "./models/enum";
import { ObjetivoModel } from "./models/objective";
import { ProyectoModel } from "./models/proyecto";
import { UserModel } from "./models/usuarios";
import { InscripcionModel } from './models/inscripcion'

const main = async () => {
    await conexionBD();

    // INSCRIPCIONES DE UN PROYECTO ESPECIFICO

    const inscr = await InscripcionModel.find(
        {proyectos:"61986bf903d3bcc34f73101a"}
    ).populate("proyecto")
    console.log("Inscripciones: ",inscr)

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