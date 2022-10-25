import styles from "./CommentReply.module.css";
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";

const CommentReply = () => {
	return (
		<>
			<hr />
			<div className={styles.postCommentContainer}>
				<Input placeholderText="Type a comment..." />
				<Button className={styles.replyBtn}>Reply</Button>
			</div>
		</>
	);
};

export default CommentReply;
