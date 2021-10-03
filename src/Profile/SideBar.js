import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPaperPlane,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";


export default function LiveCommunication(){
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <div className="bg">
            <div className={"sidebar" + (showSidebar ? " active" : "")}>
                <div className="header">
                    <div className="title">
                        <h3>Menu</h3>
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
                        <div className="profile-name">Dato' Seri Paduka Tan Hoe Theng</div>
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

                </div>
            </div>
        </div>
  );
}

 /**
        <div className="main-content">
            <div className="console-logs">
            <div className="header">
                <h3>All</h3>
            </div>
            
            <div className="all-logs">
                <div className="log">
                <span className="date">12-12-2021 05:24</span> <br />
                <span className="author">Jeffrey:</span> Nothing
                </div>

                <div className="log">
                <span className="date">12-12-2021 05:29</span> <br />
                <span className="author">Jeffrey:</span>
                你知不知道 你知不知道， 我等到花儿也谢了 喔哦哦
                </div>

                <div className="log">
                {
                    lyrics.map((lyric) =>
                    <div>
                    <div>
                        <span className="date">{lyric.time}</span><br/>
                        <span className="author">{lyric.type}</span> {lyric.word}
                    </div>
                    <br />
                    </div>
                    )
                }
                </div>

                <div className="log">
                {
                    <div>
                    Count : {count}
                    Toggled : {isToggled}
                    Test : {testerVariable}
                    //{Toggled : {isToggled === 0 ? <p> The value is 0 </p> : <p> The value is 1 </p>}}
                    </div>
                }
                </div>




                    </div>
            </div>
        </div>
    */