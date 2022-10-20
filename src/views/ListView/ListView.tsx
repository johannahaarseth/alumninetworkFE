import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./ListView.module.css";

type ListViewProps = {
  title: string;
};

const ListView = ({ title }: ListViewProps) => {
  const { isAuthenticated, user } = useAuth0();

  // Html/tsx example for later (delete when dynamic data is implemented)
  // const listViewDataRendered = data.results.map(
  //   (e: GroupResults | TopicResults | EventResults, i: number) => {
  //     return (
  //       <div className={styles.itemBox} key={i}>
  //         <p>{e.name}</p>
  //       </div>
  //     );
  //   }
  // );

  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        {isAuthenticated && (
          <>
            <NavBar />
            <div className={styles.container}>
              <div className={styles.list}>
                <div className={styles.leftColumn}></div>
                <div className={styles.middleColumn}>
                  <ListBox title={title} visibleSeeMoreBtn={false}>
                    {/*{listViewDataRendered}*/}
                  </ListBox>
                </div>
                <div className={styles.rightColumn}></div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default ListView;
