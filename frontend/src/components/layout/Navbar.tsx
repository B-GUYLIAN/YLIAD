import { Link } from "react-router-dom";
import base from "../routs/Base.module.css";
import home from "../../assets/home32.png";
import calender from "../../assets/calender32.png";
import hospital from "../../assets/hospital32.png";
import trash from "../../assets/trash32.png";
import people from "../../assets/people32.png";
import gear from "../../assets/gear32.png";
import Styles from "./Nav.module.css";


function Navbar(){

    return (
        <>
            {/* <div className={base.container}> */}
            <div className={Styles.nav}>
                <div className={Styles.left}>
                    <div className={Styles.left2}>
                        <Link to="/" className={Styles.home} > <img src={home}/> </Link>
                        <Link to="/mypage" className={Styles.people}><img src={people}/></Link>
                    </div>
                </div>
                <div className={Styles.right}>
                    <div className={Styles.right2}>
                        <Link to="/calendar" className={Styles.calender}><img src={calender}/></Link>
                        <Link to="/clinic" className={Styles.hospital}><img src={hospital}/></Link>
                        <Link to="/trash" className={Styles.trash}><img src={trash}/></Link>
                        <Link to="/setting" className={Styles.gear}><img src={gear}/></Link>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Navbar;