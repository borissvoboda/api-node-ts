import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './openapi-spec.json';
import ships from './dummyData/ships';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/v1/ships', (req: Request, res: Response) => {
  res.json(ships);
});

app.post('/v1/ships', (req: Request, res: Response) => {
  console.log(req.body);
  ships.push({
    id: 13,
    name: 'USS Excelsior NX-2000',
    speed: '9.99999999',
  });

  console.log('Ships: ', ships);

  res.status(200).json({ message: 'ship added' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
