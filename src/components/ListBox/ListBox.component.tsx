import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";

type ListBoxProps = {
  title: string;
};

const ListBox = ({ title }: ListBoxProps) => {
  return (
    <Card isSticky={true}>
      <div className={styles.titleAndAddBtn}>
        <p>{title}</p>
        <Button>
          <p>+ Add new</p>
        </Button>
      </div>
      <div className={styles.contentList}>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
        <div className={styles.itemBox}></div>
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
