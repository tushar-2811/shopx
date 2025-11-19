import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../../../packages/error-handler/error-middleware';

const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();

// cors setup
app.use(cors({
  origin : ["http://localhost:3000"],
  allowedHeaders : ['Authorization' , 'Content-Type'],
  credentials : true,
 })
);


app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API from auth service!' });
});

app.use(errorMiddleware);

const server = app.listen(port , () => {
    console.log(`Auth service listening at http://localhost:${port}/`);
})

server.on('error' , console.error);