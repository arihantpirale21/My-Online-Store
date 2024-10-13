import express from "express";
import { getAllProducts, getAllFeaturedProducts, createProduct, deleteProduct, getRecommendedProducts, getProductsByCategory, toggleFeaturedProduct } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect route is a middleware used to validate if a user is logged in or not.
// Admin route is a a middleware used to validate if a logged in user is an admin or not.

router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', getAllFeaturedProducts);
router.post('/', protectRoute, adminRoute, createProduct);
router.delete('/:id', protectRoute, adminRoute, deleteProduct);
router.get('/recommendations', getRecommendedProducts);
router.get('/category/:category', getProductsByCategory);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedProduct)

export default router; 