import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

function Product() {
  const pizza = {
    id: 1,
    img: '/images/pizza.png',
    name: 'CAMPAGNOLA',
    price: [19.9, 23.9, 27.9],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione neque laborum illo.',
  };

  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}0</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src='/images/size.png'
              alt='pizza size'
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.text}>Small</span>
          </div>

          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src='/images/size.png'
              alt='pizza size'
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.text}>Medium</span>
          </div>

          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src='/images/size.png'
              alt='pizza size'
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.text}>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
