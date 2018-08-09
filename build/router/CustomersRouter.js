"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Customer_1 = require("../models/Customer");
const multer = require("multer");
const path = require("path");
/**
 * @apiDefine CustomersResponseParams
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
class CustomersRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    /**
     * @api {GET} /customers/ Request all
     * @apiVersion  0.1.0
     * @apiName get
     * @apiGroup Users
     *
     *
     * @apiSampleRequest /customers/
     *
     * @apiSuccessExample {json} Success-Response a JSON-Array<user>:
     * {"data":[
     * {"createdAt": "2018-04-15T22:08:19.645Z", "updatedAt": "2018-04-15T22:08:19.645Z", "firstName": "user102", "lastName": "last102", "username": "user102", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 } ], "_id": "5ad3cd5346a90e3d1c9c09a1", "__v": 0 }, { "createdAt": "2018-04-15T22:13:52.471Z", "updatedAt": "2018-04-15T22:13:52.471Z", "firstName": "user25", "lastName": "last25", "username": "username25", "email": "algo@a456.com", "password": "5636", "posts": [ { "timestamp": "2018-07-29T15:08:01.298Z", "title": "algo", "slug": "", "content": "", "featuredImage": "", "category": "c", "published": false, "_id": "5abbfcc0734d1d56e20469e2" }, { "timestamp": "2018-03-29T13:45:17.776Z", "title": "Post4", "slug": "post2", "content": "algo contenido", "featuredImage": "imagen", "category": "category", "published": true, "_id": "5abcededfb5dfb236c199e83", "__v": 0 } ], "books": [ { "createAt": "2018-04-15T21:19:18.433Z", "name": "libro2", "pages": 50, "_id": "5ad3c1d6d4f5791f80c86744", "__v": 0 }, { "createAt": "2018-04-15T21:17:41.101Z", "name": "libro1", "pages": 40, "_id": "5ad3c175d4f5791f80c86742", "__v": 0 }, { "createAt": "2018-04-15T21:19:36.520Z", "name": "libro4", "pages": 150, "_id": "5ad3c1e8d4f5791f80c86746", "__v": 0 } ], "_id": "5ad3cea0206c9611d0a7906c", "__v": 0 }
     * ]}
     */
    all(req, res) {
        const companyId = req.params.companyId;
        Customer_1.default.find({ companyId: companyId })
            .populate("tickets")
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {GET} /customers/:_id Request by Object Id
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
    oneById(req, res) {
        const customerId = req.params.customerId;
        Customer_1.default.findById(customerId)
            .populate("tickets")
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {POST} /customers/ Request New
     * @apiVersion  0.1.0
     * @apiName post
     * @apiGroup Users
     *
     *
     * @apiParam {string} [logo]
     * @apiParam {string} name
     * @apiParam {string} [lastName]
     * @apiParam {string} [adress]
     * @apiParam {tickets[]} tickets._id
     * @apiParam {number} totalHours
     * @apiParam {number} phone
     * @apiParam {string} email
     * @apiParam {string} workArea
     *
     * @apiParamExample {json} Request-Example:
     * {"firstName": "user50", "lastName": "lastname2", "username": "username50", "email": "demo_user@a.com", "password": "5636","posts": ["5abcedbbfb5dfb236c199e81","5abcededfb5dfb236c199e83"],"books": ["5ad3c175d4f5791f80c86742","5ad3c1d6d4f5791f80c86744"] }
     *
     * @apiUse UserResponseParams
     *
     * @apiSuccessExample {json} Success-Response Created User:
     * {"data": { "createdAt": "2018-07-29T15:07:59.022Z", "updatedAt": "2018-07-29T15:07:59.022Z", "firstName": "user501", "lastName": "lastname2", "username": "username501", "email": "demo_user@a.com", "password": "5636", "posts": [ "5abcedbbfb5dfb236c199e81", "5abcededfb5dfb236c199e83" ], "books": [ "5ad3c175d4f5791f80c86742", "5ad3c175d4f5791f80c86742" ], "_id": "5b5dd84f7c124a2554381c90", "__v": 0 } }
     */
    create(req, res) {
        const logo = req.body.logo;
        const name = req.body.name;
        const adress = req.body.adress;
        const tickets = req.body.tickets;
        const totalHours = req.body.totalHours;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
        const workArea = req.body.workArea;
        const companyId = req.body.companyId;
        const customer = new Customer_1.default({
            logo,
            name,
            adress,
            tickets,
            totalHours,
            phone,
            email,
            workArea,
            password,
            companyId
        });
        customer
            .save()
            .then(data => {
            res.status(201).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {PUT} /customers/:_id Request Update
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
    update(req, res) {
        const _id = req.params.customerId;
        Customer_1.default.findByIdAndUpdate({ _id: _id }, req.body)
            .then(() => {
            res.status(200).json({ data: true });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {DELETE} /customers/:_id Request  Deleted
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
    delete(req, res) {
        const _id = req.params.customerId;
        Customer_1.default.findByIdAndRemove({ _id: _id })
            .then(() => {
            res.status(200).json({ data: true });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    uploadFile(req, res) {
        const storage = multer.diskStorage({
            destination: "./build",
            // tslint:disable-next-line:no-shadowed-variable
            filename: (req, file, cb) => {
                cb(
                // tslint:disable-next-line:no-null-keyword
                null, file.fieldname + "-" + path.parse(file.originalname).name + path.extname(file.originalname));
            }
        });
        const upload = multer({
            storage
        }).single("imagen1");
        upload(req, res, ((err) => {
            if (err) {
                res.status(500).json({ err });
            }
            else {
                res.status(200).json({ data: req.file.path });
            }
        }));
    }
    // set up our routes
    routes() {
        this.router.get("/bycompanyid/:companyId", this.all);
        this.router.get("/bycustomerid/:customerId", this.oneById);
        this.router.post("/", this.create);
        this.router.put("/:customerId", this.update);
        this.router.delete("/:customerId", this.delete);
        this.router.post("/uploadImg", this.uploadFile);
    }
}
exports.CustomersRouter = CustomersRouter;
//# sourceMappingURL=CustomersRouter.js.map