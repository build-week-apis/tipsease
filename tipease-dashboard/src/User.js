import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function User(props) {
    const id = props.match.params.id;

    let [curUser, setCurUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/serviceWorkers/forDashboard/${id}`)
            .then(res => {
                setCurUser(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    } ,[])

    return(
        <div>
            {id}
        </div>
    );
}
