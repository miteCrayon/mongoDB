const express = require("express");
const mongodb = require("./mongoose");
const Customer = require("./mongoose/schemas/customer");

const app = express();

mongodb.connect();

app.listen(3000, () => {
    console.log('Server start on Port 3000.');
    console.log('hello!')
});

app.get("/customers", async(req, res) => {
    const customers = await Customer.find();
    res.send(customers);
    console.log(customers);
});

app.post("/customer/insert", async(req, res) => {
    const newCustomers = await Customer.create({})
    console.log(newCustomers);
});