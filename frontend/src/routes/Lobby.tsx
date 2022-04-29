import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"


function Lobby(){

    return (
        <div className={base.container}> 
            <h1>  로비 </h1>

            <Link to="/"><button> 홈으로 이동 </button> </Link>
            <Link to="/calendar"><button> 달력으로 이동 </button></Link>
            <Link to="/clinic"><button> 클리닉으로 이동 </button></Link>
            <Link to="/trash"><button> 감정쓰레기통으로 이동 </button></Link>
            <Link to="/mypage"><button> 마이페이지로 이동 </button></Link>
            <Link to="/setting"><button> 환경설정으로 이동 </button></Link>
        </div>
    );
}

export default Lobby;