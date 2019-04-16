import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import logo from './logo.png';

const App = props => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/allTickets')
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  },[])

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/allTickets')
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  },[tickets])

  return (
    <div className="App">
      <header>
        <img src={logo} />
        <h1>Welcome to the tipease dashboard!</h1>
      </header>
      <h2>user request tickets</h2>
      <div className="tickets">
        {tickets.map(ticket => {
          return(
            <div key={ticket.id} swid={ticket.sw_id} className="singleTicket">
              <h3 style={{textDecoration: "underline"}}><span style={{fontWeight: "200"}}>request from:</span> {ticket.username}</h3>
              <p>balance inquiry: {ticket.balanceInquiry}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
