import { Schema, model } from "mongoose";
import { PersonInterface } from "../../../../domain/interfaces/person.interface";

const PersonSchema: Schema = new Schema<PersonInterface>(
    {
        uid: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            required: true
        },
        state: {
            type: Boolean,
            default: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const PersonModel = model<PersonInterface>('Person', PersonSchema);
export default PersonModel;