import dbConnect from '../../../lib/mongo';
import Order from '../../../models/Orders';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === 'GET') {
  } else if (method === 'PUT') {
  } else if (method === 'DELETE') {
  }
}
