const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const routes = require("./src/routes");

require("./src/database");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server on...");
});
