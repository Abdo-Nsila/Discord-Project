import './Categories.css'
import Chats from './Chats/Chats'

export default function Categories({ name }){

    function handleEvent(e,color){
        console.log('ok')
        const block = e.target;
        block.style.backgroundColor = color;
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