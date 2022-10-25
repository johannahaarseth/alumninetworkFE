import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextField from "../TextField/TextField.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import { useApi } from "../../api/useApi";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { IPostResponse } from "../../interfaces/IPostResponse";

const CreateNewPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const getGroupApi = useApi<IGroupResponse>(
    (config: {}) =>
      apiClient.get<IGroupResponse>("/group?offset=0&limit=3", config),
    {} as IGroupResponse
  );
  const getTopicApi = useApi<ITopicResponse>(
    (config: {}) =>
      apiClient.get<ITopicResponse>("/topic?offset=0&limit=3", config),
    {} as ITopicResponse
  );
  const getEventApi = useApi<IEventResponse>(
    (config: {}) =>
      apiClient.get<IEventResponse>("/event?offset=0&limit=3", config),
    {} as IEventResponse
  );
  useEffect(() => {
    getGroupApi.request().then();
    getTopicApi.request().then();
    getEventApi.request().then();
    // eslint-disable-next-line
  }, []);

  const [posts, setPosts] = useState<IPostResponse>({
    count: 0,
    next: "",
    results: [],
  } as IPostResponse);

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
                  <Input
                    placeholderText={"Search for group / event / person"}
                  />
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
