import { useState } from "react";

import starIcon from "../../assets/images/icon-star.svg";

import styles from "./form.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const ButtonSubmit = () => {
  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={variants}
      className={styles.btnSubmit}
      type="submit"
    >
      SUBMIT
    </motion.button>
  );
};

function Form({
  functionSubmit,
}: {
  functionSubmit: (e: any, num: number) => void;
}) {
  const [numberValue, setNumberValue] = useState(0);
  const [submittable, setSubmittalbe] = useState(false);
  const numbers = [
    {value: 1,delayValue: 0.1,},
    { value: 2, delayValue: 0.2 },
    { value: 3, delayValue: 0.3 },
    { value: 4, delayValue: 0.4 },
    { value: 5, delayValue: 0.5 },
  ];

  const handdleSelection = (event: any, e: number) => {
    event.preventDefault();
    return setNumberValue(e);
  };

  return (
    <form className="card" onSubmit={(e) => functionSubmit(e, numberValue)}>
      <div className={styles.imageWrapper}>
        <img src={starIcon} alt="Star Icon" />
      </div>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback
        is appreciated to help us improve in our offering!
      </p>
      <div className={styles.footerCard}>
        <div className={styles.btnsCont}>
          {numbers.map(({ value, delayValue }) => (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: delayValue, duration: 0.1 },
              }}
              className={styles.btn}
              id={numberValue == value ? styles.buttonSelected : undefined}
              key={value}
              onClick={(event: any) => {
                setSubmittalbe(true);
                handdleSelection(event, value);
              }}
            >
              {value}
            </motion.button>
          ))}
        </div>
        <div className={styles.submitBtnCont}>
          {submittable && <ButtonSubmit />}
        </div>
      </div>
    </form>
  );
}

export default Form;
