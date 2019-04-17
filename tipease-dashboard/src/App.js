import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import logo from './logo.png';
import { Route, Link } from 'react-router-dom';
import User from './User.js'

const App = props => {

  const [tickets, setTickets] = useState([]);
  const [tipHistory, setTipHistory] = useState([]);

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/allTickets')
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  },[])

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/tipHistory')
      .then(res => setTipHistory(res.data))
      .catch(err => console.log(err));
  },[])

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/allTickets')
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  },[tickets])

  useEffect(() => {
    axios.get('https://buildtipease.herokuapp.com/tickets/tipHistory')
      .then(res => setTipHistory(res.data))
      .catch(err => console.log(err));
  },[tipHistory])

  return (
    <div className="App">

      <Route path="/fullUser/:id" render={props => <User {...props} tickets={tickets} />}/>


      <header>
        <img className="logo" src={logo} alt="logo"/>
        <h1>Welcome to the tipease dashboard!</h1>
      </header>
      <h2>tip history</h2>
      <div className="tiphistory">
        {tipHistory.length ? 
          tipHistory.map(tip => {
            console.log(tip);
            return(
              <div className="tip" key={tip.id}>
                <h3>{tip.swUsername}</h3>
                <p>{tip.senderUsername}</p>
                <p>{tip.dateRecieved}</p>
                <p>{tip.tipAmmount}</p>
              </div>
            );
          })
          : null}
      </div>
      <hr />
      <h2>user request tickets</h2>
      <div className="tickets">
        {tickets.length ? tickets.map(ticket => {
          return(
            <div key={ticket.id} swid={ticket.sw_id} className="singleTicket">
              <h3 style={{textDecoration: "underline"}}><span style={{fontWeight: "200"}}>request from:</span> {ticket.username}</h3>
              <p>balance inquiry: ${ticket.balanceInquiry}</p>
              <button 
                            className="subPaymentButton"
                            id={ticket.id}
                            onClick={e => {
                                console.log(e.target.id);
                                axios
                                  .delete(`https://buildtipease.herokuapp.com/tickets/deleteTicket/${e.target.id}`)
                                  .then(res => {
                                    console.log(res);
                                    alert('Transaction submitted, transfering funds to service workers account!');
                                  })
                                  .catch(err => console.log(err));
                            }}
                            >submit transaction</button>
              <Link to={`/fullUser/${ticket.sw_id}`}>see profile/all requests</Link>
            </div>
          );
        }) : null}
      </div>
    </div>
  );
}

export default App;
