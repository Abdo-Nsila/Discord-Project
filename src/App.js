import Cards from "./Components/Cards";
import { library } from "./data";

export default function App() {

    const showData = library.map((item, index) => <Cards key={index} id={item.id} title={item.title} desc={item.desc} rating={item.rating} prix={item.prix} srcImg={item.srcImg} />);

    return <div className="all-card">{showData}</div>
}
