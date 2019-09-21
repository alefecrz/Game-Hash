const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send("Welcome the Game Hash");
})

app.listen(port, 
    function (){ 
        console.log("Running in port 3000."); 
    } 
);
