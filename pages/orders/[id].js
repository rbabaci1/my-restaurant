import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Order.module.css';

function Order({ order }) {
  const { status, _id, customer, address, total } = order;

  const statusClass = index => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{_id}</span>
                </td>
                <td>
                  <span className={styles.name}>{customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{address}</span>
                </td>

                <td>
                  <span className={styles.total}>${total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src='/images/paid.png'
              alt='paid status'
              width={30}
              height={30}
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image
              src='/images/bake.png'
              alt='paid status'
              width={30}
              height={30}
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image
              src='/images/bike.png'
              alt='paid status'
              width={30}
              height={30}
            />

            <span>On the way</span>

            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image
              src='/images/delivered.png'
              alt='paid status'
              width={30}
              height={30}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked'
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${total}
          </div>
          <button className={styles.button} disabled>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://my-restaurant-rosy.vercel.app/api/orders/${params.id}`
  );

  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
