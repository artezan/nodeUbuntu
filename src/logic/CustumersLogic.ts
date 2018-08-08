import Customer, { ICustomer } from "../models/Customer";
import { ObjectId } from "mongodb";

export class CustmersLogic {
  public static Instance = function (): CustmersLogic {
    if (this._instance) {
      return this._instance;
    } else {
      return (this._instance = new this());
    }
  };
  public addTicketToCustomer(ticketId, customerId): void {
    Customer.findById(customerId).populate("tickets")
    .then((customer: ICustomer) => {
    const isFind =  customer.tickets.findIndex(t =>  new ObjectId(t._id).toString() === ticketId );
    if (isFind === -1) {
      customer.tickets.push(ticketId);
      customer.save();
    }
     })
      .catch();
  }
  public changeTicketToCustomer (ticketId, newCustomerId, oldCustomerId): void {
    // eliminar del viejo
    Customer.findById(oldCustomerId).populate("tickets")
    .then((oldCustomer: ICustomer) => {
      const indexFind =  oldCustomer.tickets.findIndex(t =>  new ObjectId(t._id).toString() === ticketId );
      if (indexFind !== -1) {
        oldCustomer.tickets.splice(indexFind, 1);
        oldCustomer.save();
      }
    })
    .catch();
    // add al neuvo
    Customer.findById(newCustomerId).populate("tickets")
    .then((newCustomer: ICustomer) => {
      const indexFind =  newCustomer.tickets.findIndex(t =>  new ObjectId(t._id).toString() === ticketId );
      if (indexFind === -1) {
        newCustomer.tickets.push(ticketId);
        newCustomer.save();
      }
    })
    .catch();
  }
  public removeTicket(ticketId) {
    Customer.find().populate("tickets").then(customers => {
      customers.forEach(customer => {
        const indexFind = customer.tickets.findIndex(t => new ObjectId(t._id).toString() === ticketId);
        if (indexFind !== -1) {
          customer.tickets.splice(indexFind, 1);
          customer.save();
        }
      });
    });
  }
}