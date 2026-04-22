import { getCartSubtotal, listCartItems } from "#models/carts.js";

export async function getCartById(req, res, next) {
  try {
    const { id } = req.params;

    const items = await listCartItems(id);
    const subtotal = await getCartSubtotal(id);

    if (!items.length) {
      return res.status(404).json({ error: "Cart not found or empty" });
    }

    res.json({
      data: {
        id: Number(id),
        items,
        subtotal,
      },
    });
  } catch (error) {
    next(error);
  }
}
