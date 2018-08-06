import { model, Schema, Document } from "mongoose";
interface ITicket extends Document {
    hours: number;
    description: string;
    costomerName: string;
    costomerLastName: string;
    ranking: number;
    consultantName: string;
    consultantLastName: string;
    timestamp: Date;
    status: string;
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
    costomerName: {
        type: String
    },
    costomerLastName: {
        type: String
    },
    consultantName: {
        type: String
    },
    consultantLastName: {
        type: String
    },
    ranking: {
        type: Number
    },
    status: {
        type: String
    }
});

export default model<ITicket>("Ticket", TicketSchema);
