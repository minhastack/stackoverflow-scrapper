const express = require('express')
const cors = require('cors');
const app = express();

const routes = require('./src/routes/routes');
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));

