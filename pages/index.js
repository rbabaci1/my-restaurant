import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';
import Add from '../components/Add';
import AddButton from '../components/AddButton';

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Restaurant</title>
        <meta name='description' content='Best pizzaelo in town' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async ctx => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(
    `https://my-restaurant-rosy.vercel.app/api/products`
  );
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
