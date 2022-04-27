//Import modules
import express from "express";
import config from "./config.js";
import session from "express-session";
import MySQLStore from "express-mysql-session";

//Import files
import apiRoutes from "./routes/api_routes.js";
import { database } from "./secret.js";

//Initialize
const app = express();

//Configuration
app.set("port", config.PORT);

//Middleware
app.use(
  session({
    secret: "spendioSecretSession",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiRoutes);

//Routes
app.use(apiRoutes);

//Setup server port
app.listen(app.get("port"), () => {
  console.log(`App running on port ${app.get("port")}`);
});
