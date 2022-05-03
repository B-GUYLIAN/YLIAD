import exp from "constants";
import Styles from "./Stars2.module.css";

function Stars2(){
    return(
        <>
            <div className={Styles.container}>
            <div className={Styles.sky}>
                {/* <div className="text">#CODEVEMBER</div> */}
                <div className={Styles.stars}></div>
                <div className={Styles.stars1}></div>
                <div className={Styles.stars2}></div>
                <div className={Styles.shootingstars}></div>
            </div>
            </div>
        </>
    );
}

export default Stars2;