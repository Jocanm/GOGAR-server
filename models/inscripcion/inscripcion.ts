import {Schema,model} from 'mongoose'
import { Enum_estadoInscripcion } from '../enums/enums'
import { ProjectModel } from '../proyecto/project'
import { UserModel } from '../usuario/user'

interface Inscripcion{
    fechaIngreso:Date;
    fechaEgreso:Date;
    estado:Enum_estadoInscripcion;
    proyecto:Schema.Types.ObjectId;
    estudiante:Schema.Types.ObjectId;
}

const inscripcionSchema = new Schema<Inscripcion>({

    fechaIngreso:{
        type:Date,
    },
    fechaEgreso:{
        type:Date
    },
    estado:{
        type:String,
        enum:Enum_estadoInscripcion,
        default:Enum_estadoInscripcion.PENDIENTE
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true
    }
})

export const InscripcionModel = model("Inscripcion",inscripcionSchema,"inscripciones")