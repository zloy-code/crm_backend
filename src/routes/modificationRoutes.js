const express = require("express");
const {
  createModification,
  getAllModifications,
  updateModification,
  deleteModification,
} = require("../controllers/modificationController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Modifications
 *   description: API endpoints for managing modifications
 */

/**
 * @swagger
 * /modifications:
 *   post:
 *     summary: Create a new modification
 *     tags: [Modifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               price_per_can:
 *                 type: number
 *               price_per_unit:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               quantity_per_can:
 *                 type: integer
 *               can_quantity:
 *                 type: integer
 *               liter:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Modification'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post("/", createModification);

/**
 * @swagger
 * /modifications:
 *   get:
 *     summary: Get all modifications
 *     tags: [Modifications]
 *     responses:
 *       '200':
 *         description: A list of modifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Modification'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get("/", getAllModifications);

/**
 * @swagger
 * /modifications/{id}:
 *   put:
 *     summary: Update a modification by ID
 *     tags: [Modifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the modification to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price_per_can:
 *                 type: number
 *               price_per_unit:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               quantity_per_can:
 *                 type: integer
 *               can_quantity:
 *                 type: integer
 *               liter:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Modification'
 *       '404':
 *         description: Modification not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.put("/:id", updateModification);

/**
 * @swagger
 * /modifications/{id}:
 *   delete:
 *     summary: Delete a modification by ID
 *     tags: [Modifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the modification to delete
 *     responses:
 *       '200':
 *         description: Modification deleted successfully
 *       '404':
 *         description: Modification not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.delete("/:id", deleteModification);

module.exports = router;
