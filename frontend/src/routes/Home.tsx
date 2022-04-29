import { Link, useNavigate } from "react-router-dom";
import base from "./Base.module.css"




function Home(){


    return (
        <div className={base.container}> 
            <h1>  
                 일리아드에 오신 걸 환영합니다.
            </h1>
            
            <Link to="/lobby">
                <button> 로비로 이동 </button>
            </Link>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
    );
}

export default Home;