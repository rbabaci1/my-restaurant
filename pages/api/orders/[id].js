import dbConnect from '../../../lib/mongo';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'PUT') {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      // to return the new updated order
      new: true,
    });
    res.status(200).json(order);
  } else if (method === 'DELETE') {
  }
}
