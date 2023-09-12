import './Categories.css'
import Chats from './Chats/Chats'

export default function Categories({ name }){

    function handleEvent(e,color){
        const block = e.target;
        block.addEventListener('focus',()=>{
            block.target.style.backgroundColor = color;
        })
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