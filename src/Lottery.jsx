import { useState } from "react";
import "./Lottery.css";

function genTicket(){
    let ticketArr = [];
    ticketArr[0] = Math.floor(Math.random() * 10);
    ticketArr[1] = Math.floor(Math.random() * 10);
    ticketArr[2] = Math.floor(Math.random() * 10);
    return ticketArr;
}

function Lottery(){
    let[ticket,setTicket] = useState([0,0,0]);
    function changeTicket(){
        setTicket(genTicket);
    }
    return (
      <>
        <div className="ticket">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
        <button onClick={changeTicket}>Play</button>
      </>
    );
}

export default Lottery;