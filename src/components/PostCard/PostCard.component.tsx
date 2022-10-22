import styles from "./PostCard.module.css";
import Card from "../Card/Card.component";
import { IPostSummary } from "../../interfaces/IPostSummary";
import { Link } from "react-router-dom";

type PostCardProps = {
	post: IPostSummary;
};

const PostCard = ({ post }: PostCardProps) => {
	return (
		<Card cardHoverEffect={false}>
			<div className={styles.toFrom}>
				<Link
					to={"user/" + post.createdBy?.userId}
					className={styles.postedInfo}
				>
					{post.createdBy?.name}
				</Link>
				<p> to </p>
				<Link
					to={post.target?.targetType + post.target?.id}
					className={styles.postedInfo}
				>
					{post.target?.name}
				</Link>
			</div>

			<p className={styles.title}>{post.postTitle}</p>
			<div className={styles.postBody}>{post.postBody}</div>
			<Link to={"post/" + post.postId} className={styles.comments}>
				{post.commentCount}{" "}
				{post.commentCount === 1 ? "comment" : "comments"}
			</Link>
		</Card>
	);
};

export default PostCard;
