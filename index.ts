import conexionBD from "./db/db";
import { Enum_Rol, Enum_tipoObjetivo } from "./models/enum";
import { ObjetivoModel } from "./models/objective";
import { ProyectoModel } from "./models/proyecto";
import { UserModel } from "./models/usuarios";

const main = async () =>{
    await conexionBD();

    // const user = await UserModel.create({
    //     correo:"amjose09@gmai.com",
    //     identificacion:"12345",
    //     nombre:"Jose",
    //     apellido:"Angarita",
    //     rol:Enum_Rol.ADMINISTRADOR
    // })

    // console.log("usuario: ",user)

    // const proyecto = await ProyectoModel.create({
    //     nombre:"Proyecto7",
    //     fechaInicio: new Date("2022/11/11"),
    //     fechaFin: new Date("2022/11/11"),
    //     presupuesto:120000,
    //     lider:"61971ed1895281d52e73f425"
    // })
    // console.log("Proyecto: ",proyecto);
    
    // const proyecto = await ProyectoModel.find({_id:"619720cf49d9a1c6d5816b7a"}).populate("lider")

    // console.log(proyecto)
}

main()