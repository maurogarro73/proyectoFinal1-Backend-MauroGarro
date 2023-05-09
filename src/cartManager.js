import fs from 'fs';

class CartManager {
  id = 1;
  constructor(path) {
    this.path = path;
  }

  async createCart() {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.path, '[]');
      }

      let carts = [];
      let cartsContent = await fs.promises.readFile(this.path, 'utf-8');
      carts = JSON.parse(cartsContent);

      if (carts.length > 0) {
        this.id = carts[carts.length - 1].idCart + 1;
      }

      const newCart = {
        idCart: this.id,
        products: [],
      };

      carts.push(newCart);
      let cartString = JSON.stringify(carts, null, 2);
      await fs.promises.writeFile(this.path, cartString);
      return 'Created Cart!';
    } catch (error) {
      console.log(error);
    }
  }

  async getCarts() {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.patch, '[]');
      }
      let carts = [];
      let cartContent = await fs.promises.readFile(this.path, 'utf-8');
      carts = JSON.parse(cartContent);
      return carts;
    } catch (error) {
      console.log(error);
    }
  }
}

export default CartManager;
