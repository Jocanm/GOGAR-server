import { UserModel } from "./usuario";


export const resolversUsuario = {

    Query: {
        Usuarios: async (parent, arg) => {
            const usuarios = await UserModel.find().populate("misProyectos");
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({ _id: args._id }).populate("misProyectos");
            return usuario;
        },
    },

    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuariocreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            });
            return usuariocreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado:args.estado
            },{new:true});
            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('correo')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
                return usuarioEliminado;
            }
        },

    },
};