import { model, Schema, Document } from "mongoose";
export interface ITicket extends Document {
    hours: number;
    description: string;
    customer: string;
    ranking: number;
    consultant: string;
    timestamp: Date;
    status: string;
  companyId: string;

}
// tslint:disable object-literal-sort-keys
const TicketSchema: Schema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    hours: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    consultant: {
        type: Schema.Types.ObjectId,
        ref: "Consultant"
    },
    ranking: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "Pendiente"
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company"
      }
});
// probar
export default model<ITicket>("Ticket", TicketSchema, "Ticket");
