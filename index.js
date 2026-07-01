// console.log("Hello World");
require('dotenv').config()

const express = require('express');

const app = express();

const port = 3000;//server humara iske help se listen karega

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('pushdotcom')
})

app.get(('/login'),(req,res)=>{
res.send('<h1>Please Login Website</h1>');
})
app.get(('/youtube'),(req,res)=>{
res.send('<h2>Kunal Kushwaha</h2>');
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(process.env.PORT,()=>{
console.log(`Example app listening on port ${port}`);
});