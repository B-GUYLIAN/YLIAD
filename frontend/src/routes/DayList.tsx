import { Link, useNavigate, useParams } from "react-router-dom";
import base from "./Base.module.css"
import Navbar from "../components/layout/Navbar";
import Stars2 from "../components/layout/Stars2";
import styles from "./DayList.module.css"
import { BrowserView, MobileView } from 'react-device-detect';
import axios from "axios";
import { useEffect, useState } from 'react';
import Love from "../assets/images/love.png";
import Joy from "../assets/images/joy.png";
import Sad from "../assets/images/sad.png";
import Fear from "../assets/images/fear.png";
import Anger from "../assets/images/anger.png";
import Disgust from "../assets/images/disgust.png";
import DayDiary from "./DayDiary";
import moment from "moment";

function DayList(){
    const params = useParams();
    const navigate = useNavigate();
    const date: string|undefined = params.date; //넘어오는 값은 20220519'st
    // const date ="2022-05-22"
    const year = date?.slice(0,4);
    const month = date?.slice(4,6);
    const day = date?.slice(-2);
    console.log(year, month, day);

    const[content, setContent] = useState<string>('')

    const token: string | null = sessionStorage.getItem("token");
    const userid: string | null = sessionStorage.getItem("userid");
    const Font = sessionStorage.getItem("Font");
    
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
    
    const [diaryDate, setDiaryDate] = useState(''); //일기 작성일
    const [diarylist, setDiarylist] = useState<any>([]); //일기 리스트
    const [emotion, setEmotion] = useState<string>('sad'); //감정 색
    //일기 불러오기
    useEffect(() => {
        axios
            .post('https://k6a308.p.ssafy.io/api-diary/api/diary/date',
                {
                    day,
                    month,
                    userID: userid,
                    year,
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                }
            )
            .then((res) => {
                console.log("일기 출력", res);
                setDiarylist(res.data);
                setContent(res.data.content); //일기 내용 받고
                setEmotion(res.data.emotion); //일기 감정 받고
                setDiaryDate(res.data.diaryDate); //일기 감정 받고
            })
    },[])
    
    let bgcolor = emotion;
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

    function moveselectDiary(){
        navigate(`/calendar`)
    }

    return (
        <>
            <Navbar />
            <Stars2 />
            <BrowserView>
            <div className={base.container}> 
                <div id={styles.date}
                 style={{ fontFamily:`${fontstyle}`}}> {year}-{month}-{day}</div>
                 
                 {diarylist.map((index:any, key:any) => {
                     if(index.emotion === 'anger'){
                         return <Link 
                          to={`/dayDiary/${date}`} 
                          state={{content: index.content, emotion:index.emotion}} 
                          key={index.diaryDate}
                          id={styles.contentP} 
                          style={{ backgroundColor:'#FB5E3B95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                             <span>{(index.content).slice(0,16)}...</span>
                            {/* <span> &#32;[{(index.diaryDate).slice(-5)}]</span> */}
                            <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Anger} alt="anger" />
                                
                    </Link>
                     }
                     else if(index.emotion === 'love'){
                        return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         key={index.diaryDate}
                         id={styles.contentP} 
                         style={{ backgroundColor:'#FEA0E495', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                            <span>{(index.content).slice(0,16)}...</span>
                            <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Love} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'fear'){
                        return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         key={index.diaryDate}
                         id={styles.contentP} 
                         style={{ backgroundColor:'#CA77FE95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Fear} alt="fear" />
                    </Link>
                    }
                     else if(index.emotion === 'joy'){
                        return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         id={styles.contentP}  
                         key={index.diaryDate}
                         style={{ backgroundColor:'#FDD03B95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Joy} alt="love" />
                        </Link>
                    }
                     else if(index.emotion === 'sad'){
                        return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         key={index.diaryDate}
                         id={styles.contentP} 
                         style={{ backgroundColor:'#6AA6FF95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Sad} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'disgust'){
                        return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         key={index.diaryDate}
                         id={styles.contentP} 
                         style={{ backgroundColor:'#D3FFB095', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                         >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'1.5vw', height:'3vh', marginTop:'-0.4vh'}} src={Disgust} alt="Disgust" />
                    </Link>
                    }
                })}
                <img onClick={moveselectDiary} id={styles.back} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
            </div>
             </BrowserView>

             <MobileView >
             <div className={base.container}> 

                <div id={styles.dateM}
                 style={{ fontFamily:`${fontstyle}`}}> {year}-{month}-{day}</div>
                   
                     {/* <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: 'what?!', emotion:'joy'}} 
                         id={styles.contentM} 
                         style={{ backgroundColor:'#FB5E3B95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        // onClick={readDiary}
                     >
                            호달달달2
                            <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Anger} alt="anger" />
                     </Link> */}

                {diarylist.map((index:any, key:any) => {
                     if(index.emotion === 'anger'){
                         return <Link 
                         to={`/dayDiary/${date}`} 
                         state={{content: index.content, emotion:index.emotion}} 
                         key={index.diaryDate}
                         id={styles.contentM} 
                         style={{ backgroundColor:'#FB5E3B95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                         >
                            <span>{(index.content).slice(0,16)}...</span>
                            <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Anger} alt="anger" />
                    </Link>
                     }
                     else if(index.emotion === 'love'){
                        return <Link 
                        to={`/dayDiary/${date}`} 
                        state={{content: index.content, emotion:index.emotion}} 
                        key={index.diaryDate}
                        id={styles.contentM} 
                        style={{ backgroundColor:'#FEA0E495', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                            <span>{(index.content).slice(0,16)}...</span>
                            <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Love} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'fear'){
                        return <Link 
                        to={`/dayDiary/${date}`} 
                        state={{content: index.content, emotion:index.emotion}} 
                        key={index.diaryDate}
                        id={styles.contentM} 
                        style={{ backgroundColor:'#CA77FE95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Fear} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'joy'){
                        return <Link 
                        to={`/dayDiary/${date}`} 
                        state={{content: index.content, emotion:index.emotion}} 
                        key={index.diaryDate}
                        id={styles.contentM} 
                        style={{ backgroundColor:'#FDD03B95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Joy} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'sad'){
                        return <Link 
                        to={`/dayDiary/${date}`} 
                        state={{content: index.content, emotion:index.emotion}} 
                        key={index.diaryDate}
                        id={styles.contentM} 
                        style={{ backgroundColor:'#6AA6FF95', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Sad} alt="love" />
                    </Link>
                    }
                     else if(index.emotion === 'disgust'){
                        return <Link 
                        to={`/dayDiary/${date}`} 
                        state={{content: index.content, emotion:index.emotion}} 
                        key={index.diaryDate}
                        id={styles.contentM} 
                        style={{ backgroundColor:'#D3FFB095', fontFamily:`${fontstyle}`, display:'flex', justifyContent:'space-between'}}
                        >
                                <span>{(index.content).slice(0,16)}...</span>
                                <img style={{width:'2rem', height:'2rem', marginTop:'-0.05rem'}} src={Disgust} alt="love" />
                    </Link>
                    }
                })}
            </div>
            <img onClick={moveselectDiary} id={styles.backM} src="https://img.icons8.com/office/30/FFFFFF/undo.png" alt="selectDiary"/>
             </MobileView>
        
        </>

    );
}

export default DayList;