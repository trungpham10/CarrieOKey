const express = require("./node_modules/express");
const app = express();
const PORT = 3003;
const path = require("path");

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));




















const usersController = require("./controllers/users_controller");
app.use("/", usersController);

app.listen(PORT, () => {
  console.log("listeing at port", PORT);
});
