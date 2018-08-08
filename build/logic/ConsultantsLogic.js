"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Consultant_1 = require("../models/Consultant");
const mongodb_1 = require("mongodb");
class ConsultantsLogic {
    addTicketToConsultant(ticket, consultantId) {
        Consultant_1.default.findById(consultantId).populate("tickets")
            .then((consultant) => {
            const indexFind = consultant.tickets
                .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind === -1) {
                consultant.tickets.push(ticket);
            }
            else {
                consultant.tickets.splice(indexFind, 1);
                consultant.tickets.push(ticket);
            }
            consultant.save();
            this.calculateAvgRating(consultant._id);
        })
            .catch();
    }
    changeTicketToConsultant(ticket, newConsultantId, oldConsultantId) {
        // eliminar del viejo
        Consultant_1.default.findById(oldConsultantId).populate("tickets")
            .then((oldConsultant) => {
            const indexFind = oldConsultant.tickets
                .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind !== -1) {
                oldConsultant.tickets.splice(indexFind, 1);
                oldConsultant.save();
                this.calculateAvgRating(oldConsultant._id);
            }
        })
            .catch();
        // add al nuevo
        Consultant_1.default.findById(newConsultantId).populate("tickets")
            .then((newConsultant) => {
            const indexFind = newConsultant.tickets
                .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === new mongodb_1.ObjectId(ticket._id).toString());
            if (indexFind === -1) {
                newConsultant.tickets.push(ticket);
                newConsultant.save();
                this.calculateAvgRating(newConsultant._id);
            }
        })
            .catch();
    }
    removeTicket(ticketId) {
        Consultant_1.default.find().populate("tickets").then(consultants => {
            consultants.forEach(consultant => {
                const indexFind = consultant.tickets
                    .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
                if (indexFind !== -1) {
                    consultant.tickets.splice(indexFind, 1);
                    consultant.save();
                    this.calculateAvgRating(consultant._id);
                }
            });
        });
    }
    calculateAvgRating(consultantId) {
        Consultant_1.default.findById(consultantId).populate("tickets").then(consultant => {
            let sumTotalRanking = 0;
            if (consultant.tickets.length > 0) {
                consultant.tickets.forEach((t) => {
                    sumTotalRanking += t.ranking;
                });
                if (sumTotalRanking > 0) {
                    consultant.rankingAverage = sumTotalRanking / consultant.tickets.length;
                }
                else {
                }
                consultant.save();
            }
            else if (consultant.tickets.length === 0) {
                consultant.rankingAverage = 0;
                consultant.save();
            }
        });
    }
    calculateAvgRatingById(ticketId) {
        Consultant_1.default.find().populate("tickets").then(consultants => {
            consultants.forEach(consultant => {
                const indexFind = consultant.tickets
                    .findIndex(t => new mongodb_1.ObjectId(t._id).toString() === ticketId);
                if (indexFind !== -1) {
                    this.calculateAvgRating(consultant._id);
                }
            });
        });
    }
}
ConsultantsLogic.Instance = function () {
    if (this._instance) {
        return this._instance;
    }
    else {
        return (this._instance = new this());
    }
};
exports.ConsultantsLogic = ConsultantsLogic;
//# sourceMappingURL=ConsultantsLogic.js.map