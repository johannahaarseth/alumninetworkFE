import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  FormEvent,
  FormHTMLAttributes,
  useEffect,
  useState,
} from "react";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextField from "../TextField/TextField.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import { useApi } from "../../api/useApi";
import { IPostGroup } from "../../interfaces/IPostGroup";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";

const CreateNewPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [postData, setPostData] = useState<IPostGroup | null>(null);

  // create new post kall til backend
  const postGroup = (config: {}, data: {}) =>
    apiClient.post<IPostGroup>("/group", data, config);

  const postToGroupApi = useApi<IPostGroup>(postGroup, {} as IPostGroup);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData!, postTitle: event.target.value });
  };
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData!, postBody: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(postData);
    postToGroupApi
      .request({ data: postData })
      .then(() => navigate("/group/" + postToGroupApi.data.groupId));
  };

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
                <form className={styles.form} onSubmit={handleSubmit}>
                  <Input
                    placeholderText={"Add post title"}
                    // value={inputText}
                    onChange={handleTitleChange}
                  />
                  <p>Post to:</p>
                  <div className={styles.radioButtons}>
                    <RadioButton valueProp={"Group"} />
                    <RadioButton valueProp={"Event"} />
                    <RadioButton valueProp={"Person"} />
                  </div>
                  {/* <Input
                    placeholderText={"Search for group / event / person"}
                  /> */}
                  <div>
                    <TextField
                      placeholderText={"Add post content"}
                      onChange={handleBodyChange}
                    />
                    {/* <Input
                      placeholderText={"Add post content"}
                      onChange={handleBodyChange}
                    /> */}
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button>
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
