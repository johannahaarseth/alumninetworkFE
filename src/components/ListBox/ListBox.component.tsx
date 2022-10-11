import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";

type ListBoxProps = {
  title: string;
};

const ListBox = ({ title }: ListBoxProps) => {
  return (
    <Card>
      <div className={styles.titleAndAddBtn}>
        <p>{title}</p>
        <Button>
          <p>+ Add new</p>
        </Button>
      </div>
      <div className={styles.contentList}>
        <div className={styles.itemBox}></div>
        <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
        <div className={`${styles.itemBox} ${styles.itemBoxThree}`}></div>
      </div>
      <div className={styles.seeMoreBtn}>
        <Button>
          <p>See more &gt;</p>
        </Button>
      </div>
    </Card>
  );
};

export default ListBox;
