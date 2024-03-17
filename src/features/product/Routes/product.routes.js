// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from '../Controller/product.controller.js';

// 2. Initialize Express router.
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controller methods.
// localhost/api/products

// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1


productRouter.get(
  '/',
  (req, res)=>{
    productController.getAllProducts(req, res)
 }
);
productRouter.post(
  '/create',
  (req, res)=>{
    productController.addProduct(req, res)
 }
);
productRouter.get(
  '/:id',
  (req, res)=>{
    productController.getOneProduct(req, res)
 }
);
productRouter.delete(
  '/deleteProduct/:id',
  (req, res) => {
    productController.deleteProduct(req, res)
  }
)

productRouter.put(
  '/:id/updateProduct/',
  (req, res) => {
    productController.updateProductQuantity(req, res);
  }
)

export default productRouter;
