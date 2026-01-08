import { useState } from "react";
import { genArr } from "./helper";
import Ticket from "./Ticket";

function Lottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState(Array(n).fill(0));
  let [isStarted, setIsStarted] = useState(false);
  let isWinning = winningCondition(ticket);
  function changeTicket() {
    setTicket(() => genArr(n));
    setIsStarted(true);
  }
  return (
    <>
      <div>
        <Ticket ticket={ticket} />
      </div>
      <button onClick={changeTicket}>Play</button>
      {!isStarted ? (
        <h3>Take a chance and check your fortune</h3>
      ) : isWinning ? (
        <h3>Congratulations!You have won🎉</h3>
      ) : (
        <h3>Better luck next time☹️</h3>
      )}
    </>
  );
}

export default Lottery;
