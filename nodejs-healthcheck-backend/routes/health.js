var express = require('express');
var router = express.Router();

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

router.post('/', function(req, res){
  return req;
})

module.exports = router;