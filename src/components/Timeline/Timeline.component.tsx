import InfiniteScroll from "react-infinite-scroll-component";
import { IPostSummary } from "../../interfaces/IPostSummary";
import PostCard from "../PostCard/PostCard.component";

type TimelineProps = {
	posts: IPostSummary[];
	count: number;
	hasMore: boolean;
	handleGetNext: () => void;
};

const Timeline = ({ posts, handleGetNext, count, hasMore }: TimelineProps) => {
	console.log("Count:" + count);

	return (
		<InfiniteScroll
			dataLength={count} //This is important field to render the next data
			next={handleGetNext}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: "center" }}>
					<b>You have read all posts!</b>
				</p>
			}
			/*
  // below props only if you need pull down functionality
  refreshFunction={handleGet}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
  */
		>
			{posts.map((post, i) => {
				return <PostCard post={post} key={i} />;
			})}
		</InfiniteScroll>
	);
};

export default Timeline;
