const express = require('express');
const server = express();
const data = require('./data.js');

server.get("/movies", (req, res) => {
    res.status(200).json(data);
});

server.get('/movies/:reqId', (request, response)=>{

    const {reqId} = request.params;
    const movie = data.find((movie) => movie.id === parseInt(reqId));
    if(movie){
        response.status(200).json(movie);
    } else{
        response.status(400).send("Not found movies...")
    }
})

server.listen(5000,()=>{
    console.log("Server started on port 5000");
})