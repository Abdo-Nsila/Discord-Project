import './Chats.css';

export default function Chats({ chatType, name, handleEvent }){
    return(
        <button className='chat' onFocus={(e)=>handleEvent(e,'#404249')} onMouseOver={(e)=>handleEvent(e,'#34353b')} onMouseLeave={(e)=>handleEvent(e,'transparent')} onBlur={(e)=>handleEvent(e,'transparent')} >{chatType==="chat" ? '📝' : '🔊'} {name}</button>
        )
}