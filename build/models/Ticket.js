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
exports.default = mongoose_1.model("Ticket", TicketSchema);
//# sourceMappingURL=Ticket.js.map