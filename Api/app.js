const express =require('express');
const app= new express();

const port = 3000;

const cors = require('cors');
var bodyparser= require('body-parser');
app.use(cors());
app.use(bodyparser.json());

const productRouter= require('./src/routes/productroutes')(app);
app.use('/',productRouter);

app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
