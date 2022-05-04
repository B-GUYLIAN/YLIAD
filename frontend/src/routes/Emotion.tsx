import { Link } from "react-router-dom";
import base from "./Base.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import styles from "./Emotion.module.css"
import { useNavigate, useParams } from "react-router-dom";


function Emotion(){

    const params = useParams();
    const navigate = useNavigate();

    function moveToSelectDiary(color: string): void{
        const date = params.date
        navigate(`/selectdiary/${date}/${color}`)
    }


    return (
        <div className={base.container}> 
            <BrowserView>
                <div className={styles.P_container}>
                    <p> 감정 선택 </p>
                    <div onClick={()=>{
                        moveToSelectDiary('green')}} id={styles.greenbox}> green </div>
                    <div onClick={()=>{
                        moveToSelectDiary('purple')}} id={styles.purplebox}> purple </div>
                    <div onClick={()=>{
                        moveToSelectDiary('yellow')}} id={styles.yellowbox}> yellow </div>
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
                    <p> 감정 선택 </p>
                    <div onClick={()=>{
                        moveToSelectDiary('green')}} id={styles.greenbox_M}> green </div>
                    <div onClick={()=>{
                        moveToSelectDiary('purple')}} id={styles.purplebox_M}> purple </div>
                    <div onClick={()=>{
                        moveToSelectDiary('yellow')}} id={styles.yellowbox_M}> yellow </div>
                    <div onClick={()=>{
                        moveToSelectDiary('blue')}} id={styles.bluebox_M}> blue </div>
                    <div onClick={()=>{
                        moveToSelectDiary('red')}} id={styles.redbox_M}> red </div>
                    <div onClick={()=>{
                        moveToSelectDiary('pink')}} id={styles.pinkbox_M}> pink </div>
            </div>

            </MobileView>

        </div>
    );
}

export default Emotion;