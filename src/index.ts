import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  console.log('req', req.body)
  res.status(200).send('ok')
})

app.listen('4000', () => console.log('api listening'))


