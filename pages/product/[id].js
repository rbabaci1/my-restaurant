import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import { addProduct } from '../../redux/cartSlice';

function Product({ pizza }) {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras(prev => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id));
    }
  };

  const changePrice = num => {
    setPrice(price + num);
  };

  const handleSize = sizeIndex => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title} </h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              src='/images/size.png'
              alt='pizza size'
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.text}>Small</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              src='/images/size.png'
              alt='pizza size'
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.text}>Medium</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(2)}>
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
                onChange={e => handleChange(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input
            onChange={e => setQuantity(e.target.value)}
            type='number'
            min={0}
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://my-restaurant-rosy.vercel.app/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
