import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./ListView.module.css";

const ListView = () => {
  const { isAuthenticated, user } = useAuth0();

  const dummyArray = [null, null, null, null, null, null];
  const listViewDataRendered = dummyArray.map((e, i) => {
    return (
      <div className={styles.itemBox} key={i}>
        <p>{e}</p>
      </div>
    );
  });

  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        {isAuthenticated && (
          <>
            <NavBar />
            <div className={styles.container}>
              <ListBox title={"test"} visibleSeeMoreBtn={false}>
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
