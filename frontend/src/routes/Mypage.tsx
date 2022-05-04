import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import base from "./Base.module.css";
import Styles from "./Mypage.module.css";
import { BrowserView, MobileView } from 'react-device-detect';

function Mypage(){

    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
                <div className={base.containerP}> 
                    {/* <h1>마이 페이지</h1> */}
                    <div className={Styles.firstContentP}>
                        <p className={Styles.totalP}>전체</p>
                        <p className={Styles.totalCntP}>{""} 3</p>
                    </div>
                    <div className={Styles.firstContentP}>
                        <p className={Styles.yearP}>올해</p>
                        <p className={Styles.monthP}>이번달</p>
                    </div>
                    <div className={Styles.secondContentP}>
                        <p className={Styles.yearCntP}>{""} 3 &nbsp;</p>
                        <p className={Styles.monthCntP}>{""} 3</p>
                    </div>

                    <div className={Styles.monthCntP}>이번달 기분 통계</div>
                    {/* 기분 이미지 5개 놓고, 각각 갯수 말하고 */}

                    {/* 차트 */}
                    <div className={Styles.chartP}>차트 자리</div>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}> 
                    {/* <h1>마이 페이지</h1> */}
                    <div className={Styles.firstContent}>
                        <p className={Styles.total}>전체</p>
                        <p className={Styles.totalCnt}>{""} 3</p>
                    </div>
                    <div className={Styles.firstContent}>
                        <p className={Styles.year}>올해</p>
                        <p className={Styles.month}>이번달</p>
                    </div>
                    <div className={Styles.secondContent}>
                        <p className={Styles.yearCnt}>{""} 3 &nbsp;</p>
                        <p className={Styles.monthCnt}>{""} 3</p>
                    </div>

                    <div className={Styles.monthCnt}>이번달 기분 통계</div>
                    {/* 기분 이미지 5개 놓고, 각각 갯수 말하고 */}

                    {/* 차트 */}
                    <div className={Styles.chart}>차트 자리</div>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                </div>
            </MobileView>
        </>
    );
}

export default Mypage;