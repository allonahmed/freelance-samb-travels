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
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Dakar",
  port: "3306"
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
app.get("/view_availability", (req, res) => {
  db.query(
    "Select * from Dakar.dakar_availability where COUNT = 6",
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

app.listen(8081, () => {
  console.log(`server is listening on port 8081`);
});
