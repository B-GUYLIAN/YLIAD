import { Link } from "react-router-dom";
import Styles from "./Fire.module.css";
import base from "../../routes/Base.module.css";
import moon from "../../assets/images/lobby/moon.png";
import star from "../../assets/images/lobby/star.png";
import star2 from "../../assets/images/lobby/star2.png";
import star3 from "../../assets/images/lobby/star3.png";
import star4 from "../../assets/images/lobby/star4.png";
import star5 from "../../assets/images/lobby/star5.png";
import star6 from "../../assets/images/lobby/star6.png";
import ground from "../../assets/images/lobby/ground4.png";
import pyramid from "../../assets/images/lobby/pyramid_night.png";
import Cactus from "../../assets/images/lobby/Cactus_night.png";
import camping from "../../assets/images/lobby/camping_night.png";
import ad from "../../assets/images/adCape_move_left2.gif";
import { BrowserView, MobileView } from 'react-device-detect';
import Campfire from "../Campfire";


function Fire(){

    return (
        <>
            <BrowserView>
                <div className={base.container} >
                    <img src={moon} className={Styles.moon} alt="moon"/>
                    <img src={star} className={Styles.star1} alt="star"/>
                    <img src={star2} className={Styles.star2} alt="star"/>
                    <img src={star3} className={Styles.star3} alt="star"/>
                    <img src={star4} className={Styles.star4} alt="star"/>
                    <img src={star5} className={Styles.star5} alt="star"/>
                    <img src={star6} className={Styles.star6} alt="star"/>
                    <div className={Styles.fire} >
                        <Campfire />
                    </div>
                    <img src={ad} className={Styles.ad} alt="ad"/>
                    <img src={camping} className={Styles.camping} alt="camping"/>
                    <img src={Cactus} className={Styles.Cactus} alt="Cactus" />
                    <img src={Cactus} className={Styles.Cactus2} alt="Cactus" />
                    <img src={pyramid} className={Styles.pyramid} alt="pyramid" />
                    <img src={ground} className={Styles.ground} alt="ground"></img>
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                    <img src={moon} className={Styles.moonM} alt="moon"/>
                    <img src={star} className={Styles.star1M} alt="star"/>
                    <img src={star2} className={Styles.star2M} alt="star"/>
                    <img src={star3} className={Styles.star3M} alt="star"/>
                    <img src={star4} className={Styles.star4M} alt="star"/>
                    <img src={star5} className={Styles.star5M} alt="star"/>
                    <img src={star6} className={Styles.star6M} alt="star"/>
                    <div className={Styles.fireM} >
                        <Campfire />
                    </div>
                    <img src={ad} className={Styles.adM} alt="ad"/>
                    <img src={camping} className={Styles.campingM} alt="camping"/>
                    <img src={Cactus} className={Styles.CactusM} alt="Cactus" />
                    <img src={Cactus} className={Styles.Cactus2M} alt="Cactus" />
                    <img src={pyramid} className={Styles.pyramidM} alt="pyramid" />
                    <img src={ground} className={Styles.groundM} alt="ground"></img>
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </MobileView>
        </>
    );
}

export default Fire;