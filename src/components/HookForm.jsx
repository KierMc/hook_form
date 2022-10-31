import React, {useState} from 'react'

const HookForm = () => {

    const [first,setFirst] = useState("")
    const [last,setLast] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")

    const [name,setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [confirmError,setConfirmError] = useState("")


    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length<2 && e.target.value.length > 0){
            setNameError("Name must be at least 2 characters");
        }
        else{
            setNameError("");
        }
    }
    const handleEmail =(e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0){
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword =(e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
    }
    // const matchPassword =(e) => {
    //     setConfirm(e.target.value);
    //     if (confirm !== "" && password !== confirm){
    //         setConfirmError("Password must match")
    //     }
    //     else{
    //         setConfirmError("")
    //     }
    // }

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input onChange={handleName} type="text"></input>
                    {
                        nameError ?
                        <p style={{color:'red'}}>{ nameError }</p> : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={handleName} type="text"></input>
                    {
                        nameError ?
                        <p style={{color:'red'}}>{ nameError }</p> : ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input onChange={handleEmail} type="email"></input>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={handlePassword} type="text"></input>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={(e) => setConfirm(e.target.value)} type="text"></input>
                    {
                        confirm !== "" && password !== confirm ? <p style={{color:'red'}}>Passwords must be the same</p> : ''
                    }
                    {/* {
                        confirmError ?
                        <p style={{color:'red'}}>{confirmError}</p> : ''
                    } */}
                </div>
            </form>
            {/* <form>
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
            </form> */}

            {/* <h3>Your Form Data: </h3>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p> */}
        </div>
    )
}

export default HookForm