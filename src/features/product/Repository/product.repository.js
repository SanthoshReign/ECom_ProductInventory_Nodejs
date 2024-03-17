import mongoose from "mongoose";
import { productModel } from "../Schema/product.schema.js";
import { ObjectId } from "mongoose";

class ProductRepository{
 
    async add(newProduct){
        try{
            const product =  new productModel(newProduct);
            await product.save();
            return product;
        } catch(err){
            console.log(err);
        }
    }

    async getAll(){
        try{
            const products = await productModel.find();
            console.log(products);
            return products;
        } catch(err){
            console.log(err);
        }
    }

    async get(id){
        try{
            const product =  await productModel.findById(id);
            console.log(product);
            return product;
        }catch(err){
            console.log(err);
        }
    }

    async deleteProductById(id){
        try {
            return await productModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(err);
        }
    }

    async updateProduct(productId, changeInQuantity){
        try {
            // console.log(typeof changeInQuantity);
            const product = await productModel.findById(productId);
            const newProductQuantity = product.quantity + Number(changeInQuantity);
            product.quantity = newProductQuantity;
            await product.save();
            return product;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ProductRepository;