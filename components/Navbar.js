import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Link href='/' passHref>
            <Image src='/images/telephone.png' alt='' width={25} height={25} />
          </Link>
        </div>

        <Link href='/' passHref>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>012 345 678</div>
          </div>
        </Link>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>

          <li className={styles.listItem}>Products</li>

          <li className={styles.listItem}>Menu</li>
          <Link href='/' passHref>
            <Image src='/images/logo.png' alt='' width={160} height={69} />
          </Link>

          <li className={styles.listItem}>Events</li>

          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <Link href='/cart' passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/images/cart.png' alt='' width={30} height={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
