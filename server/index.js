const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const { getCampaigns } = require ( '../db/index.js');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cors());

app.get('/campaigns/:username', function (req, res) {
  const username = req.params.username;
  // console.log("Server:", username);
  getCampaigns(username, (error, data) => {
    if (error) {
      console.log("server error:", error)
      res.status(500).send(error);
    } else {
      console.log("server success:", data);
      res.status(200).send(data);
    }
  });
});

app.listen(3011, function() {
  console.log('listening on port 3011!');
});

