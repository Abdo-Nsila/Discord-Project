import './Categories.css'
import Chats from './Chats/Chats'
import { useState } from 'react';


export default function Categories({ name }){

    const [event,setEvent] = useState('');

    function handleEvent(e,color){
        if(event!=="focus"){
            const block = e.target;
            block.style.backgroundColor = color;
        }
        setEvent(e.type)
    }

    return(
        <div className='categorie'>
            <span>{name}</span>
            <div className='chats'>
                <Chats chatType={'chat'} name={'📋-chat'} handleEvent={handleEvent}/>
                <Chats chatType={'voice'} name={'📚 Voice Chat'} handleEvent={handleEvent}/>
            </div>
        </div>
    )
}