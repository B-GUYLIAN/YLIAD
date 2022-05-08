import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import base from "./Base.module.css";
import Styles from "./Mypage.module.css";
import { BrowserView, MobileView } from 'react-device-detect';
import blue from "../assets/images/blue.png";
import green from "../assets/images/green.png";
import pink from "../assets/images/pink.png";
import purple from "../assets/images/purple.png";
import red from "../assets/images/red.png";
import yellow from "../assets/images/yellow.png";

function Mypage(){

    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
                <div className={base.containerP}> 
                    {/* <h1>마이 페이지</h1> */}
                    <div className={Styles.firstContentP}>
                        <p className={Styles.totalP}>Total</p>
                        <p className={Styles.yearP}>Year</p>
                        <p className={Styles.monthP}>Month</p>
                    </div>
                    <div className={Styles.secondContentP}>
                        <p className={Styles.totalCntP}>{""} 3</p>
                        <p className={Styles.yearCntP}>{""} 3 &nbsp;</p>
                        <p className={Styles.monthCntP}>{""} 3</p>
                    </div>

                    <div className={Styles.EmotionP}> &lt; 이번달 기분 통계 &gt; </div>
                    {/* 기분 이미지 5개 놓고, 각각 갯수 말하고 */}
                    <div className={Styles.EgroupP}>
                        <img className={Styles.colorP} src={yellow} alt=""></img>
                        <img className={Styles.colorP} src={pink} alt=""></img>
                        <img className={Styles.colorP} src={purple} alt=""></img>
                        <img className={Styles.colorP} src={green} alt=""></img>
                        <img className={Styles.colorP} src={blue} alt=""></img>
                        <img className={Styles.colorP} src={red} alt=""></img>
                    </div>
                    <div className={Styles.CgroupP}>
                        {/* 10보다 크면 그냥, 작으면 &nbsp;를 붙이도록 삼항 만들기. */}
                        <p className={Styles.colorCntP}>{""} 10 </p>
                        <p className={Styles.colorCntP}>{""} &nbsp;3 </p>
                        <p className={Styles.colorCntP}>{""} &nbsp;3 </p>
                        <p className={Styles.colorCntP}>{""} 10 </p>
                        <p className={Styles.colorCntP}>{""} &nbsp;3 </p>
                        <p className={Styles.colorCntP}>{""} &nbsp;3 </p>
                    </div>

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

                    <div className={Styles.Emotion}> &lt; 이번달 기분 통계 &gt; </div>
                    {/* 기분 이미지 5개 놓고, 각각 갯수 말하고 */}
                    <div className={Styles.Egroup}>
                        <img className={Styles.yellow} src={yellow} alt=""></img>
                        <img className={Styles.pink} src={pink} alt=""></img>
                        <img className={Styles.purple} src={purple} alt=""></img>
                        <img className={Styles.green} src={green} alt=""></img>
                        <img className={Styles.blue} src={blue} alt=""></img>
                        <img className={Styles.red} src={red} alt=""></img>
                    </div>
                    <div className={Styles.Cgroup}>
                        {/* 10보다 크면 그냥, 작으면 &nbsp;를 붙이도록 삼항 만들기. */}
                        <p className={Styles.yellowCnt}>{""} 10 </p>
                        <p className={Styles.pinkCnt}>{""} &nbsp;3 </p>
                        <p className={Styles.purpleCnt}>{""} &nbsp;3 </p>
                        <p className={Styles.greenCnt}>{""} 10 </p>
                        <p className={Styles.blueCnt}>{""} &nbsp;3 </p>
                        <p className={Styles.redCnt}>{""} &nbsp;3 </p>
                    </div>
                    {/* <div className={Styles.Egroup}>
                        <div>
                            <img className={Styles.yellow} src={yellow} alt=""></img>
                            <p className={Styles.yellowCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 10 </p>
                        </div>
                        <div>
                            <img className={Styles.pink} src={pink} alt=""></img>
                            <p className={Styles.pinkCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 10 </p>
                        </div>
                        <div>
                            <img className={Styles.purple} src={purple} alt=""></img>
                            <p className={Styles.purpleCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 10 </p>
                        </div>
                        <div>
                            <img className={Styles.green} src={green} alt=""></img>
                            <p className={Styles.greenCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 10 </p>
                        </div>
                        <div>
                            <img className={Styles.blue} src={blue} alt=""></img>
                            <p className={Styles.blueCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 10 </p>
                        </div>
                        <div>
                            <img className={Styles.red} src={red} alt=""></img>
                            <p className={Styles.redCnt} style={3 >= 10? {left:"0.8rem"}: {left:"1.2rem"}}>{""} 3 </p>
                        </div>
                    </div> */}

                    {/* 차트 */}
                    <div className={Styles.chart}>차트 자리</div>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                </div>
            </MobileView>
        </>
    );
}

export default Mypage;