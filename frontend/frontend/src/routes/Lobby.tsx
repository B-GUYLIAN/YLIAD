import { Link } from "react-router-dom";
import base from "./Base.module.css";
import Styles from "./Lobby.module.css";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import { BrowserView, MobileView } from 'react-device-detect';
import Fire from "../components/lobby/Fire";
import Firefly from "../components/lobby/Firefly";
import SuperMan from "../components/lobby/SuperMan";


function Lobby(){

    const theme = sessionStorage.getItem("theme");



    return (
        <>
            <Navbar />
            <Stars2 />

            {theme === 'modak'?
            <Fire /> : theme ==='bandi'?
            <Firefly/>: theme ==='super'?
            <SuperMan/>: <Fire/>
        }
            {/* <Firefly /> */}
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