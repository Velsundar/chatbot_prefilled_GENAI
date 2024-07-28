require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chatbotRoutes = require("./routes/chatBotRoutes");
const cors = require("cors");
const config = require("./config");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(cors());
app.use(logger);

const dbURI = config.dbURI;
mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.use("/api", chatbotRoutes);

app.get("/", (req, res) => {
  res.send("Chatbot Server is Running");
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
