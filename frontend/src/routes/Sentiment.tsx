import base from "./Base.module.css"
import styles from "./Sentiment.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import Stars2 from "../components/layout/Stars2"
import Navbar from "../components/layout/Navbar";
import axios from "axios";
import { useState } from 'react';


function Sentiment(){

    const[content, setContent] = useState('')
    const[senti, setSenti] = useState('없음')
    const[positive, setPositive] = useState<number>(0)
    const[neutral, setNeutral] = useState<number>(0)
    const[negative, setNegative] = useState<number>(0)

    const client_id = "ut8m57djxk"
    const client_Secret = "9ZiLKYJFFiZTN6afWEujreAwZGpsFCkGWHfbfsED"
    

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
        })
        .catch(error => {
            console.log("error", error.response);
        });

    }


    function onChangecontent(e: any){
        setContent(e.target.value)
    }

    return (
        <>
        <Navbar />
        <Stars2 />
        <div className={base.container}> 
        <BrowserView>
         <div className={styles.P_container2}>
            <h1 id={styles.title_P}>Sentiment</h1>
            <input id={styles.senti_input} onChange={onChangecontent} type="text" />
            <button id={styles.btn1_P2} onClick={analyzeSentiment}> 감정분석 </button>
            <div id={styles.testbox}> {content} </div>
            <div id={styles.anal_result}> 감정 분류 결과: {senti} </div>
            <div id={styles.anal_posi}> 긍정: {positive} </div>
            <div id={styles.anal_neu}> 중립: {neutral} </div>
            <div id={styles.anal_nega}> 부정: {negative} </div>
        </div>
        </BrowserView>

        <MobileView>
        <div className={styles.M_container2}>
            
        </div>
        </MobileView>
        </div>
        </>
    );
}



export default Sentiment;