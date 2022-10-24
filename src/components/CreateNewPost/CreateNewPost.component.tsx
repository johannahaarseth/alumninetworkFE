import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { ChangeEvent, useEffect, useState } from "react";
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
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { MouseEventHandler } from "react";
import { on } from "stream";

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
  const [groupsTitle, setGroupsTitle] = useState<string>();
  const [topicsTitle, setTopicsTitle] = useState<string>();

  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no.

  const radioHandler = (status: number) => {
    setStatus(status);
  };

  const getGroups = (config: {}) =>
    apiClient.get<IGroupResponse>("/group?offset=0&limit=3", config);
  const getGroupsApi = useApi<IGroupResponse>(getGroups, {} as IGroupResponse);

  const getTopics = (config: {}) =>
    apiClient.get<ITopicResponse>("/topic?offset=0&limit=3", config);
  const getTopicsApi = useApi<ITopicResponse>(getTopics, {} as ITopicResponse);

  useEffect(() => {
    getGroupsApi.request();
    getTopicsApi.request();
  }, []);

  const handleChangeGroups = (event: SelectChangeEvent<typeof groupsTitle>) => {
    const {
      target: { value },
    } = event;
    setGroupsTitle(value);
  };
  const handleChangeTopics = (event: SelectChangeEvent<typeof groupsTitle>) => {
    const {
      target: { value },
    } = event;
    setTopicsTitle(value);
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
                    <RadioButton
                      valueProp={"Group"}
                      isChecked={status === 1}
                      onChange={(e) => radioHandler(1)}
                    />
                    <RadioButton
                      valueProp={"Event"}
                      isChecked={status === 0}
                      onChange={(e) => radioHandler(0)}
                    />
                    <RadioButton
                      valueProp={"Person"}
                      isChecked={status === 0}
                      onChange={(e) => radioHandler(0)}
                    />
                  </div>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {status === 1 && (
                      <>
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
                              onChange={handleChangeGroups}
                              required
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
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "#16697a",
                                  },
                              }}
                            >
                              {getGroupsApi.data.results.map((data) => (
                                <MenuItem
                                  key={data.id + data.name}
                                  value={data.name}
                                >
                                  {data.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item>
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
                              Topics
                            </InputLabel>
                            <Select
                              id="demo-multiple-name"
                              value={topicsTitle}
                              onChange={handleChangeTopics}
                              input={<OutlinedInput label="Topics" />}
                              MenuProps={MenuProps}
                              sx={{
                                "& fieldset": {
                                  borderColor: "#16697a",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#16697a",
                                  background: "#ede7e3",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "#16697a",
                                  },
                              }}
                            >
                              {getTopicsApi.data.results.map((data) => (
                                <MenuItem
                                  key={data.id + data.name}
                                  value={data.name}
                                >
                                  {data.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    )}
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
