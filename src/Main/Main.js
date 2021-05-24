
import './MainStyle.css';
import { Attribution } from "./Components/Attribution";
import {Header} from "./Components/Header";
import {CalcBody} from "./Components/CalcBody";

function Calculator() {
  return (
    <div className="calculator">
      <Header></Header>
<CalcBody></CalcBody>
     <Attribution></Attribution>
 
  </div>
  );
}

export default Calculator;
