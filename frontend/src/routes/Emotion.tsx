import { Link } from "react-router-dom";
import base from "./Base.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import styles from "./Emotion.module.css"
import { useNavigate, useParams } from "react-router-dom";
import Stars from "../components/layout/Stars"
import Navbar from "../components/layout/Navbar";
import Love from "../assets/images/love.png";
import Joy from "../assets/images/joy.png";
import Sad from "../assets/images/sad.png";
import Fear from "../assets/images/fear.png";
import Anger from "../assets/images/anger.png";
import Disgust from "../assets/images/disgust.png";


function Emotion(){

    const params = useParams();
    const navigate = useNavigate();

    function moveToSelectDiary(color: string): void{
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }


    return (
        <>
        <Stars />
        <Navbar />
        <div className={base.container}> 
            <BrowserView>
                <div className={styles.P_container}>
                    <p> 감정 선택 </p>
                    <div onClick={()=>{
                        moveToSelectDiary('green')}} id={styles.greenbox}> 녹색 </div>
                    <div onClick={()=>{
                        moveToSelectDiary('purple')}} id={styles.purplebox}> 보라 </div>
                    <div onClick={()=>{
                        moveToSelectDiary('yellow')}} id={styles.yellowbox}> 노랑 </div>
                    <div onClick={()=>{
                        moveToSelectDiary('blue')}} id={styles.bluebox}> blue </div>
                    <div onClick={()=>{
                        moveToSelectDiary('red')}} id={styles.redbox}> red </div>
                    <div onClick={()=>{
                        moveToSelectDiary('pink')}} id={styles.pinkbox}> pink </div>
                </div>
            </BrowserView>


            <MobileView>
            <div className={styles.M_container}>
                    <p> Emotion </p>
                    <div onClick={()=>{
                        moveToSelectDiary('red')}} id={styles.redbox_M}> 
                        <div id={styles.borderR}> ANGER 
                        <img id={styles.icon2} src={Anger} alt="anger" />
                        </div> </div>
                    <div onClick={()=>{
                        moveToSelectDiary('green')}} id={styles.greenbox_M}> 
                        <div id={styles.borderG}> DISGUST 
                        <img id={styles.icon2} src={Disgust} alt="disgust" />
                        </div> </div>
                    <div onClick={()=>{
                        moveToSelectDiary('purple')}} id={styles.purplebox_M}>
                        <div id={styles.borderP}> FEAR 
                        <img id={styles.icon} src={Fear} alt="fear" />
                        </div> </div>
                    <div onClick={()=>{
                        moveToSelectDiary('yellow')}} id={styles.yellowbox_M}> 
                        <div id={styles.borderY}> JOY 
                        <img id={styles.icon} src={Joy} alt="joy" />
                        </div> </div>
                    <div onClick={()=>{
                        moveToSelectDiary('blue')}} id={styles.bluebox_M}> 
                        <div id={styles.borderB}> SAD 
                        <img id={styles.icon} src={Sad} alt="sad" />
                        </div> </div>

                        <div onClick={()=>{
                        moveToSelectDiary('pink')}} id={styles.pinkbox_M}> 
                        <div id={styles.borderPink}> Love 
                        <img id={styles.icon} src={Love} alt="love" />
                        </div> </div>
                    
            </div>
            </MobileView>

        </div>
        </>
    );
}

export default Emotion;