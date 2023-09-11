import { useRef } from "react";
import Cards from "./Components/Cards";
import { library } from "./data";

export default function App() {

    const topButton = useRef();
    const bottomButton = useRef();

    function moveDown(){
        bottomButton.current.scrollIntoView({
            behavior:"smooth",
        })
    };
    function moveTop(){
        topButton.current.scrollIntoView({
            behavior:"smooth",
        })
    };

    const showData = library.map((item, index) => <Cards key={index} id={item.id} title={item.title} desc={item.desc} rating={item.rating} prix={item.prix} srcImg={item.srcImg} />);

    return (
        <>
            <button ref={topButton} onClick={moveDown}>Go Down</button>
            <div className="all-card">{showData}</div>
            <button ref={bottomButton} onClick={moveTop}>Go Top</button>
        </>
    )
}
