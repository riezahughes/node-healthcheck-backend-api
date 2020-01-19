require('dotenv').config();

const express = require('express');
const cron = require("node-cron");
const app = express();

const ccpOrders = require('./jobs/ccpOrders');
const ccpProducts = require('./jobs/ccpProducts');
const ccpCustomers = require('./jobs/ccpCustomers');
const ekFlight = require('./jobs/ekFlight');
const ekShopify = require('./jobs/ekShopify');
const axios = require("axios");

const ccpCustomersEndpoint = "http://localhost:4090/health/" + process.env.ccpCustomers;

const ccpProductsEndpoint = "http://localhost:4090/health/" + process.env.ccpProducts;

const ccpOrdersEndpoint = "http://localhost:4090/health/" + process.env.ccpOrders;

console.log("started"); 

cron.schedule('*/5 * * * *', async () => {
    let cronTime = new Date();
    let convertedTime = cronTime.toISOString;
    
    console.log("Checking API Endpoints");

    //check the orders api. uses the shipping endpoint to make sure it's okay. (getShipping);

    let checkOrders = await ccpOrders();
    if(checkOrders === false){
        //mark the error for this in the database
        console.log("Orders have Failed");

        axios.post(ccpOrdersEndpoint + "/error", {
            endpoint: process.env.ccpOrders,
            notes: "Could not make a connection."
        });

        axios.put(ccpOrdersEndpoint, {
            is_working: false,
            last_checked: convertedTime
        });   

    }else if(checkOrders === true){
        console.log("Orders OK");
        axios.put(ccpOrdersEndpoint, {
            is_working: true,
            last_checked: convertedTime
        });            
    }else{
        console.log("Orders being wierd.");
    }

    //check the products api. uses a specific barcode to make sure it's fine (getProductByBarcode).

    let checkProducts = await ccpProducts();
    if(checkProducts === false){

        //mark the error for this in the database
        console.log("Products have Failed");

        axios.post(ccpProductsEndpoint + "/error", {
            endpoint: process.env.ccpProducts,
            notes: "Could not make a connection."
        });

        axios.put(ccpProductsEndpoint, {
            is_working: false,
            last_checked: convertedTime
        });        

    }else if(checkProducts === true){

        axios.put(ccpProductsEndpoint, {
            is_working: true,
            last_checked: convertedTime
        });     

        console.log("Products OK");
    }else{
        console.log("Products Being Wierd");
    }    

    //check the customer api. uses a specific customer to make sure it's fine.(getCustomerByID)

    let checkCustomers = await ccpCustomers();
    if(checkCustomers === false){
        //mark the error for this in the database
        console.log("Customers have Failed");

        axios.post(ccpCustomersEndpoint + "/error", {
            endpoint: process.env.ccpCustomers,
            notes: "Could not make a connection."
        });

        axios.put(ccpCustomersEndpoint, {
            is_working: false,
            last_checked: convertedTime
        });   

    }else if(checkCustomers === true){
        console.log("Customers OK");
        axios.put(ccpCustomersEndpoint, {
            is_working: true,
            last_checked: convertedTime
        });            
    }else{
        console.log("Customers Being Wierd");
    }

    
})

console.log("Cron job application has booted. All checks should appear below:");
app.listen(4110);