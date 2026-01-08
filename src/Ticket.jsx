import TicketNum from "./TicketNum";
function Ticket({ticket}){
    return(
        <div style={{padding:"10px",marginBottom:"5px"}}>
            {ticket.map((ele,idx) => <TicketNum num={ele} key={idx}/>)}
        </div>
    );
}

export default Ticket;