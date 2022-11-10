import styles from "../styles/Links.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <div className={styles.container}>
        <div></div>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Shop</a>
          <a href="#">Media</a>
          <a href="#">Gellary</a>
        </div>
      </div>
    </div>
  );
};

export default Links;
