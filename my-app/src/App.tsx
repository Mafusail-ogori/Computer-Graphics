import { Lab1 } from "./components/lab1/Lab1";
import { Lab2 } from "./components/lab2/Lab2";
import { lab1Data } from "./data/lab1TaskData";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes["app-container"]}>
      <Lab1 tasks={lab1Data} />
      <Lab2 />
    </div>
  );
};

export default App;
