import { Enum_Rol } from "../enums/enums";
import { UserModel } from "./user";

export const resolverUsuario = {

    Query:{
        Usuarios: async (parent,args,context) =>{
            const usuarios = await UserModel.find().populate("inscripciones")
            return usuarios;
            // if(context.userData.rol === "ADMINISTRADOR"){
            //     return await UserModel.find().populate("inscripciones")
            // }
            // if(context.userData.rol === "LIDER"){
            //     return await UserModel.find({
            //         rol:Enum_Rol.ESTUDIANTE
            //     }).populate("inscripciones")
            // }
            // return []
        },
        Usuario: async (parent,args) => {
            const usuario = await UserModel.findOne({_id:args._id}).populate("inscripciones")
            return usuario;
        }
    },
    Mutation:{
        crearUsuario: async(parent,args) =>{

            const usuarioCreado = await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol
            })

            if(Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado
            }

            return usuarioCreado;
        },
        eliminarUsuario: async(parent,args) => {
            
            if(Object.keys(args).includes("_id")){
                const usuarioEliminado = await UserModel.findOneAndDelete({
                    _id:args._id
                })
                return usuarioEliminado;
            }
            else{
                const usuarioEliminado = await UserModel.findOneAndDelete({
                    correo:args.correo
                })
                return usuarioEliminado;
            }
        },
        editarUsuario: async(parent,args) => {

            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                estado:args.estado
            },{new:true})

            return usuarioEditado;

        }
    }
}