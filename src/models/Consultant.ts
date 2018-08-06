import { model, Schema, Document } from "mongoose";
interface IConsultant extends Document {
  name: any;
  lastName: string;
  tickets: any[];
  rankingAverage: number;
  password: string;
  timestamp: Date;
  description: string;
}
// tslint:disable object-literal-sort-keys
const ConsultantSchema: Schema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  rankingAverage: {
    type: Number,
    default: 0
  },
  password: {
    type: String
  },
  description: {
    type: String
  },
  tickets: [{
    type: Schema.Types.ObjectId,
    ref: "Ticket"
  }],
});

export default model<IConsultant>("Consultant", ConsultantSchema);
