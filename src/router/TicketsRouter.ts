import { Request, Response, Router } from "express";
import { ObjectId } from "../../node_modules/@types/bson";
import Ticket, { ITicket } from "../models/Ticket";
import { CustmersLogic } from "../logic/CustumersLogic";
import { ConsultantsLogic } from "../logic/ConsultantsLogic";
/**
 * @apiDefine TicketsResponseParams
 * @apiSuccess {Date} createdAt
 * @apiSuccess {Date} [updatedAt]
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {string} firstName
 * @apiSuccess {string} lastName
 * @apiSuccess {string} username
 * @apiSuccess {string} email
 * @apiSuccess {string} password
 * @apiSuccess {Books} books
 * @apiSuccess {Post} post
 */
export class TicketsRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  /**
   * @api {GET} /users/ Request all
   * @apiVersion  0.1.0
   * @apiName get
   * @apiGroup Users
   *
   *
   * @apiSampleRequest /users/
   *
   * @apiSuccessExample {json} Success-Response a JSON-Array<user>:
   * {"data":[
   * {"createdAt": "2018-04-15T22:08:19.645Z", "updatedAt": "2018-04-15T22:08:19.645Z", "firstName": "user102", "lastName": "last102", "username": "user102", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 } ], "_id": "5ad3cd5346a90e3d1c9c09a1", "__v": 0 }, { "createdAt": "2018-04-15T22:13:52.471Z", "updatedAt": "2018-04-15T22:13:52.471Z", "firstName": "user25", "lastName": "last25", "username": "username25", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" }, { "timestamp": "2018-03-29T13:45:17.776Z", "title": "Post4", "slug": "post2", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": true, "_id": "5abcededfb5dfb236c199e83", "__v": 0 } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:19:36.520Z", "name": "libro4", "pages": 150, "_id": "5ad3c1e8d4f5791f80c86746", "__v": 0 } ], "_id": "5ad3cea0206c9611d0a7906c", "__v": 0 }
   * ]}
   */
  public all(req: Request, res: Response): void {
    const companyId: string = req.params.companyId;
    Ticket.find({ companyId: companyId })
      .populate("customer")
      .populate("consultant")
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  /**
   * @api {GET} /users/:_id Request by Object Id
   * @apiVersion  0.1.0
   * @apiName getById
   * @apiGroup Users
   *
   *
   * @apiParam {ObjectId} _id Must be provided as QueryParam
   *
   * @apiExample Example usage:
   * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
   *
   * @apiSampleRequest /users/
   *
   * @apiUse UserResponseParams
   *
   * @apiSuccessExample {json} Success-Response User:
   * {"data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname2", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ { "timestamp": "2018-03-29T13:44:27.979Z", "title": "Post1", "slug": "post1", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": false, "_id": "5abcedbbfb5dfb236c199e81", "__v": 0 }, { "timestamp": "2018-03-29T13:45:17.776Z", "title": "Post4", "slug": "post2", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": true, "_id": "5abcededfb5dfb236c199e83", "__v": 0 } ], "books": [ { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 } ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
   */

  public oneById(req: Request, res: Response): void {
    const ticketId: string = req.params.ticketId;

    Ticket.findById(ticketId)
      .populate("customer")
      .populate("consultant")
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });

    /*User.findOne({ username }).select('lastName')
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });*/
  }
  /**
   * @api {POST} /users/ Request New
   * @apiVersion  0.1.0
   * @apiName post
   * @apiGroup Users
   *
   *
   * @apiParam {string} firstName
   * @apiParam {string} lastName
   * @apiParam {string} username
   * @apiParam {string} [email]
   * @apiParam {string} password
   * @apiParam {Books} books
   * @apiParam {ObjectId[]} book._id
   * @apiParam {Posts} posts
   * @apiParam {string} status •	Atendiendo. •	Cerrado. Pendiente
   *
   * @apiParamExample {json} Request-Example:
   * {"firstName": "user50", "lastName": "lastname2", "username": "username50", "email": "demo_user@a.com", "password": "5636","posts": ["5abcedbbfb5dfb236c199e81","5abcededfb5dfb236c199e83"],"books": ["5ad3c175d4f5791f80c86742","5ad3c1d6d4f5791f80c86744"] }
   *
   * @apiUse UserResponseParams
   *
   * @apiSuccessExample {json} Success-Response Created User:
   * {"data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname2", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ "5abcedbbfb5dfb236c199e81", "5abcededfb5dfb236c199e83" ], "books": [ "5ad3c175d4f5791f80c86742", "5ad3c175d4f5791f80c86742" ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
   */

  public create(req: Request, res: Response): void {
    const hours: number = req.body.hours;
    const description: string = req.body.description;
    const customer: string = req.body.customer;
    const consultant: string = req.body.consultant;
    const companyId: string = req.body.companyId;


    const ticket = new Ticket({
      hours,
      description,
      consultant,
      customer,
      companyId
    });
    if (customer) {
      CustmersLogic.Instance().addTicketToCustomer(ticket._id, customer);
    }
    if (consultant) {
      ConsultantsLogic.Instance().addTicketToConsultant(ticket._id, consultant);
    }
    ticket
      .save()
      .then(data => {
        res.status(201).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  /**
   * @api {PUT} /users/:_id Request Update
   * @apiVersion  0.1.0
   * @apiName put
   * @apiGroup Users
   *
   *
   * @apiParam {ObjectId} _id Must be placed as QueryParam
   * @apiParam {string} [firstName]
   * @apiParam {string} [lastName]
   * @apiParam {string} [username]
   * @apiParam {string} [email]
   * @apiParam {string} [password]
   * @apiParam {Posts} [posts]
   * @apiParam {ObjectId[]} post._id
   * @apiParam {Books} [books]
   * @apiParam {ObjectId[]} book._id
   *
   * @apiExample Example usage:
   * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
   *
   * @apiParamExample {json} Request-Example:
   * { "lastName": "lastname21","books": [ "5ad3c1d6d4f5791f80c86744" ] }
   *
   * @apiSuccessExample {json} Success-Response:
   * { "data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname21", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ "5abcedbbfb5dfb236c199e81", "5abcededfb5dfb236c199e83" ], "books": [ "5ad3c175d4f5791f80c86742", "5ad3c1d6d4f5791f80c86744" ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
   */

  public update(req: Request, res: Response): void {
    const _id: string = req.params.ticketId;
    const customer: string = req.body.customer;
    const consultant: string = req.body.consultant;
    if (customer) {
      CustmersLogic.Instance().addTicketToCustomer(_id, customer);
    }
    if (consultant) {
      ConsultantsLogic.Instance().addTicketToConsultant(_id, consultant);
    }
    ConsultantsLogic.Instance().calculateAvgRatingById(_id);
    Ticket.findByIdAndUpdate({ _id: _id }, req.body)
      .then(() => {
        res.status(200).json({ data: true });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  /**
   * @api {DELETE} /users/:_id Request  Deleted
   * @apiVersion  0.1.0
   * @apiName deleteByToken
   * @apiGroup Users
   *
   *
   * @apiParam {ObjectId} _id Must be placed as QueryParam
   *
   * @apiExample Example usage:
   * https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a
   *
   * @apiSuccessExample {json} Success-Response:
   * {"data":true}
   */

  public delete(req: Request, res: Response): void {
    const _id: string = req.params.ticketId;

    Ticket.findByIdAndRemove({ _id: _id })
      .then(() => {
        CustmersLogic.Instance().removeTicket(_id);
        ConsultantsLogic.Instance().removeTicket(_id);
        res.status(200).json({ data: true });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }
  public changeTicket(req: Request, res: Response): void {
    const ticketId: string = req.params.ticketId;
    const newCustomer: string = req.body.newCustomer;
    const oldCustomer: string = req.body.oldCustomer;
    const newConsultant: string = req.body.newConsultant;
    const oldConsultant: string = req.body.oldConsultant;
    if (newCustomer && oldCustomer && !newConsultant && !oldConsultant) {
      CustmersLogic.Instance().changeTicketToCustomer(ticketId, newCustomer, oldCustomer);
      Ticket.findById(ticketId).then((ticket) => {
        ticket.customer = newCustomer;
        ticket.save();

      }).catch();
    }
    if (newConsultant && oldConsultant && !newCustomer && !oldCustomer) {
      ConsultantsLogic.Instance().changeTicketToConsultant(ticketId, newConsultant, oldConsultant);
      Ticket.findById(ticketId).then((ticket) => {
        ticket.consultant = newConsultant;
        ticket.save();

      }).catch();
    }
    if (newConsultant && oldConsultant && newCustomer && oldCustomer) {
      ConsultantsLogic.Instance().changeTicketToConsultant(ticketId, newConsultant, oldConsultant);
      CustmersLogic.Instance().changeTicketToCustomer(ticketId, newCustomer, oldCustomer);
      Ticket.findByIdAndUpdate(ticketId, {customer: newCustomer, consultant: newConsultant });
    }
      res.status(200).json({data: true});
  }

  // set up our routes
  public routes() {
    this.router.get("/bycompanyid/:companyId", this.all);
    this.router.get("/byticketid/:ticketId", this.oneById);
    this.router.post("/newticket", this.create);
    this.router.post("/changeticket/:ticketId", this.changeTicket);
    this.router.put("/:ticketId", this.update);
    this.router.delete("/:ticketId", this.delete);
  }
}
