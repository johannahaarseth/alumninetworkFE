import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./ListView.module.css";
import { useContext } from "react";
import { dataContext, titleContext } from "../../context/AppProvider";
import { GroupResults } from "../../models/groupModel";
import { TopicResults } from "../../models/topicModel";
import { EventResults } from "../../models/eventModel";

const ListView = () => {
  const { isAuthenticated, user } = useAuth0();
  const { title } = useContext(titleContext);
  const { data } = useContext(dataContext);

  const listViewDataRendered = data.results.map(
    (e: GroupResults | TopicResults | EventResults, i: number) => {
      console.log(e);
      return (
        <div className={styles.itemBox} key={i}>
          {/*<p>{e}</p>*/}
        </div>
      );
    }
  );

  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        {isAuthenticated && (
          <>
            <NavBar />
            <div className={styles.container}>
              <ListBox
                title={`${title} (${data.count})`}
                visibleSeeMoreBtn={false}
                data={data!}
              >
                {listViewDataRendered}
              </ListBox>
            </div>
          </>
        )}
      </>
    );
  }
};

export default ListView;
