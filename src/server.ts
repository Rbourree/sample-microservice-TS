// ***** Libs *****
import * as BodyParser from 'body-parser';
import * as Express from 'express';
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as session from "express-session";

// ***** Routing *****
import { userRouting } from "./controllers/auth/index.routing"

dotenv.config();

const app = Express();
const port = process.env.PORT || 3000;

// ***** Config Server *****
app.use(BodyParser.json({ limit: '100mb' }))
app.use(BodyParser.urlencoded({ extended: true, limit: '100mb' }))
app.use(cors());

app.use(session({
	secret: "azerty",
	resave: false,
	saveUninitialized: true
  }));

// ***** Start Server *****
module.exports = app.listen(port, () => {
	userRouting(app);
	console.log('Microservice %s listening on', process.env.SERVICE_NAME, port)
	// postgres.authenticate();
});