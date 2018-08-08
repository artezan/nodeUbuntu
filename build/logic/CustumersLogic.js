"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("../models/Customer");
const mongodb_1 = require("mongodb");
class CustmersLogic {
    addTicketToCustomer(ticketId, customerId) {
        Customer_1.default.findById(customerId).populate("tickets")
            .then((customer) => {
            const isFind = customer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
            if (isFind === -1) {
                customer.tickets.push(ticketId);
                customer.save();
            }
        })
            .catch();
    }
    changeTicketToCustomer(ticketId, newCustomerId, oldCustomerId) {
        // eliminar del viejo
        Customer_1.default.findById(oldCustomerId).populate("tickets")
            .then((oldCustomer) => {
            const indexFind = oldCustomer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
            if (indexFind !== -1) {
                oldCustomer.tickets.splice(indexFind, 1);
                oldCustomer.save();
            }
        })
            .catch();
        // add al neuvo
        Customer_1.default.findById(newCustomerId).populate("tickets")
            .then((newCustomer) => {
            const indexFind = newCustomer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
            if (indexFind === -1) {
                newCustomer.tickets.push(ticketId);
                newCustomer.save();
            }
        })
            .catch();
    }
    removeTicket(ticketId) {
        Customer_1.default.find().populate("tickets").then(customers => {
            customers.forEach(customer => {
                const indexFind = customer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
                if (indexFind !== -1) {
                    customer.tickets.splice(indexFind, 1);
                    customer.save();
                }
            });
        });
    }
}
CustmersLogic.Instance = function () {
    if (this._instance) {
        return this._instance;
    }
    else {
        return (this._instance = new this());
    }
};
exports.CustmersLogic = CustmersLogic;
//# sourceMappingURL=CustumersLogic.js.map