import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Mypage(){

    return (
        <div className={base.container}> 
            <h1>마이 페이지</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
        </div>
    );
}

export default Mypage;