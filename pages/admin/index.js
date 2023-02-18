import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Admin.module.css';

const Index = ({ products, orders }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

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

          <tbody>
            <tr className={styles.trTitle}>
              <td>{'125739293345533'.slice(0, 5)}...</td>
              <td>John Doe</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>
                <button>Next Stage</button>
              </td>
            </tr>
          </tbody>
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
