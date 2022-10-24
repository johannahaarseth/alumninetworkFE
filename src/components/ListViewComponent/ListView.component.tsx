import styles from "./ListView.module.css";
import NavBar from "../NavBar/NavBar.component";

type Props = {
  children: JSX.Element;
};

const ListViewComponent = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.leftColumn}></div>
          <div className={styles.middleColumn}>{children}</div>
          <div className={styles.rightColumn}></div>
        </div>
      </div>
    </>
  );
};

export default ListViewComponent;
