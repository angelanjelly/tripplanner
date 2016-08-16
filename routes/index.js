var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.hotel;
var Restaurant = models.restaurant;
var Activity = models.activity;




router.get('/', function (req, res, next) {
	var outerScopeContainer = {};
	Hotel.findAll()
	.then(function (dbHotels) {
	  outerScopeContainer.dbHotels = dbHotels;
	  return Restaurant.findAll();
	})
	.then(function (dbRestaurants) {
	  outerScopeContainer.dbRestaurants = dbRestaurants;
	  return Activity.findAll();
	})
	.then(function (dbActivities) {
	  res.render('index', {
	    templateHotels: outerScopeContainer.dbHotels,
	    templateRestaurants: outerScopeContainer.dbRestaurants,
	    templateActivities: dbActivities
	  });
	})
	.catch(next);
})


module.exports = router;

