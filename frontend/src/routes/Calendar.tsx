import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Calendar(){

    return (
        <div className={base.container}> 
            <h1>달력</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/emotion"><button> 감정 선택 </button></Link>
            <Link to="/dayDiary"><button> 날짜별 일기 </button></Link>
        </div>
    );
}

export default Calendar;