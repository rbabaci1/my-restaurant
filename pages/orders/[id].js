import Image from 'next/image';
import styles from '../../styles/Order.module.css';

function Order() {
  const status = 0;

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
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>12448294729</span>
              </td>
              <td>
                <span className={styles.name}>Rabah Babaci</span>
              </td>
              <td>
                <span className={styles.address}>1519 Alice st, CA</span>
              </td>

              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
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
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button} disabled>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
