import './Chats.css';

export default function Chats({ chatType, name, handleFocus }){
    return(
        <div className='chat' onFocus={(e)=>handleFocus(e,'#404249')} onBlur={(e)=>handleFocus(e,'#ff0')} >{chatType==="chat" ? '#' : '🔊'} {name}</div>
    )
}