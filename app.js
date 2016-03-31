//===================== modules =====================
var express                 = require('express'),
    mongoose                = require('mongoose'),
    morgan                  = require('morgan'),
    bodyParser              = require('body-parser'),
    methodOverride          = require('method-override');
    Nominee                 = require('./app/models/nominee-model');
var app = express();

//===================== Config =====================
// var db = require('./config/db');
var mongoUri = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
  	'mongodb://localhost:27017/GSV-HoF';
mongoose.connect(mongoUri);
mongoose.connection.on("open", function(){
  console.log("Connected to database");
});

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public/build'));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//===================== Routes =====================

var routes = require('./app/routes/api.js')(app); // configure our routes

//===================== Start ======================
app.set('port', (process.env.PORT || 7000));
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});
exports = module.exports = app;


