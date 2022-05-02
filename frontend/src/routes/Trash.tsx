import { Link } from "react-router-dom";
import base from "./Base.module.css"



function Trash(){

    return (
        <div className={base.container}> 
            <h1>감정쓰레기통</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
        </div>
    );
}

export default Trash;