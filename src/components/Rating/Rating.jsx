import React from 'react';
import styles from './Rating.module.scss';
import { leadingTrim } from 'leading-trim';

const Rating = () => {
  return (
    <section className={styles.info}>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </p>
      <div className={styles.circles}>
        <button className={styles.dot}>1</button>
        <button className={styles.dot}>2</button>
        <button className={styles.dot}>3</button>
        <button className={styles.dot}>4</button>
        <button className={styles.dot}>5</button>
      </div>

      <button className={styles.button}>SUBMIT</button>
    </section>
  );
};

export default Rating;
