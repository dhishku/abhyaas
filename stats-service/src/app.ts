import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { testTakerRouter } from './routes/testTakers';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(testTakerRouter);

app.all('*', async (req, res) => {
  throw new Error('404 Not Found');
});


export { app };
