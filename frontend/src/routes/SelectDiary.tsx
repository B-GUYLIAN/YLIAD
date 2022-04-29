import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function SelectDiary(){

    return (
        <div className={base.container}> 
            <h1>일기 선택</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/voicediary"><button> 음성 일기 </button></Link>
            <Link to="/textdiary"><button> 문자 일기 </button></Link>
        </div>
    );
}

export default SelectDiary;