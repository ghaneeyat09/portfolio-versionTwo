import React from 'react';
import * as styles from "../styles/footer.module.css"

export default function Footer() {
    const date = new Date();
  return (
    <div className={styles.footer}>
      <hr />
      <p>&copy;Copyright Jamiu Ganiyat {date.getFullYear()}</p>
    </div>
  )
}
