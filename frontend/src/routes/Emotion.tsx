import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Emotion(){

    return (
        <div className={base.container}> 
            <h1>감정 선택</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/selectdiary"><button> 일기 선택 </button></Link>
        </div>
    );
}

export default Emotion;