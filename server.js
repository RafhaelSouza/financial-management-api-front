const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/financial-management-api-front'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/financial-management-api-front/index.html');
});

app.listen(process.env.PORT || 4200);
