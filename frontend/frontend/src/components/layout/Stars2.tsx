import Styles from "./Stars2.module.css";

function Stars2(){
    return(
        <>
            <div className={Styles.container}>
            <div className={Styles.sky}>
                {/* 제일 작고, 빼곡 */}
                {/* <div className={Styles.stars}></div> */}
                {/* 두번째, 덜빼곡 */}
                {/* <div className={Styles.stars1}></div> */}
                {/* 제을 크고, 듬성듬성 */}
                <div className={Styles.stars2}></div>
                <div className={Styles.shootingstars}></div>
            </div>
            </div>
        </>
    );
}

export default Stars2;