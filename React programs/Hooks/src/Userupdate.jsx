import React, { useState } from 'react'

export function Usersupdate() {
    let [users, setUsers] = useState([
        {
            name: "Prasanth",
            id: 123

        },
        {
            name: "Bhaskar",
            id: 124
        },
        {
            name: "Siva",
            id: 125
        },
        {
            name: "Malli",
            id: 106
        },
        {
            name: "naveen",
            id: 107
        }

    ])
    function updateUsers() {
        setUsers((usersArray) => usersArray.map((obj) => {
            let designation = prompt("enter designation of->"+ obj.name.toUpperCase())
            return { ...obj, desig: designation }
        }))
    }


    return (
        <>
            <button onClick={updateUsers}>update All</button>

            <div className='d-flex flex-wrap gap-2 p-2'>
                {
                    users.map((obj, index) =>
                        <div className='shadow' key={index}>
                            <h2>{obj.name}</h2>
                            <h6>id:{obj.id}</h6>
                            <h6>{obj.desig}</h6>
                        </div>
                    )
                }
            </div>
        </>
    )
}