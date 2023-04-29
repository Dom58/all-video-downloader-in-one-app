import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import "dotenv/config";
import router from './src/routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
// body parse configuration
app.use(express.urlencoded({ extended: true }));
// body parse configuration
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/api', router);

// Error handling to catch 404
app.all('*', (_req, res) => {
  res.status(404).json({
    error: 'address Not found',
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
