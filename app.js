//express js
const express =require("express");
const app = express();


//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine" , "pug");
app.set("views" , "views");
app.use(express.static("public"));

//routes
const routes = require("./routes/routes");
const errorController = require('./controllers/404.js');
app.use("/" , routes);
// error
app.use(errorController.get404);

//listen to port
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
}
);