import React from 'react'
import './Button.module.css';
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Give Feedback</button>
    </div>
  )
}

export default Button
