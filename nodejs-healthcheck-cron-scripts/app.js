require('dotenv').config();

const express = require('express');
const cron = require("node-cron");
const app = express();

const ccpOrders = require('./jobs/ccpOrders');
const ccpProducts = require('./jobs/ccpProducts');
const ccpCustomers = require('./jobs/ccpCustomers');
const ekFlight = require('./jobs/ekFlight');
const ekShopify = require('./jobs/ekShopify');

cron.schedule('*/5 * * * * *', async () => {

    console.log("Checking API Endpoints");

    //check the orders api. uses the shipping endpoint to make sure it's okay.

    let checkOrders = await ccpOrders();
    if(checkOrders === false){
        //mark the error for this in the database
        console.log("Orders have Failed");
    }else if(checkOrders === true){
        console.log("Orders OK");
    }else{
        console.log("Orders being wierd.");
    }

    //check the products api. uses a specific barcode to make sure it's fine.

    let checkProducts = await ccpProducts();
    if(checkProducts === false){
        //mark the error for this in the database
        console.log("Products have Failed");
    }else if(checkProducts === true){
        console.log("Products OK");
    }else{
        console.log("Products Being Wierd");
    }    

    let checkCustomers = await ccpCustomers();
    if(checkCustomers === false){
        //mark the error for this in the database
        console.log("Customers have Failed");
    }else if(checkCustomers === true){
        console.log("Customers OK");
    }else{
        console.log("Customers Being Wierd");
    }        
})

console.log("Cron job application has booted. All checks should appear below:");
app.listen(4130);