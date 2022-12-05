import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/images/bg.png' alt='' layout='fill' objectFit='cover' />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            {' '}
            398 Grand Ave.
            <br /> Oakland, 94610
            <br /> (510) 834-4444
          </p>

          <p className={styles.text}>
            {' '}
            123 Dana St.
            <br /> Berkeley, 94704
            <br /> (510) 834-4444
          </p>

          <p className={styles.text}>
            {' '}
            233 Lakeshore Ave.
            <br /> Alameda, 94510
            <br /> (510) 834-4444
          </p>

          <p className={styles.text}>
            {' '}
            55 Park Blvd.
            <br /> San Francisco, 94122
            <br /> (510) 834-4444
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
}
