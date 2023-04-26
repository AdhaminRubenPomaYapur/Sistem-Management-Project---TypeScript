import { Schema, model } from "mongoose";
import { SupplierInterface } from "../../../../domain/interfaces/supplier.interface";

const SupplierSchema: Schema = new Schema<SupplierInterface>(
    {
        uid: {
            type: String
        },
        company: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        geo: {
            type: String
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

const SupplierModel = model<SupplierInterface>('Supplier', SupplierSchema);
export default SupplierModel;