import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return <input className={styles.input} type="text" placeholder="Search" />;
};

export default SearchBar;
