const express = require('express');

// Import our modular routers for /openai
const openAiRouter = require('./openai-route');


const app = express();

app.use('./openai-route', openAiRouter);


module.exports = app;
