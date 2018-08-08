"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("../models/Customer");
const mongodb_1 = require("mongodb");
class CustmersLogic {
    addTicketToCustomer(ticket, customertId) {
        Customer_1.default.findById(customertId).populate("tickets")
            .then((customer) => {
            const indexFind = customer.tickets
                .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind === -1) {
                customer.tickets.push(ticket);
            }
            else {
                customer.tickets.splice(indexFind, 1);
                customer.tickets.push(ticket);
            }
            customer.save();
            this.calculateTotalHours(customer._id);
        })
            .catch();
    }
    changeTicketToCustomer(ticket, newCustomerId, oldCustomerId) {
        // eliminar del viejo
        Customer_1.default.findById(oldCustomerId).populate("tickets")
            .then((oldCustomer) => {
            const indexFind = oldCustomer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind !== -1) {
                oldCustomer.tickets.splice(indexFind, 1);
                oldCustomer.save();
                this.calculateTotalHours(oldCustomer._id);
            }
        })
            .catch();
        // add al neuvo
        Customer_1.default.findById(newCustomerId).populate("tickets")
            .then((newCustomer) => {
            const indexFind = newCustomer.tickets.findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind === -1) {
                newCustomer.tickets.push(ticket);
                newCustomer.save();
                this.calculateTotalHours(newCustomer._id);
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
                    this.calculateTotalHours(customer._id);
                }
            });
        });
    }
    calculateTotalHours(customerId) {
        Customer_1.default.findById(customerId).populate("tickets").then(customer => {
            let sumTotalHours = 0;
            if (customer.tickets.length > 0) {
                customer.tickets.forEach(t => {
                    sumTotalHours += t.hours;
                });
                customer.totalHours = sumTotalHours;
            }
            else {
                customer.totalHours = 0;
            }
            customer.save();
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