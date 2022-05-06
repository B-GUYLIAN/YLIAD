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


function Lobby(){

    return (
        <>
            <Navbar />
            {/* <Stars /> */}
            <Stars2 />
                {/* <img src={moon} className={Styles.moon}/>
                <img src={star} className={Styles.star1}/>
                <img src={star2} className={Styles.star2}/>
                <img src={star3} className={Styles.star3}/>
                <img src={star4} className={Styles.star4}/>
                <img src={star5} className={Styles.star5}/>
                <img src={star6} className={Styles.star6}/> */}
            <BrowserView>
                <div className={base.container}>
                <img className={Styles.earthP} src="https://img.icons8.com/officel/400/000000/globe-asia.png" alt="earth"/>
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                    <img className={Styles.earth} src="https://img.icons8.com/officel/500/000000/globe-asia.png" alt="earth"/>
                </div>
            </MobileView>
        </>
    );
}

export default Lobby;