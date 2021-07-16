const express = require('express');
const bodyParser = require('body-Parser');
const mongodbConfig = require('./config/mongodb')

const productRoutes = require("./routes/product");

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

mongodbConfig.connect(()=>{
    console.log("connected to mongo")
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use('/product',productRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send("<h1>page not found</h1>")
});
   
app.listen(9001); 

console.log("server is listening on port 9001....");





