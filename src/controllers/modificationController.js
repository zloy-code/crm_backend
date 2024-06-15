const Modification = require("../models/modification");
const Product = require("../models/products");

const createModification = async (req, res) => {
  const {
    productId,
    price_per_can,
    price_per_unit,
    quantity,
    quantity_per_can,
    can_quantity,
    liter,
  } = req.body;

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const modification = await Modification.create({
      productId,
      price_per_can,
      price_per_unit,
      quantity,
      quantity_per_can,
      can_quantity,
      liter,
    });

    res.status(201).json(modification);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the modification." });
  }
};

const getAllModifications = async (req, res) => {
  try {
    const modifications = await Modification.findAll();
    res.status(200).json(modifications);
  } catch (error) {
    console.error("Error fetching modifications:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the modifications." });
  }
};

const updateModification = async (req, res) => {
  const { id } = req.params;
  const {
    price_per_can,
    price_per_unit,
    quantity,
    quantity_per_can,
    can_quantity,
    liter,
  } = req.body;

  try {
    const modification = await Modification.findByPk(id);
    if (!modification) {
      return res.status(404).json({ message: "Modification not found" });
    }

    await modification.update({
      price_per_can,
      price_per_unit,
      quantity,
      quantity_per_can,
      can_quantity,
      liter,
    });

    res.status(200).json(modification);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the modification." });
  }
};

const deleteModification = async (req, res) => {
  const { id } = req.params;

  try {
    const modification = await Modification.findByPk(id);
    if (!modification) {
      return res.status(404).json({ message: "Modification not found" });
    }

    await modification.destroy();

    res.status(200).json({ message: "Modification deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the modification." });
  }
};

module.exports = {
  createModification,
  getAllModifications,
  updateModification,
  deleteModification,
};
