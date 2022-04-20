const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());
const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  methods: ["GET", "POST"],
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const mysql = require("mysql");
const { query } = require("express");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Dakar",
  port: "3306",
  multipleStatements: true
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, id, description } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: description,
      payment_method: id,
      confirm: true
    });
    console.log("payment:", payment);
    res.json({
      message: "Payment successful",
      success: true
    });
  } catch (error) {
    console.log("error:", error);
    res.json({
      message: "Payment failed",
      success: false
    });
  }
});

//make this a post request so we can pick what the count should be;
app.post("/view_availability", (req, res) => {
  const roomCount = req.body.roomCount;
  db.query(
    "Select * from Dakar.dakar_availability where (COUNT + (?)) > 6",
    [roomCount],
    (error, result) => {
      if (error) {
        res.send(error);
        console.log("failed");
      } else {
        res.send(result);
      }
    }
  );
});
//send customer information to db

app.post("/send-info", (req, res) => {
  const data = req.body;
  const query1 = "insert into dakar.customer_information (values)";
  db.query();
});

app.listen(8083, () => {
  console.log(`server is listening on port 8083`);
});
