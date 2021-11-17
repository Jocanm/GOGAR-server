import { UserModel } from "../models/user";
import { ProjectModel } from "../models/project";

export const resolvers = {

    Query:{
        Usuarios: async (parent,args) =>{
            const usuarios = await UserModel.find()
            return usuarios;
        },
        Usuario: async (parent,args) => {
            const usuario = await UserModel.findOne({_id:args._id})
            return usuario;
        },
        Proyectos: async (parent,args) => {
            return await ProjectModel.find().populate("lider")
        },
        Proyecto: async (parent,args) => {
            return await ProjectModel.findOne({_id:args._id}).populate("lider")
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
            })

            return usuarioEditado;

        },
        crearProyecto: async(parent,args) => {
            const proyecto = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                lider:args.lider
            })

            return proyecto;
        }
    }
}