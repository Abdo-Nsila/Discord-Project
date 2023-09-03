
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.url} alt="" width={'200px'} height={'200px'}/>
      <h2>{props.text}</h2>
    </div>
  );
}
