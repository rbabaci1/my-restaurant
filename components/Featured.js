import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Featured.module.css';

function Featured() {
  const images = [
    '/images/featured.png',
    '/images/featured2.png',
    '/images/featured3.png',
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const handleClick = val => {
    if ((imgIndex === 0 && val < 0) || (imgIndex === 2 && val > 0)) return;
    setImgIndex(imgIndex + val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src='/images/arrowl.png'
          alt='back arrow'
          layout='fill'
          onClick={() => handleClick(-1)}
        />
      </div>

      <div className={styles.wrapper}>
        <Image
          src={images[imgIndex]}
          alt={`featured pizza ${imgIndex}`}
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src='/images/arrowr.png'
          alt='forward arrow'
          layout='fill'
          onClick={() => handleClick(+1)}
        />
      </div>
    </div>
  );
}

export default Featured;
