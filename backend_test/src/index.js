const app  = require('./app');
const port = 3001;

//Create server and run
app.listen(port, ()=>{
    console.log("Server runs like Flash!");
});