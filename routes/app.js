var express = require('express');
var router = express.Router();
var request = require('request');

var apiKey = '&key=AIzaSyBUDvfbMui76Vpdpqib3MNRUQgWu-Aa8zs';
router.get('/', function (req, res, next) {
    res.render('index');
});


router.get('/restaurants', function(req, res, next) {   
  request({
    uri: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location='+
    req.query.location+
    apiKey
  }).pipe(res);
});

router.get('/restaurant-id', function(req, res, next) {   
  request({
    uri: 'https://maps.googleapis.com/maps/api/place/details/json?' +
            'placeid=' + req.query.placeId +
            apiKey
  }).pipe(res);
});

/*'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location='+req.query.location+'&key=AIzaSyBUDvfbMui76Vpdpqib3MNRUQgWu-Aa8zs'

latitude+','+longitude+
        this.apiKey;*/

module.exports = router;
