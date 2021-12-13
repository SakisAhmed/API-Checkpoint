import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonCard from './Components/PersonCard';
function UserList() {
    const [listOfUser, setListOfUser] = useState([]);
   /* useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setListOfUser(res.data)})
        
    }, [])*/
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setListOfUser(res.data)})
        .catch(error=>console.log(error))
        
    }, [])
    return (
        <div style={{display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridColumnGap: '10px',
            gridRowGap: '10px'}}>
            {listOfUser.map(person => <PersonCard key={person.key} person={person}/>)}
        </div>
    )
}

export default UserList
