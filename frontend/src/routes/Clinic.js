import base from "./Base.module.css";
import Stars2 from "../components/layout/Stars2";
import Navbar from "../components/layout/Navbar";
import styles from "./Clinic.module.css";
import { BrowserView, MobileView } from "react-device-detect";
import cure from "../assets/images/cure.png";
import React, { useEffect, useRef } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../_actions/message_actions";
import Message from "../components/Sections/Message";
import Card from "../components/Sections/Card";
import ReactScrollableFeed from "react-scrollable-feed";
import AD from "../assets/images/AD.png";

function Clinic() {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);
  const divRef = useRef(null);
  const nickname = sessionStorage.getItem("nickname");

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    eventQuery("Basic");
  }, []);

  const textQuery = async (text) => {
    //  First  Need to  take care of the message I sent
    let conversation = {
      who: nickname,
      content: {
        text: {
          text: text,
        },
      },
    };

    dispatch(saveMessage(conversation));
    // console.log('text I sent', conversation)

    // We need to take care of the message Chatbot sent
    const textQueryVariables = {
      text,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "/api/dialogflow/textQuery",
        textQueryVariables
      );

      for (let content of response.data.fulfillmentMessages) {
        conversation = {
          who: "아드",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      conversation = {
        who: "아드",
        content: {
          text: {
            text: "Error가 발생했어요.. 확인해 주세요!",
          },
        },
      };

      dispatch(saveMessage(conversation));
    }
  };

  const eventQuery = async (event) => {
    // We need to take care of the message Chatbot sent
    const eventQueryVariables = {
      event,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "/api/dialogflow/eventQuery",
        eventQueryVariables
      );
      for (let content of response.data.fulfillmentMessages) {
        let conversation = {
          who: "아드",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      let conversation = {
        who: "아드",
        content: {
          text: {
            text: "Error가 발생했어요.. 확인해 주세요!",
          },
        },
      };
      dispatch(saveMessage(conversation));
    }
  };

  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type somthing first");
      }

      //we will send request to text query route
      textQuery(e.target.value);

      e.target.value = "";
    }
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  const renderOneMessage = (message, i) => {
    // we need to give some condition here to separate message kinds

    // template for normal text
    if (message.content && message.content.text && message.content.text.text) {
      return (
        <Message key={i} who={message.who} text={message.content.text.text} />
      );
    } else if (message.content && message.content.payload.fields.card) {
      // const AvatarSrc = message.who === '아드' ?
      // <Icon type="robot" /> : <Icon type="smile" />

      return (
        <>
          <BrowserView>
            <div id={styles.CardBox_P}>
              <div id={styles.imgtag}>
                <img id={styles.AD} src={AD} alt="avatar" />
                <div id={styles.nametag3}>{message.who}</div>
                <div>
                  {" "}
                  {renderCards(
                    message.content.payload.fields.card.listValue.values
                  )}
                </div>
                <div ref={divRef} />
              </div>
            </div>
          </BrowserView>
          <MobileView>
            <div id={styles.CardBox_P}>
              <div id={styles.imgtag}>
                <img id={styles.AD_M} src={AD} alt="avatar" />
                <div id={styles.nametag3_M}>{message.who}</div>
                <div>
                  {" "}
                  {renderCards(
                    message.content.payload.fields.card.listValue.values
                  )}
                </div>
                <div ref={divRef} />
              </div>
            </div>
          </MobileView>
        </>
      );
    }
  };

  const renderMessage = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <Navbar />
      <Stars2 />
      <BrowserView>
        <div className={base.container}>
          <div className={styles.title_P}>
            {" "}
            아드 심리 상담소
            <img id={styles.cure} src={cure} alt="cure" />
          </div>

          <div className={styles.massenger_P}>
            <ReactScrollableFeed forceScroll="true">
              <div id={styles.text_read}>
                {renderMessage(messagesFromRedux)}
              </div>
              <div ref={divRef} />
            </ReactScrollableFeed>

            <input
              id={styles.text_input}
              type="text"
              onKeyPress={keyPressHanlder}
              maxLength="20"
              placeholder="메세지를 입력해주세요."
            />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={base.container}>
          <div className={styles.title_M}>
            {" "}
            아드 심리 상담소
            <img id={styles.cure_M} src={cure} alt="cure" />
          </div>

          <div className={styles.massenger_M}>
            <ReactScrollableFeed forceScroll="true">
              <div id={styles.text_read_M}>
                {renderMessage(messagesFromRedux)}
              </div>
              <div ref={divRef} />
            </ReactScrollableFeed>

            <input
              id={styles.text_input_M}
              type="text"
              onKeyPress={keyPressHanlder}
              placeholder="메세지를 입력해주세요."
              maxLength="10"
            />
          </div>
        </div>
      </MobileView>
    </>
  );
}

export default Clinic;
