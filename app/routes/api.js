var express = require('express');
var mongoose = require('mongoose');
var Nominee = require('../models/nominee-model');

module.exports = function(app){
	//===================== API Routes =====================

	//===================== Server Routes =====================
	app.get('*',function(req,res){
		res.sendFile('build/index.html',{root:'public/'});
	})

	app.get('/api/test', function(req,res){

	});

}