//Import modules
import express from "express";
import config from "./config.js";

//Import files
import apiRoutes from "./routes/apiRoutes.js";

//Initialize
const app = express();

//Configuration
app.set("port", config.PORT);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiRoutes);

//Routes

//Start
app.listen(app.get("port"), () => {
  console.log(`App running on port ${app.get("port")}`);
});
