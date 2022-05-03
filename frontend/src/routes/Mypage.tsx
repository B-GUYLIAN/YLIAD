import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css";
import Styles from "./Mypage.module.css";

function Mypage(){

    return (
        <>
            <Navbar />
            <div className={base.container}> 
                {/* <h1>마이 페이지</h1> */}
                <div >전체</div>
                <div>{""} 3</div>
                <div>올해</div>
                <div>{""} 3</div>
                <div>이번달</div>
                <div>{""} 3</div>

                <div>이번달 기분 통계</div>
                {/* 기분 이미지 5개 놓고, 각각 갯수 말하고 */}

                {/* 차트 */}
                <div>차트 자리</div>
                {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
            </div>
        </>
    );
}

export default Mypage;