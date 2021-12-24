var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res) {
  res.render('index', {
    title : 'Giraffe'
  });
});

router.get('/devices', function (req, res) {
  res.render('devices', { // here instead of controller for demo
    title : 'Devices',
    load_id : 'f19dbf2edb3a0bd74b0524d960ff21eb',
    load_name : 'Load', // was Load the name or just the device type?
    load_value : '',
    blockheight_id : 'f7cb80bb41552f1ef77c527c83f6f64f',
    blockheight_name : 'Block Height',
    blockheight_value : '',
    pressure_id : 'a78578c428179b490a0461e76ba5f319',
    pressure_name : 'Pressure',
    pressure_value : ''
  });
});

router.get('/client', function (req, res) {
  // nothing here for demo
});

router.get('/client/:client_id', function (req, res) {
  //console.log(req.query);
  console.log(req.params);
  res.render('client', { // here instead of controller for demo
    title : 'Client ',
    client_id : req.params.client_id,
    load_name : 'Load',
    blockheight_name : 'Block Height',
    pressure_name : 'Pressure'
  });
});

router.get('/simulator', function (req, res) {
  res.render('simulator', { // here instead of controller for demo
    // perhaps use an array of devices... devices : ['a','b','c']
    title : 'Hardware Simulator',
    load_id : 'f19dbf2edb3a0bd74b0524d960ff21eb',
    load_name : 'Load',
    load_value : '',
    blockheight_id : 'f7cb80bb41552f1ef77c527c83f6f64f',
    blockheight_name : 'Block Height',
    blockheight_value : '',
    pressure_id : 'a78578c428179b490a0461e76ba5f319',
    pressure_name : 'Pressure',
    pressure_value : ''
  });
});

module.exports = router;
