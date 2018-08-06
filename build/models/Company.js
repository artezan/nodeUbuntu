"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// tslint:disable object-literal-sort-keys
const CompanySchema = new mongoose_1.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    customers: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer"
    },
    consultant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Consultant"
    }
});
exports.default = mongoose_1.model("Company", CompanySchema);
//# sourceMappingURL=Company.js.map