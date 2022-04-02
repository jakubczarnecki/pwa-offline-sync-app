const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = require("./config");
const notesRouter = require("./routers/notesRouter");

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

//routing
app.use("/api/notes", notesRouter);

//mongo database connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connected to MongoDB.");
  }
);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
