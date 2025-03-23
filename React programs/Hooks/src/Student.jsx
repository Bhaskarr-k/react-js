// import React, { useState } from "react";


// function Student(){
//     const [students, setstudents]=useState([{name:"basu",role:"student"},
//                                             {name:"bhaskar",role:"dveloper"},
//                                             {name:"malli",role:"developer"},
//                                             {name:"siva",role:"motivater"},
//                                              {name:"prashanth",role:"senior deveoper"} ])

//                                              const updateDetails = () => {
//                                                 const updatedStudents = students.map(student => ({
//                                                     ...student,
//                                                     role: student.role === "Developer" ? "Senior Developer" : student.role
//                                                 }));
//                                                 Students(updatedStudents);
//                                             };
//     return(
//         <>
//          <div>
//            <button onClick={updateDetails}>updateDetails</button>
//          </div>

//         </>
//     )
// }
// export {Student}


import React, { useState } from 'react'

export function Formvalidation() {
    let [users, setUsers] = useState([
        {
            name: "prasanth",
            id: 123

        },
        {
            name: "Rajesh",
            id: 124
        },
        {
            name:"Bhaskar",
            id:125
        }

    ])
    function updateUsers() {
        setUsers((usersArray) => usersArray.map((obj) => {
            let designation = prompt(ENTER DESIGNATION of ${obj.name})
            return { ...obj, desig: designation }
        }))
    }


    return (
        <>
                <button onClick={updateUsers}>update all users</button>

            <div className='d-flex flex-wrap gap-2 p-2'>
                {
                    users.map((obj, index) =>
                        <div key={index}>
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