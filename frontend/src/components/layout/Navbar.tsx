import { Link } from "react-router-dom";
import base from "../routs/Base.module.css";
import home from "../../assets/images/home32.png";
import calender from "../../assets/images/calender32.png";
import hospital from "../../assets/images/hospital32.png";
import trash from "../../assets/images/trash32.png";
import people from "../../assets/images/people32.png";
import gear from "../../assets/images/gear32.png";
import Styles from "./Nav.module.css";
import { BrowserView, MobileView } from 'react-device-detect';


function Navbar(){

    return (
        <>
            {/* <div className={base.container}> */}
            <BrowserView>
            <div className={Styles.navP}>
                    <div className={Styles.leftP}>
                        <div className={Styles.left2P}>
                            <Link to="/lobby" className={Styles.homeP} > <img src={home}/> </Link>
                            <Link to="/mypage" className={Styles.peopleP}><img src={people}/></Link>
                            <Link to="/calendar" className={Styles.calenderP}><img src={calender}/></Link>
                        </div>
                    </div>
                    <div className={Styles.rightP}>
                        <div className={Styles.right2P}>
                            <Link to="/clinic" className={Styles.hospitalP}><img src={hospital}/></Link>
                            <Link to="/trash" className={Styles.trashP}><img src={trash}/></Link>
                            <Link to="/setting" className={Styles.gearP}><img src={gear}/></Link>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={Styles.nav}>
                    <div className={Styles.left}>
                        <div className={Styles.left2}>
                            <Link to="/lobby" className={Styles.home} > <img src={home}/> </Link>
                            <Link to="/mypage" className={Styles.people}><img src={people}/></Link>
                            <Link to="/calendar" className={Styles.calender}><img src={calender}/></Link>
                        </div>
                    </div>
                    <div className={Styles.right}>
                        <div className={Styles.right2}>
                            <Link to="/clinic" className={Styles.hospital}><img src={hospital}/></Link>
                            <Link to="/trash" className={Styles.trash}><img src={trash}/></Link>
                            <Link to="/setting" className={Styles.gear}><img src={gear}/></Link>
                        </div>
                    </div>
                </div>
            </MobileView>
            {/* </div> */}
        </>
    );
}

export default Navbar;