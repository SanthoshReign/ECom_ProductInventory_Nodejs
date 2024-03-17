import ProductRepository from '../Repository/product.repository.js';

export default class ProductController {
  constructor(){
    this.productRepository = new ProductRepository();
  }

  async getAllProducts(req, res) {
    try{
      const products = await this.productRepository.getAll();
        res.status(200).send({success: true, products: products});
    } catch(err){
        console.log(err);
        return res.status(404).send("Something went wrong");
   }    
  }

  async addProduct(req, res) {
    try{
        console.log(req.body);
        const { name, quantity } = req.body;
        const newProduct = {name, quantity};
        const createdProduct = await this.productRepository.add(newProduct);
        res.status(201).send({success: true, Response: createdProduct});
    }catch(err){
        console.log(err);
        return res.status(500).send("Something went wrong");
    }
  }
  async getOneProduct(req, res) {

    try{
      const id = req.params.id;
      const product = await this.productRepository.get(id);
      if (!product) {
        res.status(404).send('Product not found');
      } else {
        return res.status(200).send({success: true, products: product});
      }
    } catch(err){
        console.log(err);
        return res.status(500).send("Something went wrong");
    }
  }

  async deleteProduct(req, res){
    const id = req.params.id;
    try {
      const deletedProduct = await this.productRepository.deleteProductById(id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: "Product deleted" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to delete Product" });
    }
  }

  async updateProductQuantity(req, res){
    const productId = req.params.id;
    const number = req.query.number;
    try {
      const productUpdated = await this.productRepository.updateProduct(productId, number);
      if(!productUpdated){
        return res.status(404).json({message: "product not found"})
      }
      return res.status(200).json({success: true, updatedProduct: productUpdated})
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to Update Product" });
    }
  }
}
