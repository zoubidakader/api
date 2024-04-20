const express=require('express');    
const app=express();
const port=3000;
app.use(express.json());

app.get('/get',(req,res)=>{
    console.log("GET request successfull");
    res.send("GET request successfull");
});

app.put('/put',(req,res)=>{
    console.log("PUT request successfull");
    console.log(req.body);
    res.send('Data Update Request Received');
});

app.post('/post',(req,res)=>{
    console.log("POST request successfull");
    console.log(req.body);
    res.send('Data Insert Request Received');
});

app.delete('/delete',(req,res)=>{
    console.log("DELETE request successfull");
    res.send('Data Delete Request Received');
});

app.get('/',(req,res)=>{
    console.log("GET request successfull");
    res.send("GET request successfull");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});