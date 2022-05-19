import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import base from "./Base.module.css"
import Styles from "./Text.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import spring from "../assets/images/spring.png"
import spring2 from "../assets/images/spring2.png"
import {toast, ToastContainer} from 'react-toastify';
import axios from "axios";

//form에서 받은 Props -> onSubmit 함수(인자로 form:{...}을 받음)
//form의 textdiary는 문자
// type textdiaryProps = {
//     onSubmit: (form: {textdiary: string}) => void
// };

// function TextDiary({onSubmit} : textdiaryProps){
function TextDiary(){
    const params = useParams();
    const navigate = useNavigate();
    const Font = sessionStorage.getItem("Font");
    const token:any = sessionStorage.getItem("token");
    const userid = sessionStorage.getItem("userid");

    //뒤로가기 버튼
    const color = params.color
    const date = params.date
    function moveselectDiary(){
        const color = params.color
        navigate(`/selectdiary/${date}/${color}`)
    }
    
    //textarea 값 받기
    const [text, setText] = useState<string>("");
    // const [text, setText] = useState({textdiary: '' });
    // const textdiary = text;
    // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const {textdiary, value} = e.target;
    //     // const {value} = e.target;
    //     setText({...text, [textdiary] : value});
    // };

    // e: any로 지정하고 마우스를 올라면 해당 이벤트의 type을 볼 수 있다.
    // handleSubmit이 발생하면 기존에 일어나던 이벤트를 없애고
    // form을 인자로 넣어 onSubmit 함수를 실행시킨다
    // form 초기화한다.
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     onSubmit(text);
    //     setText({
    //         textdiary: ''
    //     }); //초기화
    // };

    //감정에 따라 일기 색 바꾸기
    let bgcolor :string|undefined = color;
    //color 바꾸기
    if(bgcolor === 'red'){
        bgcolor = '#FB5E3B95'
    } else if(bgcolor === 'pink'){
        // bgcolor = '#FFB7EB95'
        bgcolor = '#FEA0E495'
        // bgcolor = '#FA7ED795'
    } else if(bgcolor === 'purple'){
        // bgcolor = '#DCA3FF95'
        bgcolor = '#CA77FE95'
    } else if(bgcolor === 'yellow'){
        // bgcolor = '#FFE69295'
        // bgcolor = '#FFDE6D95'
        bgcolor = '#FDD03B95'
    } else if(bgcolor === 'blue'){
        bgcolor = '#6AA6FF95'
    } else if(bgcolor === 'green'){
        bgcolor = '#D3FFB095'
    }

    //전송 성공 alert
    function send() {
        toast.success("저장 완료!", {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable:true,
        });
    };

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
        fontstyle = 'KOTRAHOPE';
    }

    //일기 저장하기
    // const SavaDiary = () =>{

    //전송 실패 alert
    function fail() {
        toast.error("저장 실패!", {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable:true,
        });
    };
    //색 감정으로 변환하기
    let emotion = "";
    if(color === 'red'){
        emotion = 'anger';
    } else if(color === 'pink'){
        emotion = 'love';
    } else if(color === 'purple'){
        emotion = 'fear';
    } else if(color === 'yellow'){
        emotion = 'joy';
    } else if(color === 'blue'){
        emotion = 'sad';
    } else if(color === 'green'){
        emotion = 'disgust';
    };


    //text 백엔드에 전송
    function SavaDiary(){
        axios.post("https://k6a308.p.ssafy.io/api-diary/api/diary",
                {
                    "content" : text,
                    "emotion" : emotion,
                    "userID": userid,
                    "voiceFilePath": "text"
                },
                {
                    headers:{
                        "Authorization" : token,
                    }
                }

            )
            .then((res) => {
                console.log("저장 완료!", res)
                send();
                setText('');
                // navigate(`/selectdiary/${date}/${color}`)
            })
            .catch(error => {
                console.log("저장 실패!", error.response)
                fail();
            })
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <Stars2 />
            <BrowserView>
                <div className={base.container}>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                        {/* <div className={Styles.cylinderP} style={{left:'29.9vw'}}></div> */}
                        {/* <div className={Styles.cylinderP} style={{left:'29vw'}}></div> */}
                        {/* <img src={spring} alt="spring" style={{width: '35vw', top:'16vh', position:'absolute', zIndex:'2'}} /> */}
                        <img src={spring2} alt="spring" style={{width: '6.5vw', top:'24vh', position:'absolute', zIndex:'2', left:'27.4vw'}} />

                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily:`${fontstyle}`}}
                    > 
                    </textarea>
                        
                        {/* <div className={Styles.cylinderP} style={{right:'29.9vw'}}></div> */}
                        {/* <div className={Styles.cylinderP} style={{right:'29vw'}}></div> */}
                        <div className={Styles.buttonP}>
                            <img onClick={SavaDiary} className={Styles.saveP} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                            <img onClick={moveselectDiary} className={Styles.backP} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                        </div>
                </div>
            </BrowserView>
            <MobileView>
                <s></s><div className={base.container}>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                    {/* <div className={Styles.cylinder} style={{top: '8.5rem'}}></div> */}
                    <img src={spring} alt="spring" style={{width: '22rem', top:'8.7rem', position:'absolute', zIndex:'2'}} />
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                        fontFamily:`${fontstyle}`}}
                    > 
                    </textarea>
                  
                        <div className={Styles.button}>
                            <img onClick={SavaDiary} className={Styles.save} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                            <img onClick={moveselectDiary} className={Styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                        </div>
                </div>
            </MobileView>
        </>
    );
}

export default TextDiary;