import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            voluptate nobis quisquam distinctio iure
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTUARANTS</h1>
          <p className={styles.text}>
            1651 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1651 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1651 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1651 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - FRIDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
