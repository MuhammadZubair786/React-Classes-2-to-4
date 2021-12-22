import React from 'react'
import { Link } from 'react-router-dom'
function User() {

    let user = [
        {
            name: "asad",
            class: 13
        },
        {
            name: "zubair",
            class: 13
        },
        {
            name: "omer",
            class: 13
        },
    ]

    return (
        <>
            <h1>User</h1>

            <div>
                {user.map((v, i) => {
                    return (
                        <div style={{border:'2px solid',margin:'10px'}} key={i}>
                            <Link to={{
                                pathname:`/daya/${v.name}`
                            }}>
                            <h1>User Name : {v.name}</h1>
                            <h2>Class : {v.class}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default User