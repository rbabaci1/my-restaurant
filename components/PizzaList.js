import styles from '../styles/PizzaList.module.css';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best pizza in town!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nisi!
        Eligendi officiis, illo doloremque consequatur adipisci fugiat explicabo
        sit rerum eius perferendis quod exercitationem, soluta enim esse.
        Commodi, veritatis doloremque.
      </p>

      <div className={styles.wrapper}></div>
    </div>
  );
};

export default PizzaList;
