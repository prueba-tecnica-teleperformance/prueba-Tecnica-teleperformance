const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

// conectamos con DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, ()=>
{
	console.log('el servidor esta corriendo perfectamente.');
})