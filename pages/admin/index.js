import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Admin.module.css';

const Index = ({ products, orders }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ['preparing', 'on the way', 'delivered'];

  const handleDelete = async id => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setPizzaList(pizzaList.filter(pizza => pizza._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async ({ status: currStatus, _id }) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${_id}`, {
        status: currStatus + 1,
      });

      setOrderList([res.data, ...orderList.filter(order => order._id !== _id)]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
        </div>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>

          {pizzaList.map(pizza => (
            <tbody key={pizza._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={pizza.img}
                    width={50}
                    height={50}
                    objectFit='cover'
                    alt=''
                  />
                </td>
                <td>{pizza._id.slice(0, 5)}...</td>
                <td>{pizza.title}</td>
                <td>${pizza.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(pizza._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className={styles.item}>
        <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </tbody>

          {orderList.map(order => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const products = await axios.get('http://localhost:3000/api/products');
  const orders = await axios.get('http://localhost:3000/api/orders');

  return {
    props: {
      orders: orders.data,
      products: products.data,
    },
  };
};

export default Index;
