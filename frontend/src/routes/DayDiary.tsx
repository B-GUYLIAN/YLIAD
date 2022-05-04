import { Link } from "react-router-dom";
import base from "./Base.module.css"


function DayDiary(){

    return (
        <div className={base.container}> 
            <h1>날짜별 일기</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/calendar"><button> 달력으로 이동 </button></Link>
        </div>
    );
}

export default DayDiary;