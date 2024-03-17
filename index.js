import express from 'express';
import  productRouter  from './src/features/product/Routes/product.routes.js';
import dotenv from "dotenv";
import { connectUsingMongoose } from './src/Database/db.js';

dotenv.config();

const server = express();
server.use(express.json());

server.use(express.static('public'));//for using static files like html, css, etc.. in a separate folder 'public'

server.use('/products', productRouter);


server.listen(3000, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
    connectUsingMongoose();
})