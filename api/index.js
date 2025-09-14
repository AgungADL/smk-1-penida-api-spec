const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Gunakan middleware untuk menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'swagger.yaml')));

// Muat file swagger.yaml dari folder 'public'
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Konfigurasi Swagger UI untuk mencari file YAML di URL
const swaggerOptions = {
  // URL ini sekarang disajikan oleh express.static
  swaggerUrl: '/swagger.yaml',
};

// Gunakan Swagger UI untuk menampilkan dokumentasi di URL root
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Rute API Anda yang sudah ada
app.get('/hello', (req, res) => {
 res.status(200).json({ message: 'Hello from Vercel!' });
});

module.exports = app;