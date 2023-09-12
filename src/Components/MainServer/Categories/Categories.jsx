import './Categories.css'
import Chats from './Chats/Chats'

export default function Categories({ name }){
    function handleFocus(e,color){
        e.target.style.backgroundColor = color;
    }
    return(
        <div className='categorie'>
            <span>{name}</span>
            <div className='chats'>
                <Chats chatType={'chat'} name={'📋-chat'} handleFocus={handleFocus}/>
                <Chats chatType={'voice'} name={'📚 Voice Chat'} handleFocus={handleFocus}/>
            </div>
        </div>
    )
}