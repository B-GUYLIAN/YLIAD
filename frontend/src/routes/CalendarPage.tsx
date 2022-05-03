import { Link } from "react-router-dom";
import base from "./Base.module.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { BrowserView, MobileView } from 'react-device-detect';
import { useState } from 'react';


function CalendarPage(){

    const [date, setDate] = useState(new Date());

    return (
        <div className={base.container}> 
            <BrowserView>
                <div className='P_container'>
                    <Calendar
                    onChange={setDate} 
                    value={date}    
                    showNeighboringMonth={false}
                    next2Label=""
                    prev2Label=""
                    ></Calendar>
                </div>
                    

                    <Link to="/lobby"><button> 로비로 이동 </button></Link>
                    <Link to="/emotion"><button> 감정 선택 </button></Link>
                     <Link to="/dayDiary"><button> 날짜별 일기 </button></Link>
            </BrowserView>

            <MobileView>
                <div className='M_container'>
                <Calendar
                    onChange={setDate} 
                    value={date}    
                    showNeighboringMonth={false}
                    next2Label=""
                    prev2Label=""
                    ></Calendar>
                </div>
            </MobileView>

        </div>
    );
}

export default CalendarPage;