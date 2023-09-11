import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Components/Alert';
import Button from "./Components/Button";

import { useState } from 'react';

export default function App() {
    const [show, setShow] = useState(false)

    return (
        <>
            {show && <Alert message={<strong>Hello World</strong>} onClose={()=>setShow(false)}/>}
            <Button text="Click me" onClick={()=>setShow(true)}/>
        </>
    )
}
