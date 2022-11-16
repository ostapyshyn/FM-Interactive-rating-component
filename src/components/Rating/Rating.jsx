import React from 'react';
import styles from './Rating.module.scss';

const Rating = () => {
  return (
    <section className={styles.info}>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </p>
      <button>submit</button>
    </section>
  );
};

export default Rating;
