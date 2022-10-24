import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextField from "../TextField/TextField.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  useTheme,
  Grid,
} from "@mui/material";
import { useApi } from "../../api/useApi";
import { apiClient } from "../../api/apiClient";
import { IGroupSummary } from "../../interfaces/IGroupSummary";
import { ITopicSummary } from "../../interfaces/ITopicSummary";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateNewPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [groupsTitle, setGroupsTitle] = useState<string[]>([]);
  const [showSelect, setShowSelect] = useState(false);

  const [groups, setGroups] = useState<IGroupSummary>({
    id: 0,
    name: "",
    member: false,
  } as IGroupSummary);

  const [topics, setTopics] = useState<ITopicSummary>({
    id: 0,
    name: "",
    subscriber: false,
  } as ITopicSummary);

  const getGroups = (config: {}) =>
    apiClient.get<IGroupSummary>("/group?offset=0&limit=3", config);
  const getGroupsApi = useApi<IGroupSummary>(getGroups, {} as IGroupSummary);

  const getTopics = (config: {}) =>
    apiClient.get<ITopicSummary>("/topic?offset=0&limit=3", config);
  const getTopicsApi = useApi<ITopicSummary>(getTopics, {} as ITopicSummary);

  useEffect(() => {
    setGroups({
      id: getGroupsApi.data.id ?? 0,
      name: getGroupsApi.data.name ?? "",
      member: getGroupsApi.data.member ?? false,
    } as IGroupSummary);
  }, [getGroupsApi.data]);

  useEffect(() => {
    setTopics({
      id: getTopicsApi.data.id ?? 0,
      name: getTopicsApi.data.name ?? "",
      subscriber: getTopicsApi.data.subscriber ?? false,
    } as ITopicSummary);
  }, [getTopicsApi.data]);

  useEffect(() => {
    getGroupsApi.request();
    getTopicsApi.request();
  }, []);

  const handleChangeGroups = (event: SelectChangeEvent<typeof groupsTitle>) => {
    const {
      target: { value },
    } = event;
    setGroupsTitle(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Card cardHoverEffect={true}>
        <button className={styles.createNewPostButton} onClick={handleOpen}>
          <p className={styles.newPost}>Create new post</p>
          <p className={styles.newPostPlus}>+</p>
        </button>
      </Card>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <Card cardHoverEffect={false}>
                <p className={styles.modalHeader}>Create new post</p>
                <form className={styles.form}>
                  <Input placeholderText={"Add post title"} />
                  <p>Post to:</p>
                  <div className={styles.radioButtons}>
                    <RadioButton valueProp={"Group"} />
                    <RadioButton valueProp={"Event"} />
                    <RadioButton valueProp={"Person"} />
                  </div>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={5}>
                      <FormControl sx={{ m: 1, width: 180 }}>
                        <InputLabel
                          id="demo-multiple-name-label"
                          sx={{
                            color: "#000",
                            "&.Mui-focused": {
                              color: "#000",
                            },
                          }}
                        >
                          Groups
                        </InputLabel>
                        <Select
                          id="demo-multiple-name"
                          value={groupsTitle}
                          //onChange={handleChangeGroups}
                          input={<OutlinedInput label="Groups" />}
                          MenuProps={MenuProps}
                          sx={{
                            "& fieldset": {
                              borderColor: "#16697a",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#16697a",
                              background: "#ede7e3",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#16697a",
                            },
                          }}
                        >
                          <MenuItem
                            key={groups.id}
                            value={groups.name}
                            //  style={getStyles({groups.title}, personName, theme)}
                          >
                            {groups.name}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      {/* <FormControl sx={{ m: 1, width: 180 }}>
                        <InputLabel id="demo-multiple-name-label">
                          Topics
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Topics" />}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                    </Grid>
                  </Grid>
                  <div>
                    <TextField placeholderText={"Add post content"} />
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button onClick={() => navigate("/group")}>
                      <p>Create post &gt;</p>
                    </Button>
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

export default CreateNewPost;
