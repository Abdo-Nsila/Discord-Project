import './AsideButton.css';

export default function AsideButton({ added, srcImg}){
    function handleFocus(e){
        const short_bar = e.target.parentNode.children[0];
        short_bar.style.height = '80%';
    }
    function handleBlur(e){
        const short_bar = e.target.parentNode.children[0];
        short_bar.style.height = '13%';
    }

    return(
        <div className="button-box">
            {added && <div className="short-bar"></div>}
            <button className="aside_btn" style={{backgroundImage:`url(${srcImg})`}} onFocus={(e)=>added && handleFocus(e)} onBlur={(e)=>added && handleBlur(e)}></button>
        </div>
    )
}
