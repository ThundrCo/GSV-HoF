var express = require('express');
var mongoose = require('mongoose');
var Nominee = require('../models/nominee-model');
var GoogleSpreadsheets = require('google-spreadsheets');

module.exports = function(app){
	//===================== API Routes =====================

	//===================== Server Routes =====================
	app.get('*',function(req,res){
		res.sendFile('build/index.html',{root:'public/'});
	})

}