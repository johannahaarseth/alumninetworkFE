import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./ListView.module.css";
import { useContext } from "react";
import { ListContext } from "../../App";

const ListView = () => {
  const { isAuthenticated, user } = useAuth0();
  const { state } = useContext(ListContext);

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
              <ListBox title={state} visibleSeeMoreBtn={false}>
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
