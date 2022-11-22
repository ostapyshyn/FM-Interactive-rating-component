import React, { useEffect, useRef } from 'react';
import styles from './Thank.module.scss';
import { ReactComponent as Thanks } from '../assets/illustration-thank-you.svg';

const Thank = ({ rate }) => {
  return (
    <section className={styles.info}>
      <Thanks />
      <p className={styles.select}>You selected {rate} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </section>
  );
};

export default Thank;
