const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

app.get("/swagger.yaml", (req, res) => {
    res.sendFile(path.join(__dirname, "swagger.yaml"));
});

const swaggerOption = {
    swaggerUrl: '/swagger.yaml'
};

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOption));

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel!' });
});

module.exports = app;