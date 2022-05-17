import { Link } from "react-router-dom";
import base from "./Base.module.css";
import Styles from "./Lobby.module.css";
import moon from "../assets/moon.png";
import star from "../assets/star.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import star4 from "../assets/star4.png";
import star5 from "../assets/star5.png";
import star6 from "../assets/star6.png";
import Stars from "../components/layout/Stars";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import { BrowserView, MobileView } from 'react-device-detect';
import Fire from "../components/lobby/Fire";
import Firefly from "../components/lobby/Firefly";


function Lobby(){

    return (
        <>
            <Navbar />
            <Stars2 />
            {/* <Fire /> */}
            <Firefly />
                {/* <img className={Styles.earthP} src="https://img.icons8.com/officel/400/000000/globe-asia.png" alt="earth"/> */}
            {/* <BrowserView >
                <div className={base.container}> 
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                </div>
            </MobileView> */}
                    {/* <img className={Styles.earth} src="https://img.icons8.com/officel/500/000000/globe-asia.png" alt="earth"/> */}
        </>
    );
}

export default Lobby;