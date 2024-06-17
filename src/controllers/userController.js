const User = require("../models/userModels");
const path = require("path");
const bcrypt = require("bcryptjs");

// Create user
const createUser = async (req, res) => {
  const { fullName, login, password } = req.body;
  const image = req.file ? path.relative(__dirname, req.file.path) : null;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      login,
      password: hashedPassword,
      image,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password", "login"] },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { fullName, login, password } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedData = {
      fullName: fullName || user.fullName,
      login: login || user.login,
      image: image || user.image,
    };

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const [rowsUpdated] = await User.update(updatedData, { where: { id } });

    if (rowsUpdated) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await User.destroy({ where: { id } });
    if (rowsDeleted) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
};
