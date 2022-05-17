import { Link } from "react-router-dom";
import Styles from "./Firefly.module.css";
import base from "../../routes/Base.module.css";
import moon from "../../assets/images/lobby/moon.png";
import star from "../../assets/images/lobby/star.png";
import star2 from "../../assets/images/lobby/star2.png";
import star3 from "../../assets/images/lobby/star3.png";
import star4 from "../../assets/images/lobby/star4.png";
import star5 from "../../assets/images/lobby/star5.png";
import star6 from "../../assets/images/lobby/star6.png";
import firefly from "../../assets/images/lobby/firefly_move.gif";
import basictree3 from "../../assets/images/lobby/basictree3.png";
import basictree4 from "../../assets/images/lobby/basictree4.png";
import bubbletree from "../../assets/images/lobby/bubbletree.png";
import ad from "../../assets/images/adCape_move_left2.gif";
import ground from "../../assets/images/lobby/ground4.png";
import { BrowserView, MobileView } from 'react-device-detect';


function Firefly(){

    return (
        <>
            <BrowserView>
                <div className={base.container} >
                    <img src={moon} className={Styles.moon} alt="moon"/>
                    <img src={firefly} className={Styles.firefly} alt="firefly"></img>
                    <div>
                        <img src={basictree3} className={Styles.basictree1R} alt="basictree1"></img>
                        <img src={bubbletree} className={Styles.bubbletreeR} alt="basictree1"></img>
                    </div>
                    <div>
                        <img src={basictree4} className={Styles.basictree1L} alt="basictree1"></img>
                        <img src={bubbletree} className={Styles.bubbletreeL} alt="basictree1"></img>
                    </div>
                    <div>
                        <img src={ad} className={Styles.ad} alt="ad"/>
                    </div>

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
                    
                    <img src={ground} className={Styles.groundM} alt="ground"></img>
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </MobileView>
        </>
    );
}

export default Firefly;