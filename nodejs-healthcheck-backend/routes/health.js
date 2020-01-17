var express = require('express');
var router = express.Router();

const { prisma } = require('../generated/prisma-client')

var SlackWebhook = require('slack-webhook')
var slack = new SlackWebhook(process.env.SLACK_WEBHOOK);

router.get('/', function(req, res) {
  return res.send(
    {
      "CCP Orders Endpoint": {
        "status": 1,
        "last_checked": "dateGoesHere",
        "last_error": {
          "time_of_record": "DateTime",
          "error_notes": "http-header"
        }
      },
      "CCP Products Endpoint": 1,
      "CCP Customers Endpoint": 1,
      "Flight Graphql Endpoint": 1,
      "Shopify Status": 1
    }
  );
});

router.get('/:uid', function(req, res) {
  return res.send(
    {
      "id": 123123,
      "name": "CCP Orders Endpoint",
      "status": 1,
      "last_checked": "dateGoesHere",
      "last_error": {
        "time_of_record": "DateTime",
        "error_notes": "http-header"
      }      
    }
  )
});

router.post('/', async function(req, res){

  let endpoint_name = req.body.name;

  const result = await prisma.createEndpoint({
    name: endpoint_name
  })
  res.json(result);
});

router.post('/:uid/error', function(req, res){

  let request = req.body;
  console.log(request);

  slack.send(":warning: Error found in: `" + request.endpoint + "`. Please check and if this continues contact CCP directly.");

  return res.send({
    "success": true
  })

})

module.exports = router;