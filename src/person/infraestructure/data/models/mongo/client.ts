import { Schema, model } from "mongoose";
import { ClientInterface } from "../../../../domain/interfaces/client.interface";


const ClientSchema: Schema = new Schema<ClientInterface>(
    {
        uid: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        access: {
            type: Date,
            required: true
        },
        google: {
            type: Boolean,
            default: false
        },
        state: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const ClientModel = model<ClientInterface>('Client', ClientSchema);
export default ClientModel;