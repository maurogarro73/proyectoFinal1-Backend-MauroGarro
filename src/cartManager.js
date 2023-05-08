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
        this.id = carts[carts.length - 1].id + 1;
      } else {
        this.id;
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

  /* async getProducts() {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.path, '[]');
      }
      let products = [];

      let productsContent = await fs.promises.readFile(this.path, 'utf-8');
      products = JSON.parse(productsContent);
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.path, '[]');
      }
      let products = [];
      let productsContent = await fs.promises.readFile(this.path, 'utf-8');
      products = JSON.parse(productsContent);

      const productFound = products.find((item) => item.id == id);
      if (productFound) {
        return productFound;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id, modifyProduct) {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.path, '[]');
      }
      let products = [];
      let productsContent = await fs.promises.readFile(this.path, 'utf-8');
      products = JSON.parse(productsContent);

      const { title, description, price, thumbnail, stock } = modifyProduct;
      let indexProduct = products.findIndex((index) => index.id === id);
      if (indexProduct !== -1) {
        products[indexProduct].title = title || products[indexProduct].title;
        products[indexProduct].description = description || products[indexProduct].description;
        products[indexProduct].price = price || products[indexProduct].price;
        products[indexProduct].thumbnail = thumbnail || products[indexProduct].thumbnail;
        products[indexProduct].stock = stock || products[indexProduct].stock;

        let productString = JSON.stringify(products, null, 2);
        await fs.promises.writeFile(this.path, productString);
        return 'Modified Product';
      } else {
        return 'Product Not Found';
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      if (!fs.existsSync(this.path)) {
        await fs.promises.writeFile(this.path, '[]');
      }
      let products = [];
      let productsContent = await fs.promises.readFile(this.path, 'utf-8');
      products = JSON.parse(productsContent);

      let indexProduct = products.findIndex((index) => index.id === id);
      if (indexProduct !== -1) {
        products.splice(indexProduct, 1);
        let productString = JSON.stringify(products, null, 2);
        await fs.promises.writeFile(this.path, productString);
        return 'Delete product!';
      } else {
        return 'Product Not Found';
      }
    } catch (error) {
      console.log(error);
    }
  } */
}

const cartManager = new CartManager('carts.json');

export default CartManager;
