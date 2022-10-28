import React, {useState} from 'react'

const HookForm = () => {

    const [first,setFirst] = useState("")
    const [last,setLast] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input onChange={(e) => setFirst(e.target.value)} type="text"></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={(e) => setLast(e.target.value)} type="text"></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={(e) => setConfirm(e.target.value)} type="password"></input>
                </div>
            </form>

            <h3>Your Form Data: </h3>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    )
}

export default HookForm