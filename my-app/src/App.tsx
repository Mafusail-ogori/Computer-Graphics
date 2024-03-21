import { Lab1 } from "./components/lab1/Lab1";
import { Lab2 } from "./components/lab2/Lab2";
import { lab1Data } from "./data/lab1TaskData";
import classes from "./App.module.css";
import { Lab3 } from "./components/lab3/Lab3";
import { lab3Data } from "./data/lab3TaskData";

const App = () => {
  return (
    <div className={classes["app-container"]}>
      <Lab1 tasks={lab1Data} />
      <Lab2 />
      <Lab3 scenarios={lab3Data} />
    </div>
  );
};

export default App;
