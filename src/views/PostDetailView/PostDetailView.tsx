import styles from "./PostDetailView.module.css";
import Button from "../../components/Button/Button.component";
import PostEventCard from "../../components/PostEventCard/PostEventCard.component";
import Card from "../../components/Card/Card.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";
import CommentReply from "../../components/CommentReply/CommentReply.component";

const PostDetailView = () => {
	const dummyContent = (
		<div className={styles.commentsContainer}>
			<Card cardHoverEffect={true}>
				<p>This is a comment</p>
			</Card>
			<Card cardHoverEffect={true}>
				<p>This is another comment</p>
			</Card>
		</div>
	);

	const middleContentCol = (
		<>
			<PostEventCard />
			{dummyContent}
			<CommentReply />
		</>
	);

	const rightContentCol = <></>;

	return (
		<InfoView
			middleContentCol={middleContentCol}
			rightContentCol={rightContentCol}
		/>
	);
};

export default PostDetailView;
