import { model, Schema, Document } from "mongoose";
import { ITicket } from "./Ticket";
import { ICustomer } from "./Customer";
import { IConsultant } from "./Consultant";
interface IPost extends Document {
  timestamp: Date;
  title: string;
  content: string;
  ticket: ITicket;
  custumer: ICustomer;
  consultant: IConsultant;
  isByCustumer: boolean;
}
const PostSchema: Schema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true
  },
  customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer"
  },
  consultant: {
      type: Schema.Types.ObjectId,
      ref: "Consultant"
  },
  ticket: {
    type: Schema.Types.ObjectId,
    ref: "Ticket"
  },
  isByCustumer: {
    type: Boolean,
  }
});

export default model<IPost>("Post", PostSchema);
