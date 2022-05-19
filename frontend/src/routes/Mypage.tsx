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
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';

function Mypage(){
    ChartJS.register(ArcElement, Tooltip, Legend);
    // const token:any = sessionStorage.getItem("token");
    const userid:any = sessionStorage.getItem("userid");
    const token:any = sessionStorage.getItem("token");
    const nickname = sessionStorage.getItem("nickname");

    // //데이터 담기
    //일기 전체 개수
    const [totalCount, setTotalCount] = useState(0);

    //일기 연 개수
    const [yearCount, setYearCount] = useState(0);

    //일기 이번달 개수
    const [monthCount, setMonthCount] = useState(0);

    // 각각의 감정 개수
    const [anger, setAnger] = useState(0);
    const [love, setLove] = useState(0);
    const [fear, setFear] = useState(0);
    const [joy, setJoy] = useState(0);
    const [sad, setSad] = useState(0);
    const [disgust, setDisgust] = useState(0);

    useEffect(() => {
        axios.post("https://k6a308.p.ssafy.io/api-diary/api/diary/mypage",
                {
                    "userID": userid,
                },
                // {
                //     headers:{
                //         "Authorization" : token,
                //     }
                // }
            )
            .then((res) => {
                console.log("값 출력", res);
                setTotalCount(res.data.totalCount);
                setYearCount(res.data.yearCount);
                setMonthCount(res.data.monthCount);
                setAnger(res.data.anger);
                setLove(res.data.love);
                setFear(res.data.fear);
                setJoy(res.data.joy);
                setSad(res.data.sad);
                setDisgust(res.data.disgust);
            })
            .catch(error => {
                console.log("값 불러오기 실패", error.response)
            });

    },[]);

    const data = {
        // labels: graph,
        labels: ['anger', 'love', 'fear', 'joy', 'sad', 'disgust'],
        datasets: [
            {
                label: '# of Votes',
                data: [anger, love, fear, joy, sad, disgust],
                backgroundColor: [
                    '#FB5E3B',
                    '#FEA0E4',
                    '#CA77FE',
                    '#FFDE6D',
                    '#3B5AFB',
                    '#A8FF63',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    ],
                color: ['rgb(255, 255, 255)'],
                borderWidth: 1,
          },
        ],
      };


    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
                <div className={base.containerP} style={{overflowX:'hidden'}}> 
                    <div className={Styles.nicknameP}> &#60; {nickname}님의 일지 &#62;</div>
                    <div className={Styles.firstContentP}>
                        <p className={Styles.totalP}>Total</p>
                        <p className={Styles.yearP}>Year</p>
                        <p className={Styles.monthP}>Month</p>
                    </div>
                    <div className={Styles.secondContentP}>
                        <p className={Styles.totalCntP}>{totalCount} </p>
                        <p className={Styles.yearCntP}>{yearCount} </p>
                        <p className={Styles.monthCntP}>{monthCount} </p>
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
                        <p className={Styles.colorCntP}>{joy} </p>
                        <p className={Styles.colorCntP}>{love} </p>
                        <p className={Styles.colorCntP}>{fear} </p>
                        <p className={Styles.colorCntP}>{disgust} </p>
                        <p className={Styles.colorCntP}>{sad} </p>
                        <p className={Styles.colorCntP}>{anger} </p>
                    </div>

                    {/* 차트 */}
                    <div className={Styles.chartP} style={{ width:'20vw',margin:'0 auto', top:'-2vh' }}>
                      <Pie data={data} />
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={base.container}> 
                    {/* <h1>마이 페이지</h1> */}
                    <div className={Styles.nickname}> &#60; {""}해씨볼 님의 일지 &#62;</div>
                    <div className={Styles.firstContent}>
                        <p className={Styles.total}>전체</p>
                        <p className={Styles.totalCnt}>{totalCount} </p>
                    </div>
                    <div className={Styles.firstContent}>
                        <p className={Styles.year}>올해</p>
                        <p className={Styles.month}>이번달</p>
                    </div>
                    <div className={Styles.secondContent}>
                        <p className={Styles.yearCnt}>{yearCount} </p>
                        <p className={Styles.monthCnt}>{monthCount} </p>
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
                        <p className={Styles.yellowCnt}>{joy} </p>
                        <p className={Styles.pinkCnt}>{love} </p>
                        <p className={Styles.purpleCnt}> {fear} </p>
                        <p className={Styles.greenCnt}>{disgust} </p>
                        <p className={Styles.blueCnt}>{sad} </p>
                        <p className={Styles.redCnt}>{anger} </p>
                    </div>

                    {/* 차트 */}
                    {/* <div className={Styles.chart}>차트 자리</div> */}
                    <div style={{ height:'20rem',width:'20rem',margin:'0 auto' }}>
                      <Pie data={data} />
                    </div>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                </div>
            </MobileView>
        </>
    );
}

export default Mypage;