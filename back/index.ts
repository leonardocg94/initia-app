import express ,{ Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { testRouter } from './routes/testRoute';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/test', testRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
