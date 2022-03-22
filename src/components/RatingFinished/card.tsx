import { useState } from "react";
import styles from "./card.module.css";

import img from "../../assets/images/illustration-thank-you.svg";

function Card({ rate = 0 }) {
  const [actualRate, setActualRate] = useState(rate);

  return (
    <div className='card'>
      <div className={styles.imgCont}>
        <img className={styles.img} src={img} alt="illustration" />
      </div>
      <div className={styles.rate}>You selected {rate} out of 5</div>
      <div className={styles.description}>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.text}>
          We aprereciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Card;
