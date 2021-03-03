
const express = require('express');
const app = express();

//Load routes
const coachRoutes = require('./routes/coach.routes');
const directorRoutes = require('./routes/director.routes');
const recruitRoutes = require('./routes/recruit.routes');
const recruiterRoutes = require('./routes/recruiter.routes');
const userRoutes = require('./routes/user.routes');

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Config headers and cors
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Credentials','true');
	res.header('Access-Control-Allow-Origin','http://localhost:3000');
	res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
	next();
	// res.header('Access-Control-Allow-Origin', '*');
 //    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
 //    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
 //    res.header('Allow', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
 //    next();
});

app.use('/api',
			coachRoutes,
			directorRoutes,
			recruitRoutes,
			recruiterRoutes,
			userRoutes);

module.exports = app;