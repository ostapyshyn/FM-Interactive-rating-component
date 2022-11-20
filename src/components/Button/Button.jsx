import React, { useEffect, useRef } from 'react';
import styles from './Button.module.scss';

const Button = ({ rating, onClickRating }) => {
  const buttonRef = useRef();

  useEffect(() => {
    rating === 3 && buttonRef.current.focus();
  }, [rating]);

  return (
    <button ref={buttonRef} className={styles.dot} onClick={() => onClickRating(rating)}>
      {rating}
    </button>
  );
};

export default Button;
