import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function User(props) {
    const id = props.match.params.id;

    let [curUser, setCurUser] = useState({});

    let curUserTickets = props.tickets.filter(ticket => ticket.sw_id == id)

    useEffect(() => {
        axios.get(`https://buildtipease.herokuapp.com/serviceWorkers/forDashboard/${id}`)
            .then(res => {
                setCurUser(res.data);
            })
            .catch(err => console.log(err));
    } ,[])

    return(
        <div className="fullUser">
            {curUser ? 
            <div className="fullUserInfo">
                <img src={curUser.photoUrl}/>
                <h2>{curUser.fullName}</h2>
                <hr/>
                <h4>username: {curUser.username}</h4>
                <p>{curUser.bio}</p>
                <p>overall rating: {curUser.rating}</p>
                <p>workplace: {curUser.workplace}</p>
                <hr />
                
                {curUserTickets.length ? 
                <div className='allUsersTickets'>
                    {curUserTickets.map(ticket => {
                        console.log(ticket);
                    return(
                        <div key={ticket.id} className="singleTicketFullAcc">
                            <h3 style={{textDecoration: "underline"}}>
                                <span style={{fontWeight: "200"}}>request from:</span> {ticket.username}
                            </h3>
                            <p>balance inquiry: ${ticket.balanceInquiry}</p>
                        </div>
                    );
                    })}
                </div> : null}
                
                <Link to="/" className="homeBTN">back to home</Link>
            </div> : null}
        </div>
    );
}
