import Styles from "./SuperMan.module.css";
import base from "../../routes/Base.module.css";
import moon from "../../assets/images/lobby/moon.png";
import ground from "../../assets/images/lobby/ground4.png";
import { BrowserView, MobileView } from 'react-device-detect';


function SuperMan(){

    return (
        <>
            <BrowserView>
                <div className={base.container} >
                    <img src={moon} className={Styles.moon} alt="moon"/>
                    

                    {/* <img src={ground} className={Styles.ground} alt="ground"></img> */}
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}>
                    <img src={moon} className={Styles.moonM} alt="moon"/>
                    
                    
                    {/* <img src={ground} className={Styles.groundM} alt="ground"></img> */}
                    {/* <img src={ground2} className={Styles.ground} alt="ground"></img> */}
                </div>
            </MobileView>
        </>
    );
}

export default SuperMan;