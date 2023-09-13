import Aside from './Components/Aside/Aside'
import MainServer from './Components/MainServer/MainServer'
import MainChat from './Components/MainChat/MainChat'

import '@radix-ui/themes/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {

    return (
        <>
            <Aside/>
            <MainServer/>
            <MainChat/>
        </>
    )
}
