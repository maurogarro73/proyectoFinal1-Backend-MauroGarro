import express from 'express';
import { productsRouter } from './routes/products.router.js';
import { cartsRouter } from './routes/carts.router.js';
import { __dirname } from './utils.js';
import path from 'path';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('*', (req, res) => {
  return res.status(404).json({ status: 'error', message: 'No encontrado' });
});
