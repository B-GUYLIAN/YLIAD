import { Card } from 'antd';
import styles from '../../routes/Clinic.module.css'
import { BrowserView, MobileView } from 'react-device-detect';

const { Meta } = Card;

function CardComponent(props) {
    return (
        <>       
        <BrowserView>
        <Card
            style={{ width: 300 }}
            cover={
                <img id={styles.cardimg}
                    alt={props.cardInfo.fields.description.stringValue}
                    src={props.cardInfo.fields.image.stringValue} />
            }
            
        >
            <div id={styles.cardtextbox}>

            <Meta id={styles.cardtext}
                description={props.cardInfo.fields.description.stringValue}
            />
            </div>

                <a id={styles.cardlink}
                target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>
                    Youtube 링크로 이동하기
                </a>

        </Card>
        </BrowserView>

        <MobileView >
            <Card
            style={{ width: 300 }}
            cover={
                <img id={styles.cardimg_M}
                    alt={props.cardInfo.fields.description.stringValue}
                    src={props.cardInfo.fields.image.stringValue} />
            }
            
        >
            <div id={styles.cardtextbox_M}>

            <Meta id={styles.cardtext_M}
                description={props.cardInfo.fields.description.stringValue}
            />
            </div>

                <a id={styles.cardlink_M}
                target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>
                    Youtube 링크로 이동하기
                </a>

        </Card>

        </MobileView>
        </>


    )
}

export default CardComponent
