import express from 'express';
import CartManager from '../cartManager.js';

const container = new CartManager('./src/data/carts.json');

export const cartsRouter = express.Router();

cartsRouter.get('/', async (req, res) => {
  try {
    const limit = req.query.limit;
    const carts = await container.getCarts();
    if (limit) {
      return res.status(200).json(carts.slice(0, limit));
    } else {
      return res.status(200).json(carts);
    }
  } catch (error) {
    console.log(error);
  }
});

cartsRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await container.getCartsById(id);
    if (cart) {
      return res.status(201).json(cart);
    } else {
      return res.status(400).json({ error: 'Cart not found' });
    }
  } catch (error) {
    console.log(error);
  }
});

cartsRouter.post('/', async (req, res) => {
  try {
    const data = await container.createCart();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});
