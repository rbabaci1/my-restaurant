import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Cart.module.css';

import { useEffect, useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [open, setOpen] = useState(false);
  const amount = '2';
  const currency = 'USD';
  const style = { layout: 'vertical' };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then(orderId => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {cart.products.map(product => (
            <tr className={styles.tr} key={product._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={product.img}
                    alt='pizza'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>{product.title}</span>
              </td>

              <td>
                <span className={styles.extras}>
                  {product.extras.map(extra => {
                    <span key={product._id}>{extra.text}, </span>;
                  })}
                </span>
              </td>

              <td>
                <span className={styles.price}>{product.price}</span>
              </td>

              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>

              <td>
                <span className={styles.total}>
                  {product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <div className={styles.paymentMethods}>
            <button className={styles.cashOnDelivery}>CASH ON DELIVERY</button>
            {open ? (
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'AWbYwdMpzA-tB1vAR6Fmy2nBuTqfBwhftaQATsB4AAVLq-vLjPudwOSVnh8Nx4EGJHRx-KQp1qwYhdoX',
                  components: 'buttons',
                  currency: 'USD',
                  'disable-funding': 'credit,card,p24,venmo',
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            ) : (
              <button className={styles.button} onClick={() => setOpen(true)}>
                CHECKOUT NOW!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
