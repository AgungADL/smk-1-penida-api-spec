const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Gunakan Swagger UI untuk menampilkan dokumentasi di URL root
// 'swaggerUrl: /swagger.yaml' memberitahu Swagger UI untuk mengambil file dari URL ini.
app.use('/', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerUrl: '/swagger.yaml',
  explorer: true
}));

// Rute API Anda yang sudah ada
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel!' });
});

module.exports = app;