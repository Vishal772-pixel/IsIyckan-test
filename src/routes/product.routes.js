import express from "express";
import { 
  getAllProducts, 
  getProductById, 
  getAllCategories 
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/categories", getAllCategories);

export default router;