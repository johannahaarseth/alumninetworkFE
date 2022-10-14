import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal.component";
import TextField1 from "../TextField/TextField.component";
import RadioButton from "../RadioButton/RadioButton.component";
import Input from "../Input/Input.component";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../../App";

type ListBoxProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  visibleSeeMoreBtn: boolean;
};

const ListBox = ({ title, children, visibleSeeMoreBtn }: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleToLowerAndMinusPlural = title?.toLowerCase().slice(0, -1);
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const navigate = useNavigate();
  const { update } = useContext(ListContext);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleSeeMoreOnClick = () => {
    update(title);
    navigate("/list");
  };

  return (
    <>
      <Card cardHoverEffect={false}>
        <div className={styles.titleAndAddBtn}>
          <p>{title}</p>
          <Button onClick={() => setIsOpen(true)}>
            <p>+ Add new</p>
          </Button>
        </div>
        <div className={styles.contentList}>{children}</div>
        <div className={styles.seeMoreBtn}>
          <span
            className={!visibleSeeMoreBtn ? styles.invisibleSeeMoreBtn : ""}
          >
            <Button onClick={handleSeeMoreOnClick}>
              <p>See more &gt;</p>
            </Button>
          </span>
        </div>
      </Card>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <p className={styles.modalHeader}>
            Create new {titleToLowerAndMinusPlural}
          </p>
          <form className={styles.form}>
            <div>
              <Input
                placeholderText={`Add ${titleToLowerAndMinusPlural} title`}
              />
            </div>
            <div className={styles.radioButtons}>
              <RadioButton valueProp={"Public"} />
              <RadioButton valueProp={"Private"} />
            </div>
            {title?.toString() === "Events" && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Date&Time picker"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}

            <div>
              <TextField1
                placeholderText={`Add ${titleToLowerAndMinusPlural} description`}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button>
                <p>Create {titleToLowerAndMinusPlural} &gt;</p>
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ListBox;
