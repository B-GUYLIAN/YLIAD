import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import base from "./Base.module.css"
import Styles from "./Text.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';

//form에서 받은 Props -> onSubmit 함수(인자로 form:{...}을 받음)
//form의 textdiary는 문자
// type textdiaryProps = {
//     onSubmit: (form: {textdiary: string}) => void
// };

// function TextDiary({onSubmit} : textdiaryProps){
function TextDiary(){
    const params = useParams();
    const navigate = useNavigate();

    //뒤로가기 버튼
    function moveselectDiary(){
        const date = params.date
        const color = params.color
        navigate(`/selectdiary/${date}/${color}`)
    }
    
    //textarea 값 받기
    const [text, setText] = useState<string>("");
    console.log("1",text);
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

    const SavaDiary = () =>{

    }

    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
                <div className={base.container}>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                        <textarea name="textdiary" value={text} onChange={(
                            ev: React.ChangeEvent<HTMLTextAreaElement>,
                            ): void => setText(ev.target.value)} id={Styles.contentP} 
                        >
                        </textarea>
                        <div className={Styles.buttonP}>
                            <img onClick={SavaDiary} className={Styles.saveP} src="https://img.icons8.com/ios-filled/32/FFFFFF/installing-updates--v1.png" alt="SavaDiary"/>
                            <img onClick={moveselectDiary} className={Styles.backP} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
                        </div>
                </div>
            </BrowserView>
            <MobileView>
                <s></s><div className={base.container}>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                        <textarea name="textdiary" value={text} onChange={(
                            ev: React.ChangeEvent<HTMLTextAreaElement>,
                            ): void => setText(ev.target.value)} id={Styles.content} 
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