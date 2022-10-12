import "./Global.css";
import DashboardView from "./views/DashboardView/DashboardView";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className={styles.dashboard}>
        <DashboardView />
      </div>
    </div>
  );
}

export default App;
