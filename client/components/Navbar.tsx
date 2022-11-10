import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#" className="logo">
          <b>Book Store</b>
          <span className="slogan">Food For the Brain</span>
        </a>
        <Searchbar />
        <a href="#" className={styles.cart}>
          <Image width={40} height={40} src="/cart.svg" alt="cart" />
        </a>
        <a href="#" className={styles.signin}>
          Sign In
        </a>
        <a href="#" className={styles.signup}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
