var express = require('express');
var router = express.Router();

const { prisma } = require('../generated/prisma-client')

var SlackWebhook = require('slack-webhook')
var slack = new SlackWebhook(process.env.SLACK_WEBHOOK);

router.get('/', async function(req, res) {
  const allEndpoints = await prisma.endpoints();
  res.json(allEndpoints);
});

router.get('/:id', async function(req, res) {

  const { id } = req.params;
  const endpoint = await prisma.endpoint({ id });
  res.json(endpoint)
  
});

router.put("/:id", async function(req, res){

  const { id } = req.params;
  const time = new Date();
  const convertedTime = time.toISOString;

  currentStatus = await prisma.endpoint({ id });

  if(currentStatus.is_working === true && req.body.is_working === false){
    await slack.send(":warning: Error found in: `" + currentStatus.name + "`. Please check and if this continues contact CCP directly.");
  }

  if(currentStatus.is_working === false && req.body.is_working === true){
    await slack.send(":heavy_check_mark: The issue has been resolved with: `" + currentStatus.name + "`. Please double check and make sure.");
  }

  const endpoint = await prisma.updateEndpoint({
    where: { id },
    data: {
      is_working: req.body.is_working,
      last_checked: convertedTime,
    },
  })

  res.json(endpoint)

});

router.post('/', async function(req, res){

  //store into simple variables
  let endpoint_name = req.body.name;
  let endpoint_file = req.body.filename;

  console.log(endpoint_file);
  console.log(endpoint_name);

  //connect to prisma to create the new endpoint, using the data used in the post request.
  const result = await prisma.createEndpoint({
    name: endpoint_name,
    is_working: true,
    file_name: endpoint_file
  });

  res.json(result);

});

router.get('/:id/errors', async function(req, res){
  const { id } = req.params;

  const errorsOnEndpoint = await prisma
  .endpoint( { id } )
  .errors();

  res.json(errorsOnEndpoint);

});

router.post('/:id/error', async function(req, res){

  let request = req.body;
  console.log(request);

  const error_result = await prisma.createError({
      endpoint: { connect: { id: request.endpoint } },
      notes: request.notes,
  });

  res.json(error_result);

})

module.exports = router;