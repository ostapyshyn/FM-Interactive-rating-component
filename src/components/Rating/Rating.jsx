import React, { useState } from 'react';
import styles from './Rating.module.scss';
import { ReactComponent as Star } from '../assets/icon-star.svg';
import Button from '../Button';
import Thank from '../Thank';

const Rating = () => {
  const [rating, setRating] = useState(3);
  const [result, setResult] = useState(false);

  return (
    <main>
      {!result && (
        <section className={styles.info}>
          <button className={styles.star}>
            <Star />
          </button>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </p>
          <div className={styles.circles}>
            <Button rating={1} onClickRating={(id) => setRating(id)} />
            <Button rating={2} onClickRating={(id) => setRating(id)} />
            <Button rating={3} onClickRating={(id) => setRating(id)} />
            <Button rating={4} onClickRating={(id) => setRating(id)} />
            <Button rating={5} onClickRating={(id) => setRating(id)} />
          </div>
          <button className={styles.button} onClick={() => setResult(true)}>
            SUBMIT
          </button>
        </section>
      )}
      {result && <Thank rate={rating} />}
    </main>
  );
};

export default Rating;
