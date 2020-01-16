const express = require('express');
const cron = require("node-cron");
const app = express();

const ccpOrders = require('./jobs/ccpOrders');
const ccpProducts = require('./jobs/ccpProducts');
const ccpCustomer = require('./jobs/ccpCustomers');
const ekFlight = require('./jobs/ekFlight');
const ekShopify = require('./jobs/ekShopify');

cron.schedule("5 * * * *", () => {
    console.log("Checking API Endpoints");

})

app.listen(4130);