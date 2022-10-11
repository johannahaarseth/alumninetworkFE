import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholderText: string;
};

const SearchBar = ({ placeholderText }: SearchBarProps) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholderText} />
  );
};

export default SearchBar;
