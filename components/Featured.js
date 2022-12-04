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

  const handleClick = direction => {
    if (direction === 'forward') {
      setImgIndex(imgIndex !== 2 ? imgIndex + 1 : 0);
    } else if (direction === 'backward') {
      setImgIndex(imgIndex !== 0 ? imgIndex - 1 : 2);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src='/images/arrowl.png'
          alt='backward arrow'
          layout='fill'
          objectFit='contain'
          onClick={() => handleClick('backward')}
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * imgIndex}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt={`featured pizza ${i}`}
              layout='fill'
              objectFit='contain'
            />
          </div>
        ))}
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src='/images/arrowr.png'
          alt='forward arrow'
          layout='fill'
          objectFit='contain'
          onClick={() => handleClick('forward')}
        />
      </div>
    </div>
  );
}

export default Featured;
