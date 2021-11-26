import { UserModel } from "../../models/usuario/user";
import {generateToken} from '../../utils/tokenUtils';
import bcrypt from 'bcrypt'

export const resolversAutenticacion = {
    Mutation:{
        Registro: async(parent,args) => {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password,salt)

            const usuario = await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password:hashedPassword
            })
            console.log("Crear usuario",args);
            return {
                token:generateToken({
                    _id:usuario._id,
                    nombre:usuario.nombre,
                    apellido:usuario.apellido,
                    identificacion:usuario.identificacion,
                    correo:usuario.correo,
                    rol:usuario.rol
                })
            }
        },

        Login: async(parent,args) => {

            const usuario = await UserModel.findOne({
                correo:args.correo
            })

            if(!usuario){
                return {
                    error:"Email or password are not correct"
                }
            }

            if(await bcrypt.compare(args.password,usuario.password)){
                return {
                    token:generateToken({
                        _id:usuario._id,
                        nombre:usuario.nombre,
                        apellido:usuario.apellido,
                        identificacion:usuario.identificacion,
                        correo:usuario.correo,
                        rol:usuario.rol
                    })
                }
            }

            // console.log(usuario)
            return{
                error:"Email or password are not correct"
            }

        },

        ValidarToken: async(parent,args,context) => {

            console.log("Contexto",context);
            

        }
    }
}