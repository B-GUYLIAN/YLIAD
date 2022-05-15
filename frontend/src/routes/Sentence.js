





function Sentence({sentence}){

    const {content, sentiment, confidence} = sentence
    let percent = 0
    let textcolor = 'white'
    let textsenti = '감정'


    if (sentiment ==='positive'){
        textcolor = 'blue';
        percent = confidence.positive
        textsenti = '긍정적'
    } else if (sentiment ==='neutral'){
        textcolor ='#ffed54'
        percent = confidence.neutral
        textsenti = '중립'
    } else if (sentiment ==='negative'){
        textcolor ='red'
        percent = confidence.negative
        textsenti = '부정적'
    }

    return (
        <>
            <div style={{color:`${textcolor}`}}>
                {content} 
                <br/> ⇨ &nbsp;  [ {textsenti} : {percent} ]
            </div>
        </>
    );
}





export default Sentence;