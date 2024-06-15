// productsController.js
const Products = require("../models/products");
const Modifications = require("../models/modification");
const fs = require("fs");
const path = require("path");

const createProduct = async (req, res) => {
  const { name } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const product = await Products.create({ name, image });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the product." });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: {
        model: Modifications,
        as: "modifications",
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the products." });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename

  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.update({ name, image });

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the product." });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image) {
      fs.unlinkSync(
        path.join(__dirname, "../../uploads/upload_products", product.image)
      );
    }

    await product.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the product." });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
