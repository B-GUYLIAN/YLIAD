import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Clinic(){

    return (
        <div className={base.container}> 
            <h1>클리닉</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
        </div>
    );
}

export default Clinic;