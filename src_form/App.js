import { useState } from "react";

export default function App() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(username);

    return(
        <form>
            <h1>LOGIN</h1>
            <div>
                <label htmlFor="1">Username</label>
                <input id="1" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="2">Email</label>
                <input id="2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="3">Password</label>
                <input id="3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type="submit">Submit</button>
            <div><span></span></div>
        </form>
    ); 
}
