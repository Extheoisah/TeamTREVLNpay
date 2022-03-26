const express = require('express');
const {ApolloClient, HttpLink, InMemoryCache} = require('@apollo/client');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 6000;
const router = express.Router();
const controller = require('./controllers/controller');
require('dotenv').config();
const Knex = require('knex');
const knexConfig = require('./knexfile');

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router.route('/payments')
    .get(controller.getPayments);

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Running On Port ${PORT}`)
});