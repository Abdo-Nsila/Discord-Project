import { useState } from "react";

export default function Card(props) {
  const [color,setColor] = useState(false);
  return (
    <div className="card">
      <div className="top-card" style={{ backgroundImage:`url(${props.srcImg})` }}>
        <div onClick={() => setColor(prev => !prev)} className="heart">
        <span style={{color: color ? 'red' : 'black'}}>&#10084;</span>
        </div>
        {/* <img src={props.srcImg} alt="" /> */}
      </div>

      <div className="bottom-card">
        <div className="title-rating">
          <h2>{props.title}</h2>
          <span><strong>&#9733;</strong><b>{props.rating}</b></span>
        </div>
        <p className="desc">{props.desc}</p>
        <h3>{props.prix}$ <span>par nuit</span></h3>
        {/* <button>Demander</button> */}
        {/* <p>id: <i>{props.id}</i></p> */}
      </div>
    </div>
  );
}
