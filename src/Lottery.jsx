import { useState } from "react";
import "./Lottery.css";
import { genArr, sumArr } from "./helper";

function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(Array(n).fill(0));
  let [isStarted, setIsStarted] = useState(false);
  let isWinning = winningSum === sumArr(ticket);
  function changeTicket() {
    setTicket(() => genArr(n));
    setIsStarted(true);
  }
  return (
    <>
      <div className="ticket">
        {ticket.map((ele, idx) => (
          <span key={idx}>{ele}</span>
        ))}
      </div>
      <button onClick={changeTicket}>Play</button>
      {!isStarted ? (
        <h3>Take a chance and check your fortune</h3>
      ) : (isWinning ? (
        <h3>Congratulations!You have won🎉</h3>
      ) : (
        <h3>Better luck next time☹️</h3>
      ))}
    </>
  );
}

export default Lottery;
