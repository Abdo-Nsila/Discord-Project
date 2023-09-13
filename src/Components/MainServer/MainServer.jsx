import './MainServer.css'
import Categories from './Categories/Categories'

export default function MainServer(){
    return(
        <div className="main-server">
            <div className="header-server">
                <span>PLAY</span>
            </div>
            <div className='categories'>
                <Categories name={'SCHOOL'}/>
                <Categories name={'PLAY'}/>
                <Categories name={'WATCH'}/>
            </div>
            <div className='footer-server'></div>
        </div>
    )
}