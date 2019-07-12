const express = require('express');
const massive = require('massive');
const app = express();
const {getInventory, updateProducts, createProducts, deleteProducts} = require('./controller/controller');
require('dotenv').config();
const {CONNECTION_STRING, SERVER_PORT} = process.env;
    console.log(CONNECTION_STRING, SERVER_PORT);

app.use(express.json());

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('Waiting for your command Master.')
});


app.get('/api/inventory', getInventory);

app.put('/api/products/:product_id', updateProducts);

app.post('/api/products', createProducts);

app.delete('/api/products/:product_id', deleteProducts);

app.listen(SERVER_PORT, () => console.log(`It... Is.... ALIIIIIIVVVEEEE!!! ${SERVER_PORT}`));