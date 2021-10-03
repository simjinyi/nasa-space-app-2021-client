import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPaperPlane,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { io } from "socket.io-client";
import "./style.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router";

export default function LiveCommunication() {
  const [messageInput, setMessageInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [zoomIdx, setZoomIdx] = useState(-1);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);

  const { id: missionID } = useParams();

  const socket = io("ws://192.168.0.203:8081/", {
    // Need the JWT token here
    query: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTkyYWYzMWQ0NjVkYjMwOWE1NjViMCIsInVzZXJuYW1lIjoic2ltamlueWkiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2MzMyNDUxNTB9.CHIBwi8zTo5CrD6igcWMmcLv-9m3uGjdD2fbHqRfpJw",
      missionID,
    },
  });

  const handleDateTimeString = (dateTime) => {
    const object = new Date(dateTime);
    return object.toLocaleString();
  };

  const handleMessage = useCallback(
    (message) => ({
      timestamp: handleDateTimeString(message.timestamp),
      username: message.username,
      body: message.payload[0].contentBody,
    }),
    []
  );

  const handleInput = (value) => {
    setMessageInput(value);
  };

  const handleSend = () => {
    // Ensure that the message is not empty
    if (!messageInput) {
      return;
    }

    socket.emit("createMessage", {
      missionID,
      content: messageInput,
    });

    setMessageInput("");
  };

  useEffect(() => {
    document.title = "Live Communication";
  }, []);

  useEffect(() => {
    socket.on("messageCreated", (response) => {
      const newMessage = handleMessage(response);
      setMessages([...messages, newMessage]);
    });
  }, [socket, handleMessage, messages]);

  useEffect(() => {
    socket.emit("initialize", {});

    socket.on("messagesLoaded", (response) => {
      if (!response) {
        setError(true);
        return;
      }

      setMessages(response.map((message) => handleMessage(message)));
      setError(false);
    });
  }, [socket, missionID, handleMessage]);

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("image", file);
            fetch(`http://localhost:8080/upload`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `http://localhost:8080/${res.path}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  if (error) {
    return <div>Invalid Room ID</div>;
  }

  return (
    <div className="bg">
      <div className={"sidebar" + (showSidebar ? " active" : "")}>
        <div className="header">
          <div className="title">
            <h3>Hack NASA with HTML</h3>
            <FontAwesomeIcon
              className="hamburger"
              icon={faBars}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </div>
          <hr className="hr-heading" />
          <br />
          <input placeholder="Search..." />
        </div>
        <div className="content">
          <li>
            <img
              className="profile"
              src="https://jeffreytht.live/pic.jpg"
              alt="Jeffrey Tan"
            />
            <div className="profile-name">Tan Hoe Theng</div>
          </li>
          <li>
            <img
              className="profile"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFp5R4fJ92aRg/profile-displayphoto-shrink_200_200/0/1601434863742?e=1638403200&v=beta&t=seY8c0YZzXcbMRFVJvVBv3W5TwUs2zs2zJ4v904b4h8"
              alt="Sim Jin Yi"
            />
            <div className="profile-name">
              <span>Sim Jin Yi</span>
              <br />
              <span className="typing">is typing...</span>
            </div>
          </li>
          <li>
            <img
              className="profile"
              src="https://media-exp1.licdn.com/dms/image/C5635AQF6r6mzqE5Arg/profile-framedphoto-shrink_100_100/0/1601609561042?e=1633204800&v=beta&t=PUc1uo_iXl5Hs1uapp20Q2UEoVzlNBLu1nIx9xTF2OM"
              alt="Jaclyn"
            />
            <div className="profile-name">Jaclyn Neoh Su Ying</div>
          </li>
          <li>
            <img
              className="profile"
              src="https://scontent.fkul8-1.fna.fbcdn.net/v/t1.18169-9/14716166_1502782186415038_6142626552299967482_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yP2oC2ZnYo0AX8cQJ3C&tn=uoqGRqqwFkm6aLHd&_nc_ht=scontent.fkul8-1.fna&oh=9d38a355de40ae42272cc8c8f780a8ea&oe=617E7F40"
              alt="Jaclyn"
            />
            <div className="profile-name">Tan Wei Yang</div>
          </li>
          <li>
            <img
              className="profile"
              src="https://media-exp1.licdn.com/dms/image/D5635AQFl_pqLP1iTMg/profile-framedphoto-shrink_400_400/0/1632202791187?e=1633338000&v=beta&t=JLd_90QdMgec0Ol6XiClbqseYT_R7yRVNTNFxycEUMY"
              alt="Jaclyn"
            />
            <div className="profile-name">Lau Kuan Sin</div>
          </li>
          <li>
            <img
              className="profile"
              src="https://scontent.fkul8-1.fna.fbcdn.net/v/t1.6435-9/131692598_3841080082610840_2205449051390480024_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v4Q-aoH0SzIAX8kZsp-&tn=uoqGRqqwFkm6aLHd&_nc_ht=scontent.fkul8-1.fna&oh=db13419a0096d2221b324d2d791ef4cf&oe=617FA49B"
              alt="Jaclyn"
            />
            <div className="profile-name">Yap Wei Juin</div>
          </li>
        </div>
      </div>
      <div className="main-content">
        <div
          className={
            "console-logs" +
            (zoomIdx === 1 ? " zoom" : zoomIdx === -1 ? "" : " hide")
          }
        >
          <div className="header">
            <h3>All</h3>
            {zoomIdx !== 1 ? (
              <button className="btn h-100">
                <FontAwesomeIcon
                  icon={faExpandArrowsAlt}
                  onClick={() => {
                    setZoomIdx(1);
                  }}
                />
              </button>
            ) : (
              <button className="btn h-100">
                <FontAwesomeIcon
                  icon={faCompressArrowsAlt}
                  onClick={() => {
                    setZoomIdx(-1);
                  }}
                />
              </button>
            )}
          </div>
          <div className="all-logs">
            <div className="log">
              <span className="date">3/10/2021 13:00</span> <br />
              <span className="author">Tan Hoe Theng:</span>
              <div>
                <p>
                  Okay, that the signal strength would just drop off and yaw
                  would go to zero and pitch would go to 90.
                </p>
              </div>
            </div>
            <div className="log">
              <span className="date">3/10/2021 13:02</span> <br />
              <span className="author">Sim Jin Yi:</span>
              <div>
                <p>
                  <b>Apollo 13</b>, Houston. The next thing we'd like you to do
                  is to...
                </p>
              </div>
            </div>
            <div className="log">
              <span className="date">3/10/2021 13:05</span> <br />
              <span className="author">Jaclyn Neoh Su Ying:</span>
              <div className="w-100">
                <img
                  style={{ height: "250px" }}
                  src={require("../../src/images/cryopanel.png").default}
                />
                <br />
                <small>
                  MDC controls and displays for the cryogenic tanks.
                </small>
              </div>
            </div>
            <div className="log">
              <span className="date">3/10/2021 13:08</span> <br />
              <span className="author">Tan Wei Yang:</span>
              <div>
                <p>
                  Roger. We see it. And we got a reading of minus 2 degrees on
                  the docking index. We'd like to know if that's 2.0 precise or
                  if it's 2.1 or 1.9.
                </p>
              </div>
            </div>
            <div className="log">
              <span className="date">3/10/2021 13:10</span> <br />
              <span className="author">Lau Kuan Sin:</span>
              <div>
                <audio
                  controls
                  autoPlay
                  src={require("../../src/images/horse.mp3").default}
                />
              </div>
            </div>
            <div className="log">
              <span className="date">2/10/2021 13:15</span> <br />
              <span className="author">Yap Wei Juin:</span>
              <div>
                [Garble.] Ah, Houston, we've had a problem. We've had a Main B
                Bus Undervolt.
              </div>
            </div>

            {messages.map((message, index) => (
              <div className="log" key={index}>
                <span className="date">{message.timestamp}</span> <br />
                <span className="author">{message.username}:</span>
                <div dangerouslySetInnerHTML={{ __html: message.body }} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            "console-logs" +
            (zoomIdx === 2 ? " zoom" : zoomIdx === -1 ? "" : " hide")
          }
        >
          <div className="header">
            <h3>My logs</h3>
            {zoomIdx !== 2 ? (
              <button className="btn h-100">
                <FontAwesomeIcon
                  icon={faExpandArrowsAlt}
                  onClick={() => {
                    setZoomIdx(2);
                  }}
                />
              </button>
            ) : (
              <button className="btn h-100">
                <FontAwesomeIcon
                  icon={faCompressArrowsAlt}
                  onClick={() => {
                    setZoomIdx(-1);
                  }}
                />
              </button>
            )}
          </div>
          <div className="all-logs">
            <div className="log">
              <span className="date">3/10/2021 13:00</span>
              <span className="text-info ml-2">Edit</span> <br />
              <span className="author">Jeffrey Tan:</span>
              <div>
                <p>
                  Okay, that the signal strength would just drop off and yaw
                  would go to zero and pitch would go to 90.
                </p>
              </div>
            </div>
          </div>
          <div className="ckeditor">
            <CKEditor
              editor={ClassicEditor}
              data={messageInput}
              onReady={(editor) => {
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                handleInput(data);
                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                // console.log("Focus.", editor);
              }}
              config={{
                extraPlugins: [uploadPlugin],
              }}
            />
          </div>
          <div className="my-message">
            <button className="btn btn-info h-100 mr-3" onClick={handleSend}>
              <span className="mr-3">Send</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <button className="btn btn-info h-100" onClick={handleSend}>
              <span className="mr-3">Approve</span>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
