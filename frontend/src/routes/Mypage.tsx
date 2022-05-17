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
    const token = sessionStorage.getItem("token");

    //그래프 만들기
    const [graph, setGraph] = useState<any>({
        // labels: ['anger', 'love', 'fear', 'joy', 'sad', 'disgust'],
        data: [],
    });

    // const graphData = [
    //     {
    //         label: 'anger',
    //         value: 10
    //     },
    //     {
    //         label: 'love',
    //         value: 30
    //     },
    //     {
    //         label: 'fear',
    //         value: 5
    //     },
    //     {
    //         label: 'joy',
    //         value: 25
    //     },
    //     {
    //         label: 'sad',
    //         value: 20
    //     },
    //     {
    //         label: 'disgust',
    //         value: 10
    //     },
    // ];

    // //데이터 담기
    //일기 전체 개수
    let totalCount:number = 0;

    //일기 연 개수
    let yearCount:number = 0;

    //일기 이번달 개수
    let monthCount:number = 0;

    // 각각의 감정 개수
    let anger:number = 0;
    let love:number = 0;
    let fear:number = 0;
    let joy:number = 0;
    let sad:number = 0;
    let disgust:number = 0;

    useEffect(() => {
        // const labels: String[] = [];
        

        axios.get("http://localhost:8080/api/diary/mypage",
            {
                headers: {
                //   "Authorization":
                    // userID: token,
                },
            })
            .then((res) => {
                console.log("값 출력", res);

            })
            .catch(error => {
                console.log("값 불러오기 실패", error.response)
            });
        
        const data: number[] = [anger, love, fear, joy, sad, disgust];

        // graphData?.map((v:any) => {
        // graphData?.map((v:any) => {
        //     labels.push(v?.label);
        //     data.push(v?.value);
        // });

        setGraph({
            // labels: labels,
            data: data,
        });

    },[]);

    const data = {
        // labels: graph,
        labels: ['anger', 'love', 'fear', 'joy', 'sad', 'disgust'],
        datasets: [
            {
                label: '# of Votes',
                // data: graph.data,
                //data 값만 axios에서 받아오면 될듯?
                data:[10,30,5,25,20,10],
                backgroundColor: [
                    // 'rgba(255, 99, 132)',
                    // 'rgba(255, 159, 64)',
                    // 'rgba(153, 102, 255)',
                    // 'rgba(255, 206, 86)',
                    // 'rgba(54, 162, 235)',
                    // 'rgba(75, 192, 192)',
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
                <div className={base.containerP}> 
                    {/* <h1>마이 페이지</h1> */}
                    <div className={Styles.nicknameP}> &#60; {""}해씨볼 님의 일지 &#62;</div>
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
                    {/* <div className={Styles.chartP}>차트 자리</div> */}
                    {/* <Pie data={data} /> */}
                    <div className={Styles.chartP} style={{ width:'20vw',margin:'0 auto', top:'-2vh' }}>
                      {/* <Pie data={data} height="5vh" width="5vw" /> */}
                      <Pie data={data} />
                    </div>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
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