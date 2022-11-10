import styles from "../styles/Searchbar.module.scss";
const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search here ..." />
    </div>
  );
};

export default Searchbar;
