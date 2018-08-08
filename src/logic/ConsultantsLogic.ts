import Consultant, { IConsultant } from "../models/Consultant";
import { Types } from "mongoose";
import { ObjectId } from "mongodb";
import Ticket from "../models/Ticket";

export class ConsultantsLogic {
  public static Instance = function (): ConsultantsLogic {
    if (this._instance) {
      return this._instance;
    } else {
      return (this._instance = new this());
    }
  };
  public addTicketToConsultant(ticketId: string, consultantId): void {
    Consultant.findById(consultantId).populate("tickets")
      .then((consultant: IConsultant) => {
        const isFind = consultant.tickets.findIndex(t => new ObjectId(t._id).toString() === (ticketId));
        if (isFind === -1) {
          Ticket.findById(ticketId).then( ticket => {
            consultant.tickets.push((ticket._id));
          consultant.save();
          this.calculateAvgRating(consultant._id);
          });
        }
      })
      .catch();
  }
  public changeTicketToConsultant(ticketId, newConsultantId, oldConsultantId): void {
    // eliminar del viejo
    Consultant.findById(oldConsultantId).populate("tickets")
      .then((oldConsultant: IConsultant) => {
        const indexFind = oldConsultant.tickets.findIndex(t => new ObjectId(t._id).toString() === ticketId);
        if (indexFind !== -1) {
          oldConsultant.tickets.splice(indexFind, 1);
          oldConsultant.save();
          this.calculateAvgRating(oldConsultant._id);
        }
      })
      .catch();
    // add al neuvo
    Consultant.findById(newConsultantId).populate("tickets")
      .then((newConsultant: IConsultant) => {
        const indexFind = newConsultant.tickets.findIndex(t => new ObjectId(t._id).toString() === ticketId);
        if (indexFind === -1) {
          newConsultant.tickets.push(ticketId);
          newConsultant.save();
          this.calculateAvgRating(newConsultant._id);
        }
      })
      .catch();
  }
  public removeTicket(ticketId) {
    Consultant.find().populate("tickets").then(consultants => {
      consultants.forEach(consultant => {
        const indexFind = consultant.tickets.findIndex(t => new ObjectId(t._id).toString() === ticketId);
        if (indexFind !== -1) {
          consultant.tickets.splice(indexFind, 1);
          consultant.save();
          this.calculateAvgRating(consultant._id);
        }
      });
    });
  }
  private calculateAvgRating(consultantId): void {
    Consultant.findById(consultantId).populate("tickets").then(consultant => {
      console.log(consultant)
      if (consultant.tickets.length > 0) {
        let sumTotalRanking = 0;
      consultant.tickets.forEach((t) => {
        sumTotalRanking += t.ranking;
      });
      console.log("SUMA" + sumTotalRanking)
      if (sumTotalRanking > 0) {
        consultant.rankingAverage = sumTotalRanking / consultant.tickets.length;
      } else {
      }
      consultant.save();
      } else if (consultant.tickets.length === 0) {
        consultant.rankingAverage = 0;
      consultant.save();
      }
    });
  }
  public calculateAvgRatingById(ticketId) {
    Consultant.find().populate("tickets").then(consultants => {
      consultants.forEach(consultant => {
        const indexFind = consultant.tickets.findIndex(t => new ObjectId(t._id).toString() === ticketId);
        if (indexFind !== -1) {
      console.log("Algo")

          this.calculateAvgRating(consultant._id);
        }
      });
    });
  }
}