"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Company_1 = require("../models/Company");
const base64 = require("base-64");
/**
 * @apiDefine CompanyResponseParams
 * @apiSuccess {string} name
 * @apiSuccess {ObjectId} _id
 * @apiSuccess {Date} timestamp
 */
class CompaniesRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    /**
     * @api {GET} /companies/ Request all
     * @apiVersion  0.1.0
     * @apiName get
     * @apiGroup Company
     *
     *
     * @apiSampleRequest /companies/
     *
     * @apiSuccessExample {json} Success-Response a JSON-Array<company>:
     * {"data":[{"timestamp":"2018-08-07T14:52:39.369Z","_id":"5b69b23777093a04244fae68","name":"Compañia 1","__v":0},{"timestamp":"2018-08-07T14:52:55.489Z","_id":"5b69b24777093a04244fae69","name":"Compañia 2","__v":0}]}
     */
    all(req, res) {
        Company_1.default.find()
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {GET} /companies/:companyId Request by Object Id
     * @apiVersion  0.1.0
     * @apiName getByNameAndPassword
     * @apiGroup Company
     *
     *
     * @apiParam {ObjectId} b64(name:password) Must be provided as QueryParam
     *
     * @apiExample Example usage:
     * http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68/
     *
     * @apiSampleRequest /companies/
     *
     * @apiUse CompanyResponseParams
     *
     * @apiSuccessExample {json} Success-Response Company:
     * { "data": { "timestamp": "2018-08-07T14:52:39.369Z", "_id": "5b69b23777093a04244fae68", "name": "Compañia 1", "__v": 0 } }
     */
    oneById(req, res) {
        const strDecode = base64.decode(req.params.nameCompany);
        const name = strDecode.substring(0, strDecode.indexOf(":"));
        const password = strDecode.substring(strDecode.indexOf(":") + 1, strDecode.length);
        Company_1.default.find({ password: password, name: name })
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {POST} /companies/ Request New
     * @apiVersion  0.1.0
     * @apiName post
     * @apiGroup Company
     *
     *
     * @apiParam {string} name
     *
     * @apiParamExample {json} Request-Example:
     * { "name": "Compañia 21" }
     *
     * @apiUse CompanyResponseParams
     *
     * @apiSuccessExample {json} Success-Response Created Company:
     * { "data": { "timestamp": "2018-08-10T15:01:46.063Z", "_id": "5b6da8da15199540284396ce", "name": "Compañia 21", "__v": 0 } }
     */
    createComapy(req, res) {
        const name = req.body.name;
        const password = req.body.password;
        const company = new Company_1.default({
            name,
            password,
        });
        company
            .save()
            .then(data => {
            res.status(201).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {PUT} /companies/:companyId Request Update
     * @apiVersion  0.1.0
     * @apiName put
     * @apiGroup Company
     *
     *
     * @apiParam {ObjectId} companyId Must be placed as QueryParam
     *
     * @apiExample Example usage:
     * http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68
     *
     * @apiParamExample {json} Request-Example:
     * { "name": "Compañia 21" }
     *
     * @apiSuccessExample {json} Success-Response:
     * { "data": { "timestamp": "2018-08-10T15:01:46.063Z", "_id": "5b6da8da15199540284396ce", "name": "Compañia 21", "__v": 0 } }
     */
    update(req, res) {
        const _id = req.params.companyId;
        Company_1.default.findByIdAndUpdate({ _id: _id }, req.body)
            .then(data => {
            res.status(200).json({ data });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    /**
     * @api {DELETE} /companies/:companyId Request  Deleted
     * @apiVersion  0.1.0
     * @apiName deleteByToken
     * @apiGroup Company
     *
     *
     * @apiParam {ObjectId} companyId Must be placed as QueryParam
     *
     * @apiExample Example usage:
     * http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":true}
     */
    delete(req, res) {
        const _id = req.params.companyId;
        Company_1.default.findByIdAndRemove({ _id: _id })
            .then(() => {
            res.status(200).json({ data: true });
        })
            .catch(error => {
            res.status(500).json({ error });
        });
    }
    // set up our routes
    routes() {
        this.router.get("/", this.all);
        this.router.get("/:nameCompany", this.oneById);
        this.router.post("/", this.createComapy);
        this.router.put("/:companyId", this.update);
        this.router.delete("/:companyId", this.delete);
    }
}
exports.CompaniesRouter = CompaniesRouter;
//# sourceMappingURL=CompaniesRouter.js.map