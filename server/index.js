const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const mongoose = require("mongoose");
const webpush = require("web-push");
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

webpush.setVapidDetails(
   "mailto:test@test.com",
   process.env.PUBLIC_SUB_KEY,
   process.env.PRIVATE_SUB_KEY
);

// mongo database connection - localhost
mongoose.connect(
   config.DBHost,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   },
   (err) => (err ? console.log(err) : console.log("Connected to database"))
);

app.listen(PORT, () => {
   console.log(`Server started at port ${PORT}`);
});
