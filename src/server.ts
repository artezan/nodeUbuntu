import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import * as path from "path";
import { BookRouter } from "./router/BookRouter";
import { PostRouter } from "./router/PostRouter";
import { TicketsRouter } from "./router/TicketsRouter";
import { CustomersRouter } from "./router/CustomersRouter";
import { ConsultantRouter } from "./router/ConsultantRouter";
import { CompaniesRouter } from "./router/CompaniesRouter";

class Server {
  public postRouter = new PostRouter();
  public ticketsRouter = new TicketsRouter();
  public customersRouter = new CustomersRouter();
  public consultantsRouter = new ConsultantRouter();
  public BookRouter = new BookRouter();
  public companiesRouter = new CompaniesRouter();

  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // application config
  public config(): void {
    const MONGO_URI: string =
      // "mongodb://cesar:180292@ds117469.mlab.com:17469/cesar";
      "mongodb://31.220.52.51:27017/db";
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI);

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.static("doc"));

    // cors
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Access-Control-Allow-Origin", "http://localhost:8100");
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      // tslint:disable-next-line:max-line-length
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  // application routes
  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use("/", router);
    this.app.use("/api/v1/posts", this.postRouter.router);
    this.app.use("/api/v1/companies", this.companiesRouter.router);
    this.app.use("/api/v1/consultants", this.consultantsRouter.router);
    this.app.use("/api/v1/customers", this.customersRouter.router);
    this.app.use("/api/v1/tickets", this.ticketsRouter.router);
    this.app.use("/api/v1/books", this.BookRouter.router);
  }
}

// export
export default new Server().app;
