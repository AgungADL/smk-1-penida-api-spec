const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel!' });
});

module.exports = app;