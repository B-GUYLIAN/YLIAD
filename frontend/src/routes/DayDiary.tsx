import { Link } from "react-router-dom";
import base from "./Base.module.css"
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import styles from "./DayDiary.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import axios from "axios";
import { useState } from 'react';
import Sentence from "./Sentence"

function DayDiary(){

    const[content, setContent] = useState('오늘의 일기를 써보도록 하자. 오늘은 너무나도 즐겁고 행복한 하루였다. 모든게 힘들고 짜증나며, 포기하고 싶어진다.')
    const[senti, setSenti] = useState('없음')
    const[positive, setPositive] = useState<number>(0)
    const[neutral, setNeutral] = useState<number>(0)
    const[negative, setNegative] = useState<number>(0)
    const[sentences, setSentences] = useState([])

    const client_id = "ut8m57djxk"
    const client_Secret = "9ZiLKYJFFiZTN6afWEujreAwZGpsFCkGWHfbfsED"


    const Font = sessionStorage.getItem("Font");
    const date ="2022-05-22"
    
    let bgcolor = 'blue'
    if(bgcolor === 'red'){
        bgcolor = '#FB5E3B95'
    } else if(bgcolor === 'pink'){
        bgcolor = '#FFB7EB95'
    } else if(bgcolor === 'purple'){
        // bgcolor = '#DCA3FF95'
        bgcolor = '#CA77FE95'
    } else if(bgcolor === 'yellow'){
        bgcolor = '#FFE69295'
    } else if(bgcolor === 'blue'){
        bgcolor = '#6AA6FF95'
    } else if(bgcolor === 'green'){
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
        fontstyle = 'SDMiSaeng'
    }

    function analyzeSentiment(){
        axios
        .post(
            "/sentiment-analysis/v1/analyze",
            {
                "content": content
               
            },
            {
                headers: {
                    "X-NCP-APIGW-API-KEY-ID": client_id,
                    "X-NCP-APIGW-API-KEY": client_Secret,
                    "Content-Type": "application/json"
                },
            }
        )
        .then((res) =>{
            console.log(res)
            setSenti(res.data.document.sentiment)
            setPositive(res.data.document.confidence.positive)
            setNeutral(res.data.document.confidence.neutral)
            setNegative(res.data.document.confidence.negative)
            setSentences(res.data.sentences)
        })
        .catch(error => {
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
                 style={{ fontFamily:`${fontstyle}`}}> {date}</div>
                <div id={styles.contentP} 
                    style={{ backgroundColor:`${bgcolor}`, 
                    fontFamily:`${fontstyle}`}}>
                        {content}
                </div>
            
            <button id={styles.btn1_P2} onClick={analyzeSentiment}> 감정분석 </button>
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
                 style={{ fontFamily:`${fontstyle}`}}> {date}</div>
                <div id={styles.contentM} 
                    style={{ backgroundColor:`${bgcolor}`, 
                    fontFamily:`${fontstyle}`}}>
                        {content}
                </div>
            
            <button id={styles.btn1_M2} onClick={analyzeSentiment}> 감정분석 </button>
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