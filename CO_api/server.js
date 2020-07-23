const express = require("./node_modules/express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3003;
const path = require("path");

// connections
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/song";
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//middleware

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
const whitelist = ["http://localhost:3000"]; //need to add heruko link once created
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

//controllers

const usersController = require("./controllers/users_controller");
app.use("/users", usersController);

const songController = require("./controllers/song_controller.js");
app.use("/song", songController);

// const favoriteController = require("./controllers/favorite_controller.js");
// app.use("/favorite", favoriteController);

app.listen(PORT, () => {
  console.log("listeing at port", PORT);
});
