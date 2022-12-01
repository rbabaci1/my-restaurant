import Image from 'next/image';
import styles from '../styles/Featured.module.css';

function Featured() {
  const images = [
    '/images/featured.png',
    '/images/featured2.png',
    '/images/featured3.png',
  ];

  return (
    <div className={styles.container}>
      <Image src='/images/arrowl.png' alt='' layout='fill' />

      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={img} alt='' layout='fill' />
          </div>
        ))}
      </div>

      <Image src='/images/arrowr.png' alt='' layout='fill' />
    </div>
  );
}

export default Featured;
