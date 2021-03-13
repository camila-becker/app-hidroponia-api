const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.listen(3000, () => {
  console.log("Server on...");
});
