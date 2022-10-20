import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField1 from "../TextField/TextField.component";
import RadioButton from "../RadioButton/RadioButton.component";
import Input from "../Input/Input.component";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

type ListBoxProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  visibleSeeMoreBtn: boolean;
};

const ListBox = ({ title, children, visibleSeeMoreBtn }: ListBoxProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [valuePlus, setValuePlus] = useState<Dayjs | null>(dayjs());

  const titleToLowerAndMinusPlural = title?.toLowerCase().slice(0, -1);
  const path = "/" + title.charAt(0).toLowerCase() + title.slice(1);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (value?.isAfter(valuePlus)) {
      setValuePlus(value);
    }
  };
  const handleChangePlus = (newValue: Dayjs | null) => {
    setValuePlus(newValue);
    if (valuePlus?.isBefore(value)) {
      setValue(valuePlus);
    }
  };

  return (
    <>
      <Card cardHoverEffect={false}>
        <div className={styles.titleAndAddBtn}>
          <p>{title}</p>
          <Button onClick={handleOpen}>
            <p>+ Add new</p>
          </Button>
        </div>
        <div className={styles.contentList}>{children}</div>
        <div className={styles.seeMoreBtn}>
          <span
            className={!visibleSeeMoreBtn ? styles.invisibleSeeMoreBtn : ""}
          >
            <Button onClick={() => navigate(path)}>
              <p>See more &gt;</p>
            </Button>
          </span>
        </div>
      </Card>

      {open && (
        <Modal open={open} onClose={handleClose}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <Card cardHoverEffect={false}>
                <p className={styles.modalHeader}>
                  Create new {titleToLowerAndMinusPlural}
                </p>
                <form className={styles.form}>
                  <div>
                    <Input
                      placeholderText={`Add ${titleToLowerAndMinusPlural} title`}
                    />
                  </div>
                  {title.toString() === "Groups" && (
                    <div className={styles.radioButtons}>
                      <RadioButton valueProp={"Public"} />
                      <RadioButton valueProp={"Private"} />
                    </div>
                  )}
                  {title.toString() === "Events" && (
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale={"nb"}
                    >
                      <DateTimePicker
                        label="Start date"
                        value={value}
                        onChange={handleChange}
                        disablePast
                        inputFormat="DD-MM-YYYY hh:mm"
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <DateTimePicker
                        label="End date"
                        value={valuePlus?.add(1, "hours")}
                        onChange={handleChangePlus}
                        disablePast
                        inputFormat="DD-MM-YYYY hh:mm"
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
                    {title.toString() === "Events" && (
                      <Button onClick={() => navigate("/event")}>
                        <p>Create {titleToLowerAndMinusPlural} &gt;</p>
                      </Button>
                    )}
                    {title.toString() === "Groups" && (
                      <Button onClick={() => navigate("/group")}>
                        <p>Create {titleToLowerAndMinusPlural} &gt;</p>
                      </Button>
                    )}
                    {title.toString() === "Topics" && (
                      <Button onClick={() => navigate("/topic")}>
                        <p>Create {titleToLowerAndMinusPlural} &gt;</p>
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ListBox;
