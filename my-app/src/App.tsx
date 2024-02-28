import { Lab1 } from "./components/lab1/Lab1";
import { lab1Data } from "./data/lab1TaskData";

const App = () => {
  return (
    <div>
      <Lab1 tasks={lab1Data}></Lab1>
    </div>
  );
};

export default App;
