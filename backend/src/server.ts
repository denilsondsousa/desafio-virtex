import express from 'express';
import routes from './routes/routes';
import cors from 'cors';

import 'reflect-metadata';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server running in port', 3333);
});
