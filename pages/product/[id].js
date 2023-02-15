import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

function Product({ pizza }) {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[size]}0</span>
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

        <h3>Choose additional ingredients</h3>

        <div className={styles.ingredients}>
          {pizza.extraOptions.map(option => (
            <div className={styles.option} key={option._id}>
              <input
                className={styles.checkbox}
                type='checkbox'
                name={option.text}
                id={option.text}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input
            type='number'
            min={0}
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
