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
import stone from "../../assets/images/lobby/stone.png";
import woods from "../../assets/images/lobby/woods.png";
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
                    <img src={firefly} className={Styles.firefly2} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly3} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly4} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly5} alt="firefly"></img>
                    <div style={{marginTop:'10vh'}}>
                        <img src={basictree3} className={Styles.basictree1R} alt="basictree3"></img>
                        <img src={bubbletree} className={Styles.bubbletreeR} alt="bubbletreeR"></img>
                        <img src={woods} className={Styles.woods2} alt="woods"/>
                    </div>
                    <div>
                        <img src={basictree4} className={Styles.basictree1L} alt="basictree4"></img>
                        <img src={bubbletree} className={Styles.bubbletreeL} alt="bubbletreeL"></img>
                        <img src={stone} className={Styles.stone2} alt="stone"/>
                    </div>
                    <div>
                        <img src={ad} className={Styles.ad} alt="ad"/>
                        <img src={stone} className={Styles.stone} alt="stone"/>
                        <img src={woods} className={Styles.woods} alt="woods"/>
                    </div>

                    <img src={ground} className={Styles.ground} alt="ground"></img>
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                    <img src={moon} className={Styles.moonM} alt="moon"/>
                    <img src={firefly} className={Styles.fireflyM} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly2M} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly3M} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly4M} alt="firefly"></img>
                    <img src={firefly} className={Styles.firefly5M} alt="firefly"></img>
                    <div >
                        <img src={basictree3} className={Styles.basictree1RM} alt="basictree3"></img>
                        <img src={bubbletree} className={Styles.bubbletreeRM} alt="bubbletreeR"></img>
                        <img src={woods} className={Styles.woods2M} alt="woods"/>
                    </div>
                    <div>
                        <img src={basictree4} className={Styles.basictree1LM} alt="basictree4"></img>
                        <img src={bubbletree} className={Styles.bubbletreeLM} alt="bubbletreeL"></img>
                        <img src={stone} className={Styles.stone2M} alt="stone"/>
                    </div>
                    <div>
                        <img src={ad} className={Styles.adM} alt="ad"/>
                        <img src={stone} className={Styles.stoneM} alt="stone"/>
                        <img src={woods} className={Styles.woodsM} alt="woods"/>
                    </div>
                    
                    <img src={ground} className={Styles.groundM} alt="ground"></img>
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </MobileView>
        </>
    );
}

export default Firefly;