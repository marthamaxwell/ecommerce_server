import express from "express";
import {
  allProducts,
  createProduct,
  deletProduct,
  singleProduct,
  udateProduct,
} from "../controllers/productController.js";

const router = express.Router(); //how it know we want to use a router

router.get("/allproducts", allProducts);

router.get("/:id", singleProduct);

router.put("/update/:id", udateProduct);

router.delete("/:id", deletProduct);

router.post("/create-products", createProduct);

export default router;
