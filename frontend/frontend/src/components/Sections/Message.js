import AD from '../../assets/images/AD.png' 
import USER from '../../assets/images/user.png' 
import styles from '../../routes/Clinic.module.css'
import { BrowserView, MobileView } from 'react-device-detect';

function Message(props) {

   

    return (
        <>
        <BrowserView>
        <div id={styles.MessageBox_P}>
            { props.who === '아드'? 
            <div id={styles.imgtag}>
                <img id={styles.AD} src={AD} alt='avatar' />
            </div>:
            <div id={styles.imgtag2}>
                <img id={styles.USER} src={USER} alt='avatar' />   
            </div>
            }
            { props.who === '아드'? 
            <>
            <div id={styles.nametag}>{props.who}</div>
            <span id={styles.texttag}>{props.text}</span>
            </> :
            <>
            <div id={styles.nametag2}>
                <div id={styles.username}>{props.who}</div>
                </div>
            <div id={styles.texttag2}>
                <div id={styles.usertext2}>
                    <span id={styles.usertext}>{props.text}</span>
                </div>
            </div>
            </>
            }
        </div>    
        </BrowserView>
        <MobileView>
            <div id={styles.MessageBox_M}>
            
            { props.who === '아드'? 
            <>
            <div id={styles.imgtag_M}>
                <img id={styles.AD_M} src={AD} alt='avatar' />
            </div>
            <div id={styles.nametag_M}>{props.who}</div>
            <div id={styles.texttag3_M}>
                <div id={styles.texttag_M}>{props.text}</div>
            </div>
            </> :
            <>
            <div id={styles.imgtag2_M}>
                <img id={styles.USER_M} src={USER} alt='avatar' />   
            </div>
            <div id={styles.nametag2_M}>
                <div id={styles.username_M}>{props.who}</div>
                </div>
            <div id={styles.texttag2_M}>
                <div id={styles.usertext_M}>{props.text}</div>
            </div>
            </>
            }
        </div>   
        </MobileView>
        </>

    )
}

export default Message
