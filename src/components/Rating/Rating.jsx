import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Rating.module.scss';
import { ReactComponent as Star } from '../assets/icon-star.svg';
import Button from '../Button';
import Thank from '../Thank';

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [result, setResult] = useState(false);

  function onClickSubmit() {
    if (!rating) {
      toast.error('Please choose your rating', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      setResult(true);
    }
  }

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
          <button className={styles.button} onClick={onClickSubmit}>
            SUBMIT
          </button>
        </section>
      )}
      {result && <Thank rate={rating} />}
      {result && <button className={styles.button}>Back</button>}
    </main>
  );
};

export default Rating;
