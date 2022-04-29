import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Alarm(){

    return (
        <div className={base.container}> 
            <h1>알람 기능</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/setting"><button> 환경설정으로 이동 </button></Link>
        </div>
    );
}

export default Alarm;