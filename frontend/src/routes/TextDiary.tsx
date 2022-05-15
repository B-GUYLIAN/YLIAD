import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import base from "./Base.module.css"
import Styles from "./Text.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import spring from "../assets/images/spring.png"
import spring2 from "../assets/images/spring2.png"

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

    //뒤로가기 버튼
    const color = params.color
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

    //감정에 따라 일기 색 바꾸기
    let bgcolor :string|undefined = color;
    //color 바꾸기
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

    //일기 저장하기
    const SavaDiary = () =>{

    }

    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
                <div className={base.container}>
                    {/* <Link to="/lobby"><button> 로비로 이동 </button></Link> */}
                        {/* <div className={Styles.cylinderP} style={{left:'29.9vw'}}></div> */}
                        {/* <div className={Styles.cylinderP} style={{left:'29vw'}}></div> */}
                        {/* <img src={spring} alt="spring" style={{width: '35vw', top:'16vh', position:'absolute', zIndex:'2'}} /> */}
                        <img src={spring2} alt="spring" style={{width: '6.5vw', top:'19.5vh', position:'absolute', zIndex:'2', left:'27.6vw'}} />
                       
                    {Font ==='Font1' ? 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily:'Donoun-Medium'}}
                    > 
                    </textarea>
                    : Font ==='Font2' ? 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily:'GangwonEdu_OTFBoldA'}}
                    > 
                    </textarea>
                    : Font ==='Font3'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'Pretendard'}}
                    > 
                    </textarea>
                    : Font === 'Font4'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'CookieRun-Regular'}}
                    > 
                    </textarea>
                    : Font === 'Font5'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'SDMiSaeng'}}
                    > 
                    </textarea> : 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.contentP} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'SDMiSaeng'}}
                    > 
                    </textarea>
                    }
                        
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
                        <div className={Styles.cylinder} style={{top: '8.5rem'}}></div>
                        {Font ==='Font1' ? 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily:'Donoun-Medium'}}
                    > 
                    </textarea>
                    : Font ==='Font2' ? 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily:'GangwonEdu_OTFBoldA'}}
                    > 
                    </textarea>
                    : Font ==='Font3'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'Pretendard'}}
                    > 
                    </textarea>
                    : Font === 'Font4'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'CookieRun-Regular'}}
                    > 
                    </textarea>
                    : Font === 'Font5'?
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'SDMiSaeng'}}
                    > 
                    </textarea> : 
                    <textarea name="textdiary" value={text} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setText(ev.target.value)} 
                        id={Styles.content} 
                        // className={Styles.timeP}
                        style={{backgroundColor:`${bgcolor}`,
                    fontFamily: 'SDMiSaeng'}}
                    > 
                    </textarea>
                    }
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