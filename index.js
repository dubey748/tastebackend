const express = require("express");
const app = express();
const port = 5000;

const mongoDB = require("./db");
mongoDB();

// Set CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://tasteapp.onrender.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/CreatUser"));
app.use("/api", require("./Routes/Login"));
app.use("/api", require("./Routes/DisplayFoodData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/MyOrder"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
