const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

//#######################################################
app.use("/api/send-message", require("./RouterApi/SendEmail"));
app.get("/test", (req, res) => {
  res.send("Backend is working");
});

//#######################################################
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 3600}`
  );
});
