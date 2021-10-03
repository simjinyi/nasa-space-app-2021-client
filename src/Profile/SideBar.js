import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss"


export default function SideBar(){
    const [showSidebar, setShowSidebar] = useState(true);

    //connect database
    const userName = [
        {title:"Jin Yi", text:"Mission To Mars"},
        {title:"Wei Juin", text:"Mission To"},
        {title:"Kuan Sin", text:"Home Sweet Home"},
        {title:"Jeffrey", text:"dsfsdfsd"},
        {title:"Wei Yang", text:"dsfsddfdffsd"},
        {title:"Jaclyn", text:"dsfsddfdffsd"}
    ]

    // sidebar that contains all the user from the database
    return (
        <div className={"sidebar" + (showSidebar ? " active" : "")}>
        <div className="header">
          <div className="title">
            <h3>Space-Com</h3>
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
            {userName.map((val,key) => {
                return (
                    <li key={key} 
                        className ="row"
                        onClick={()=>{ }}>
                            <div id="title">{val.title}</div>
                    </li>
                );
            })}
        </div>
      </div>
    );
}
