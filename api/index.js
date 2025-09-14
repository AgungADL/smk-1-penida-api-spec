const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Perbaikan: Konfigurasi Swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

const swaggerOptions = {
  // Ini harus menjadi URL di mana Express Anda akan menyajikan file YAML
  swaggerUrl: '/swagger.yaml',
};

// Rute untuk menyajikan file YAML itu sendiri
app.get('/swagger.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, 'swagger.yaml'));
});

// Ini adalah rute untuk dokumentasi Swagger UI
// Sekarang Swagger UI akan tahu harus mengambil data dari '/swagger.yaml'
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Rute 'hello' yang sudah benar
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel!' });
});

module.exports = app;