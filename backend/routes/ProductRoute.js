import express from "express";
import {
    getPrducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products";

const router = express.Router();

router.get('/products', getPrducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.patch('/products', updateProduct);
router.delete('/products', deleteProduct);

export default router;