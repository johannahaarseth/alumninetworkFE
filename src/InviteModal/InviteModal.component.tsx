import styles from "./InviteModal.module.css";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Input from "../components/Input/Input.component";
import TextField from "../components/TextField/TextField.component";

const InviteModal = () => {
  return (
    <>
      <p className={styles.modalHeader}>"Title"</p>
      <form className={styles.form}>
        <div>
          <SearchBar placeholderText={"Search"} />
          <Input placeholderText={`Search: name`} />
        </div>

        <div>
          <TextField placeholderText={`Add description`} />
        </div>
      </form>
    </>
  );
};

export default InviteModal;
