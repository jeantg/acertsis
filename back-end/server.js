const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');
app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(routes);
app.listen(process.env.PORT || 3333);
