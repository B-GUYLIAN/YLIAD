import { Link } from "react-router-dom";
import base from "./Base.module.css"

interface AudioProps {
    setChangeBGM: (BGM: string) => void;  // Function;
    setbgmOn: (On: boolean) => void;  // Function;
  }

function BGM(props: AudioProps){
    function changeBGM1(){
        props.setbgmOn(false)
        props.setChangeBGM('MyStar')
    }
    function changeBGM2(){
        props.setbgmOn(false)
        props.setChangeBGM('Summer')
    }
    function changeBGM3(){
        props.setbgmOn(false)
        props.setChangeBGM('Paesaggio')
    }

   

    return (
        <div className={base.container}> 
            <h1>BGM 변경</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
            <Link to="/setting"><button> 환경설정으로 이동 </button></Link>
            <button onClick={changeBGM1}>MyStar</button>
            <button onClick={changeBGM2}>A Summer Night's Dream</button>
            <button onClick={changeBGM3}>Paesaggio Italiano</button>
        </div>
    );
}

export default BGM;