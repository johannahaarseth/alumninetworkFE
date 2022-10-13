import "./Global.css";
import styles from "./App.module.css";
import LoginView from "./views/LoginView/LoginView";

function App() {
  return (
    <div className="App">
      <div className={styles.dashboard}></div>
      <LoginView />
    </div>
  );
}

export default App;
