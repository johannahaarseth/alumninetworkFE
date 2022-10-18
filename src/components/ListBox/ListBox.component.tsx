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
import { dataContext, titleContext } from "../../context/AppProvider";
import { IGroupDataModel } from "../../models/groupModel";
import { ITopicDataModel } from "../../models/topicModel";
import { IEventDataModel } from "../../models/eventModel";

type ListBoxProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  visibleSeeMoreBtn: boolean;
  data: IGroupDataModel | ITopicDataModel | IEventDataModel;
};

const ListBox = ({
  title,
  children,
  visibleSeeMoreBtn,
  data,
}: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleToLowerAndMinusPlural = title?.toLowerCase().slice(0, -1);
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [valuePlus, setValuePlus] = useState<Dayjs | null>(dayjs());
  const navigate = useNavigate();
  const { setTitle } = useContext(titleContext);
  const { setData } = useContext(dataContext);

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

  const handleSeeMoreOnClick = () => {
    setTitle(title);
    setData(data);
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
