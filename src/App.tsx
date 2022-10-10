import "./Global.css";
import DashboardView from "./views/DashboardView/DashboardView";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.dashboard}>
        <DashboardView />
      </div>
    </div>
  );
}

export default App;
