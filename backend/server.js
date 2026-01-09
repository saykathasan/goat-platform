
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (_,res)=>res.send('GOAT Backend Running 🐐'));
app.listen(5000,()=>console.log('Backend started'));
