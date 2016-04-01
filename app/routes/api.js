var express = require('express');
var mongoose = require('mongoose');
var Nominee = require('../models/nominee-model');

module.exports = function(app){
	//===================== API Routes =====================

	//API - GET Votes
	app.get('/api/hof', function(req,res){
		Nominee.find(function(err, noms) {
			if (err)
				res.send(err);
			res.json(noms);
		});

	});
	//API - POST Vote
	app.post('/api/hof', function(req,res){
		var nominee = new Nominee(); 

		nominee.nomineeID = req.body.nomineeID;
		nominee.voterName = req.body.voterName;
		nominee.firstName = req.body.firstName;
		nominee.lastName = req.body.lastName;
		nominee.rank = req.body.rank; 

		nominee.save(function(err) {
		    if (err)
		        res.send(err);
		    res.json({ message: 'Vote Saved!' });
		});  
	});

	//API - DELETE ALL ENTRIES
	app.delete('/api/hof',function(req,res){
		Nominee.remove({}, function(err, nom) {
			if (err)
			    res.send(err);
			res.json({message:'Successfully deleted all entries'});
		});
	})


	//===================== Server Routes =====================
	app.get('*',function(req,res){
		res.sendFile('build/index.html',{root:'public/'});
	})

}