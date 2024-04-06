import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const dB = process.env.DATABASE_URL;
const myPort = process.env.PORT;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//my product route
app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world from web dev class of backend developers ");
});

//get a product
// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json({
//       success: true,
//       message: "product found",
//       product: product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Product not found",
//       error: error.message,
//     });
//   }
// });

//update a product
// app.put("/update-product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(id, req.body);

//     const updateFilled = await Product.findByIdAndUpdate(id);
//     res.status(200).json({
//       success: true,
//       message: "product updated successfully",
//       product: updateFilled,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Product not updated",
//       error: error.message,
//     });
//   }
// });

//delete a product
// app.delete("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     res.status(200).json({
//       success: true,
//       message: "product deleted successfully",
//       product: product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Product not deleted",
//       error: error.message,
//     });
//   }
// });

//get all product
// app.get("/allproducts", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({
//       success: true,
//       message: "All Products",
//       allProduct: products,
//       productsLength: products.length,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Product not fetched",
//       error: error.message,
//     });
//   }
// });

//push a product
// app.post("/create-product", async (req, res) => {
//   const productData = req.body;
//   console.log("the product data => ", productData);

//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Product created succefully",
//       newProduct: product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Product not created",
//       error: error.message,
//     });
//   }
//   // res.status(200).json({
//   //   success: true,
//   //   message: "Product created succefully",
//   //   myData: productData,
//   // });
// });

// app.get("/products", (req, res) => {
//   res.send("products from web dev class of backend developers");
// });

mongoose
  .connect(dB)
  .then(() => {
    console.log("Connected to DATABASE!");
    app.listen(myPort, () => {
      console.log(`server is running on port ${myPort}`);
    });
  })
  .catch(() => {
    console.log(" NOT Connected to DATABASE!");
  });

//mongodb+srv://marthamaxwell02:<password>@backend.ascdbji.mongodb.net/?retryWrites=true&w=majority&appName=backend
