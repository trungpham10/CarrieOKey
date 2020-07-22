const express = require("./node_modules/express");
const app = express();
const PORT = 3003;

app.listen(PORT, () => {
  console.log("listeing at port", PORT);
});
