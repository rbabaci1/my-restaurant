import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.API}/api/login`, {
        username,
        password,
      });

      setError(false);
      router.push('/admin');
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder='username'
          className={styles.input}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          placeholder='password'
          className={styles.input}
          onChange={e => setPassword(e.target.value)}
          type='password'
          required
        />
        <button type='submit' className={styles.button}>
          Sign In
        </button>

        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </form>
    </div>
  );
}

export default Login;
