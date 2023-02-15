import dbConnect from '../../../lib/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  // connect db
  dbConnect(Product);

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case 'PUT':
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case 'DELETE':
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
  }
}
