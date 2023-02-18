import dbConnect from '../../../lib/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  // connect db
  dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === 'PUT') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
