import { model, Schema, Document } from "mongoose";
interface ICompany extends Document {
    name: any;
    customers: any[];
    consultant: any[];
    timestamp: Date;
}
// tslint:disable object-literal-sort-keys
const CompanySchema: Schema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    customers: {
        type: Schema.Types.ObjectId,
        ref: "Customer"

    },
    consultant: {
        type: Schema.Types.ObjectId,
        ref: "Consultant"
    }
});

export default model<ICompany>("Company", CompanySchema);
