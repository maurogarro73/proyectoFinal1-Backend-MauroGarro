import express from 'express';
import CartManager from '../cartManager.js';

const container = new CartManager('./src/data/carts.json');

export const cartsRouter = express.Router();

cartsRouter.get('/', async (req, res) => {
  const data = await container.getCarts();
  return res.status(200).json(data);
});

cartsRouter.post('/', async (req, res) => {
  const data = await container.createCart();
  return res.status(200).json(data);
});
