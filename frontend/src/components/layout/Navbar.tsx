import { Link } from "react-router-dom";
import home from "../../assets/images/home32.png";
import calender from "../../assets/images/calender32.png";
import hospital from "../../assets/images/hospital32.png";
import trash from "../../assets/images/trash32.png";
import people from "../../assets/images/people32.png";
import gear from "../../assets/images/gear32.png";
import moon from "../../assets/images/night.png";
import hamburger from "../../assets/images/hamburger.png";
import Styles from "./Nav.module.css";
import { BrowserView, MobileView } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { useRef, useState } from "react";

function Navbar() {
  library.add(fas);
  const toggleLookup: IconLookup = { prefix: "fas", iconName: "bars" };
  const toggleIconDefinition: IconDefinition = findIconDefinition(toggleLookup);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
    // navMenu?.classList.toggle("active");
  }
  // const navTitle = useRef<HTMLDivElement>(null);
  // const navMenu = useRef<HTMLDivElement>(null);
  // const navMenu = document.querySelector(`${Styles.menuP}`);
  return (
    <>
      <BrowserView>
        <div className={Styles.navP}>
          {/* <div className={Styles.title} ref={navTitle}> */}
          <div className={Styles.title}>
            <img src={moon} alt="moon" />
            <Link to="/lobby" className={Styles.title_name}>
              YLIAD
            </Link>
          </div>
          {/* <div className={Styles.menuP} ref={navMenu}> */}
          <div className={Styles.menuP}>
            <div className={Styles.menu_itemP}>
              <Link to="/lobby" className={Styles.homeP}>
                <img src={home} alt="home" />
                HOME
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/mypage" className={Styles.peopleP}>
                <img src={people} alt="mypage" />
                MYPAGE
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/calendar" className={Styles.calenderP}>
                <img src={calender} alt="calender" />
                CALENDAR
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/clinic" className={Styles.hospitalP}>
                <img src={hospital} alt="clinic" />
                CLINIC
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/trash" className={Styles.trashP}>
                <img src={trash} alt="trash" />
                TRASH
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/setting" className={Styles.gearP}>
                <img src={gear} alt="setting" />
                SETTING
              </Link>
            </div>
          </div>
          <FontAwesomeIcon
            icon={toggleIconDefinition}
            className={Styles.toggleBtn}
            onClick={toggleHamburger}
          />
        </div>
      </BrowserView>
      <MobileView>
        <div className={Styles.nav}>
          <div className={Styles.left}>
            <div className={Styles.left2}>
              <Link to="/lobby" className={Styles.home}>
                {" "}
                <img src={home} alt="home" />{" "}
              </Link>
              <Link to="/mypage" className={Styles.people}>
                <img src={people} alt="mypage" />
              </Link>
              <Link to="/calendar" className={Styles.calender}>
                <img src={calender} alt="calender" />
              </Link>
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.right2}>
              <Link to="/clinic" className={Styles.hospital}>
                <img src={hospital} alt="clinic" />
              </Link>
              <Link to="/trash" className={Styles.trash}>
                <img src={trash} alt="trash" />
              </Link>
              <Link to="/setting" className={Styles.gear}>
                <img src={gear} alt="setting" />
              </Link>
            </div>
          </div>
        </div>
      </MobileView>
      {/* </div> */}
    </>
  );
}

export default Navbar;
