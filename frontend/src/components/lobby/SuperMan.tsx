import Styles from "./SuperMan.module.css";
import base from "../../routes/Base.module.css";
import moon from "../../assets/images/lobby/moon.png";
import star from "../../assets/images/lobby/star.png";
import star2 from "../../assets/images/lobby/star2.png";
import star3 from "../../assets/images/lobby/star3.png";
import star4 from "../../assets/images/lobby/star4.png";
import star5 from "../../assets/images/lobby/star5.png";
import star6 from "../../assets/images/lobby/star6.png";
import moonMove from "../../assets/images/lobby/moonMove.gif";
import ardsuper from "../../assets/images/lobby/ard_super2.gif";
import earthShadow from "../../assets/images/lobby/earthShadow.gif";
import spaceStation from "../../assets/images/lobby/spaceStation.png";
import { BrowserView, MobileView } from 'react-device-detect';


function SuperMan(){

    return (
        <>
            <BrowserView>
                <div className={base.container} style={{overflowY:'hidden'}}>
                    {/* <img src={moon} className={Styles.moon} alt="moon"/> */}
                    <img src={star} className={Styles.star1} alt="star"/>
                    <img src={star2} className={Styles.star2} alt="star"/>
                    <img src={star3} className={Styles.star3} alt="star"/>
                    <img src={star4} className={Styles.star4} alt="star"/>
                    <img src={star5} className={Styles.star5} alt="star"/>
                    <img src={star6} className={Styles.star6} alt="star"/>
                    <img src={moonMove} className={Styles.moonMove} alt="moonMove"/>
                    <img src={ardsuper} className={Styles.ardsuper} alt="ardsuper"/>
                    <img src={earthShadow} className={Styles.earthShadow} alt="earthShadow"/>
                    <img src={spaceStation} className={Styles.spaceStation} alt="spaceStation"/>
                    

                    {/* <img src={ground} className={Styles.ground} alt="ground"></img> */}
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                    {/* <img src={moon} className={Styles.moonM} alt="moon"/> */}
                    <img src={star} className={Styles.star1M} alt="star"/>
                    <img src={star2} className={Styles.star2M} alt="star"/>
                    <img src={star3} className={Styles.star3M} alt="star"/>
                    <img src={star4} className={Styles.star4M} alt="star"/>
                    <img src={star5} className={Styles.star5M} alt="star"/>
                    <img src={star6} className={Styles.star6M} alt="star"/>
                    <img src={moonMove} className={Styles.moonMoveM} alt="moonMove"/>
                    <img src={ardsuper} className={Styles.ardsuperM} alt="ardsuper"/>
                    <img src={earthShadow} className={Styles.earthShadowM} alt="earthShadow"/>
                    <img src={spaceStation} className={Styles.spaceStationM} alt="spaceStation"/>
                    
                    {/* <img src={ground} className={Styles.groundM} alt="ground"></img> */}
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </MobileView>
        </>
    );
}

export default SuperMan;