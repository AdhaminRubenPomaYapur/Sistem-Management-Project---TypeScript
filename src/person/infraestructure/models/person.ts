import { Schema, model } from "mongoose";
import { PersonEntity } from "../../domain/person.entity";

const PersonSchema = new Schema<PersonEntity>(
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
        status: {
            type: Boolean,
            default: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const PersonModel = model('person', PersonSchema);
export default PersonModel;