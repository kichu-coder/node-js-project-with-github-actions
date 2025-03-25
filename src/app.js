import express from 'express';
import cors from 'cors';
import apiRouter from "./router/api.js";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api', apiRouter);


export default app