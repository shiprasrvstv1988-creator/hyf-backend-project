import express from "express";
import {
  getCartById,
  addItemToCart,
  updateCartItem,
} from "#controllers/carts.js";

const cartsRouter = express.Router();

cartsRouter.get("/", getCartById);
cartsRouter.post("/items", addItemToCart);
cartsRouter.put("/items/:itemId", updateCartItem);

export default cartsRouter;
