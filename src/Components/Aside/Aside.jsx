import AsideButton from './AsideButton/AsideButton'
import './Aside.css'

export default function Aside(){
    return(
          <>
            <aside className='aside'>
              <AsideButton added={""} srcImg={require('../../Assets/logo.png')}/>
              <div className='hr'></div>
              <AsideButton added={"true"} srcImg={require('../../Assets/tanjiro.jpeg')}/>
              <AsideButton added={"true"} srcImg={require('../../Assets/animeted.gif')}/>
              <AsideButton added={""} srcImg={require('../../Assets/add_server.png')}/>
              <AsideButton added={""} srcImg={require('../../Assets/service.png')}/>
            </aside>
          </>
    )
}