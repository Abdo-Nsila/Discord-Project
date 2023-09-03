import { useEffect, useState } from "react";
import Memes from './Components/Memes'

export default function App() {
    const [data,setData] = useState([]);

    const showData = data.map((item,index) => <Memes text={item.name} url={item.url}/>)
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setData(data.data.memes.map(item => item)));
    },[]);

    return(
        <div className="all-card">{showData}</div>
    ); 
}
