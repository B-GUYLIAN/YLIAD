import { useLocation, useParams,Link, Navigate, useNavigate } from "react-router-dom";
import base from "./Base.module.css";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import styles from "./DayDiary.module.css";
import { BrowserView, MobileView } from "react-device-detect";
import axios from "axios";
import { useEffect, useState } from 'react';
import Sentence from "./Sentence";
import spring from "../assets/images/spring.png";
import spring2 from "../assets/images/spring2.png";


function DayDiary(){
    const params = useParams();
    const date: string|undefined = params.date; //넘어오는 값은 20220519'st
    // const date ="2022-05-22"
    const year = date?.slice(0,4);
    const month = date?.slice(4,6);
    const day = date?.slice(-2);

    // const[content, setContent] = useState('오늘의 일기를 써보도록 하자. 오늘은 너무나도 즐겁고 행복한 하루였다. 모든게 힘들고 짜증나며, 포기하고 싶어진다.')
    const[content, setContent] = useState<string>('')
    const[senti, setSenti] = useState('없음')
    const[positive, setPositive] = useState<number>(0)
    const[neutral, setNeutral] = useState<number>(0)
    const[negative, setNegative] = useState<number>(0)
    const[sentences, setSentences] = useState([])

  const client_id = "ut8m57djxk";
  const client_Secret = "9ZiLKYJFFiZTN6afWEujreAwZGpsFCkGWHfbfsED";

  const Font = sessionStorage.getItem("Font");

    const token: string | null = sessionStorage.getItem("token");
    const userid: string | null = sessionStorage.getItem("userid");
    
    const location= useLocation();

    const diary = location.state as {emotion: string, content:string};

    useEffect(() => {

    },[]);

    let bgcolor = diary.emotion;
    if(bgcolor === 'anger'){
        bgcolor = '#FB5E3B95'
    } else if(bgcolor === 'love'){
        bgcolor = '#FFB7EB95'
    } else if(bgcolor === 'fear'){
        bgcolor = '#CA77FE95'
    } else if(bgcolor === 'joy'){
        bgcolor = '#ffed5495'
    } else if(bgcolor === 'sad'){
        bgcolor = '#6AA6FF95'
    } else if(bgcolor === 'disgust'){
        bgcolor = '#D3FFB095'
    }
    
    let fontstyle = Font;
    if (fontstyle === 'Font1'){
        fontstyle = 'Donoun-Medium'
    } else if(fontstyle === "Font2"){
        fontstyle = 'GangwonEdu_OTFBoldA'
    } else if(fontstyle === "Font3"){
        fontstyle = 'Pretendard'
    } else if(fontstyle === "Font4"){
        fontstyle = 'CookieRun-Regular'
    } else if(fontstyle === "Font5"){
        fontstyle = 'SDMiSaeng'
    } else {
        fontstyle = 'KOTRAHOPE'
    }
  const navigate = useNavigate();
  function moveToCalendar() {
    navigate("/calendar");
  }

  function analyzeSentiment() {
    axios
      .post(
        "/sentiment-analysis/v1/analyze",
        {
          content: content,
        },
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": client_id,
            "X-NCP-APIGW-API-KEY": client_Secret,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSenti(res.data.document.sentiment);
        setPositive(res.data.document.confidence.positive);
        setNeutral(res.data.document.confidence.neutral);
        setNegative(res.data.document.confidence.negative);
        setSentences(res.data.sentences);
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  }
    
    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
            <div className={base.container}> 
                <div id={styles.date}
                 style={{ fontFamily:`${fontstyle}`}}> {year}-{month}-{day}</div>
                 <img src={spring2} alt="spring" style={{width: '4.5vw', top:'24.5vh', position:'absolute', zIndex:'2', left:'30.3vw'}} />
                <div id={styles.contentP} 
                    style={{ backgroundColor:`${bgcolor}`, 
                    fontFamily:`${fontstyle}`}}>
                        {diary.content}
                </div>
            
             <button id={styles.btn1_P2} onClick={analyzeSentiment}> 감정분석 </button>
             <img
                onClick={moveToCalendar}
                className={styles.backP}
                src="https://img.icons8.com/office/30/FFFFFF/undo.png"
                alt="selectDiary"
             />
              <div id={styles.anal_box}>
                <div id={styles.anal_result}> 감정 분류 결과: {senti} </div>
                <div id={styles.anal_posi}> 긍정: {positive} </div>
                <div id={styles.anal_neu}> 중립: {neutral} </div>
                <div id={styles.anal_nega}> 부정: {negative} </div>
              </div>
              <div id={styles.anal_box2}>
                <div id={styles.anal_title}> 문장별 감정 분석 </div>
                {
                sentences.map((sentence, index) => <Sentence key={index} sentence={sentence}/>
                )}
              </div>
            </div>
            </BrowserView>

             <MobileView >
             <div className={base.container}> 
                <div id={styles.dateM}
                 style={{ fontFamily:`${fontstyle}`}}> {year}-{month}-{day}</div>
                 <img src={spring} alt="spring" style={{width: '21rem', top:'10.9rem', position:'absolute', zIndex:'2'}} />
                <div id={styles.contentM} 
                    style={{ backgroundColor:`${bgcolor}`, 
                    fontFamily:`${fontstyle}`}}>
                        {diary.content}
                </div>
            
            <button id={styles.btn1_M2} onClick={analyzeSentiment}> 감정분석 </button>
            <img
                onClick={moveToCalendar}
                className={styles.backPM}
                src="https://img.icons8.com/office/30/FFFFFF/undo.png"
                alt="selectDiary"
             />
            <div id={styles.anal_boxM}>
                <div id={styles.anal_resultM}> 감정 분류 결과: {senti} </div>
                <div id={styles.anal_posiM}> 긍정: {positive} </div>
                <div id={styles.anal_neuM}> 중립: {neutral} </div>
                <div id={styles.anal_negaM}> 부정: {negative} </div>
            </div>
            <div id={styles.anal_box2M}>
                <div id={styles.anal_titleM}> 문장별 감정 분석 </div>
                {
                sentences.map((sentence, index) => <Sentence key={index} sentence={sentence}/>
                )}
            </div>
        </div>
      </MobileView>
    </>
  );
}

export default DayDiary;
