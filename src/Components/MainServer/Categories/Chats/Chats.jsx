import './Chats.css';

export default function Chats({ chatType, name, handleEvent }){
    return(
        <div className='chat' onClick={(e)=>handleEvent(e,'#404249')} onMouseOut={(e)=>handleEvent(e,'#ff0')} >{chatType==="chat" ? '📝' : '🔊'} {name}</div>
    )
}