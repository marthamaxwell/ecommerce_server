import Product from "../models/product.model.js";

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      message: "All Products",
      allProduct: products,
      productsLength: products.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not fetched",
      error: error.message,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({
      success: true,
      message: "product found",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found",
      error: error.message,
    });
  }
};

const udateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);

    const updateFilled = await Product.findByIdAndUpdate(id);
    res.status(200).json({
      success: true,
      message: "product updated successfully",
      product: updateFilled,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not updated",
      error: error.message,
    });
  }
};

const deletProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not deleted",
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  // const productData = req.body;
  // console.log("the product data => ", productData);

  try {
    const blah = req.body.name;
    const exsitingProduct = await Product.findOne({ name: blah }).exec();
    console.log(exsitingProduct);

    if (exsitingProduct?.name === blah) {
      return res.status(409).json({
        success: false,
        message: "Product already exists",
      });
    }

    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created succefully",
      newProduct: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not created",
      error: error.message,
    });
  }
  // res.status(200).json({
  //   success: true,
  //   message: "Product created succefully",
  //   myData: productData,
  // });
};

export {
  allProducts,
  singleProduct,
  udateProduct,
  deletProduct,
  createProduct,
};
