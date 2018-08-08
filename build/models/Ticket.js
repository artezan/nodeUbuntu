"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// tslint:disable object-literal-sort-keys
const TicketSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer"
    },
    consultant: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Company"
    }
});
// probar 
exports.default = mongoose_1.model("Ticket", TicketSchema, "Ticket");
//# sourceMappingURL=Ticket.js.map