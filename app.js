var express = require('express');
var app = express();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  //res.send({
    res.json(req.apiGateway.event)
    //"Body": req.body,
    //"Headers": req.headers
  //});
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
