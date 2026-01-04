import { useState } from "react";
import "./Lottery.css";
import { genArr } from "./helper";

function Lottery({ n }) {
  let [ticket, setTicket] = useState(Array(n).fill(0));
  function changeTicket() {
    setTicket(() => genArr(n));
  }
  return (
    <>
      <div className="ticket">
        {ticket.map((ele, idx) => (
          <span key={idx}>{ele}</span>
        ))}
      </div>
      <button onClick={changeTicket}>Play</button>
    </>
  );
}

export default Lottery;
