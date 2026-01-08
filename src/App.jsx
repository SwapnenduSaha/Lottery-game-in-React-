import "./App.css";
import Lottery from "./Lottery";
import { sumArr } from "./helper";
function App(){
  let winningCondition = (ticket) => {
    return sumArr(ticket) === 15;
  };
  return (
    <Lottery winningCondition={winningCondition} n={4}/>
  );
}

export default App;