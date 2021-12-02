require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const configuration = require("./configs/configuration");
const ConnectDB = require("./configs/database");
const router = require("./Routers");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
ConnectDB();
router(app);

const PORT_SV = configuration.PORT_SV;
app.listen(PORT_SV, () => {
  console.log("Server is running at port: ", PORT_SV);
});
