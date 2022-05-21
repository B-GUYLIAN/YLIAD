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
import { useState } from "react";

function Navbar() {
  library.add(fas);
  const toggleLookup: IconLookup = { prefix: "fas", iconName: "bars" };
  const toggleIconDefinition: IconDefinition = findIconDefinition(toggleLookup);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
    // navMenu?.classList.toggle("active");
    navMenu?.classList.toggle(`${Styles.active}`);
  }

  // const activeClass = hamburgerOpen ? Styles.active : "";
  const navMenu: Element | null = document.querySelector(`.${Styles.menuP}`);
  return (
    <>
      <BrowserView>
        <div className={Styles.navP}>
          <div className={Styles.title}>
            <img src={moon} alt="moon" style={{ marginRight: "0.5vw" }} />
            <Link to="/lobby" className={Styles.title_name}>
              YLIAD
            </Link>
          </div>
          <FontAwesomeIcon
            icon={toggleIconDefinition}
            className={Styles.toggleBtn}
            onClick={toggleHamburger}
          />
          {/* <div className={`${Styles.menuP} ${activeClass}`}> */}
          <div className={Styles.menuP}>
            <div className={Styles.menu_itemP}>
              <Link to="/lobby" className={Styles.homeP}>
                <img src={home} alt="home" style={{ marginRight: "0.5vw" }} />
                HOME
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/mypage" className={Styles.peopleP}>
                <img
                  src={people}
                  alt="mypage"
                  style={{ marginRight: "0.5vw" }}
                />
                MYPAGE
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/calendar" className={Styles.calenderP}>
                <img
                  src={calender}
                  alt="calender"
                  style={{ marginRight: "0.5vw" }}
                />
                CALENDAR
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/clinic" className={Styles.hospitalP}>
                <img
                  src={hospital}
                  alt="clinic"
                  style={{ marginRight: "0.5vw" }}
                />
                CLINIC
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/trash" className={Styles.trashP}>
                <img src={trash} alt="trash" style={{ marginRight: "0.5vw" }} />
                TRASH
              </Link>
            </div>
            <div className={Styles.menu_itemP}>
              <Link to="/setting" className={Styles.gearP}>
                <img
                  src={gear}
                  alt="setting"
                  style={{ marginRight: "0.5vw" }}
                />
                SETTING
              </Link>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={Styles.nav}>
          <div className={Styles.left}>
            <div className={Styles.left2}>
              <Link to="/lobby" className={Styles.home}>
                {" "}
                <img style={{ width: "3rem" }} src={home} alt="home" />{" "}
              </Link>
              <Link to="/mypage" className={Styles.people}>
                <img
                  style={{ width: "3rem", height: "3.5rem" }}
                  src={people}
                  alt="mypage"
                />
              </Link>
              <Link to="/calendar" className={Styles.calender}>
                <img style={{ width: "3rem" }} src={calender} alt="calender" />
              </Link>
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.right2}>
              <Link to="/clinic" className={Styles.hospital}>
                <img style={{ width: "3rem" }} src={hospital} alt="clinic" />
              </Link>
              <Link to="/trash" className={Styles.trash}>
                <img style={{ width: "3rem" }} src={trash} alt="trash" />
              </Link>
              <Link to="/setting" className={Styles.gear}>
                <img style={{ width: "3rem" }} src={gear} alt="setting" />
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
