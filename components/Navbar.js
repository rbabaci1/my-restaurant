import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/images/telephone.png' alt='' width={30} height={30} />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>

      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  );
}

export default Navbar;
