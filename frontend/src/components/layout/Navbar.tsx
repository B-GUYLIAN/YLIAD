import { Link } from "react-router-dom";
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
                            <Link to="/lobby" className={Styles.homeP} > <img src={home} alt="home"/> </Link>
                            <Link to="/mypage" className={Styles.peopleP}><img src={people} alt="mypage"/></Link>
                            <Link to="/calendar" className={Styles.calenderP}><img src={calender} alt="calender"/></Link>
                        </div>
                    </div>
                    <div className={Styles.rightP}>
                        <div className={Styles.right2P}>
                            <Link to="/clinic" className={Styles.hospitalP}><img src={hospital} alt="clinic"/></Link>
                            <Link to="/trash" className={Styles.trashP}><img src={trash} alt="trash"/></Link>
                            <Link to="/setting" className={Styles.gearP}><img src={gear} alt="setting"/></Link>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={Styles.nav}>
                    <div className={Styles.left}>
                        <div className={Styles.left2}>
                            <Link to="/lobby" className={Styles.home} > <img src={home} alt="home"/> </Link>
                            <Link to="/mypage" className={Styles.people}><img src={people} alt="mypage"/></Link>
                            <Link to="/calendar" className={Styles.calender}><img src={calender} alt="calender"/></Link>
                        </div>
                    </div>
                    <div className={Styles.right}>
                        <div className={Styles.right2}>
                            <Link to="/clinic" className={Styles.hospital}><img src={hospital} alt="clinic"/></Link>
                            <Link to="/trash" className={Styles.trash}><img src={trash} alt="trash"/></Link>
                            <Link to="/setting" className={Styles.gear}><img src={gear} alt="setting"/></Link>
                        </div>
                    </div>
                </div>
            </MobileView>
            {/* </div> */}
        </>
    );
}

export default Navbar;