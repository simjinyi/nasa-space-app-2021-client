import React, { useState } from "react";
import SideBar from "./SideBar";
import MissionCard from "./MissionCard";
import "./style.scss"

function Profile() {
    return(
        <div className="bg">
            <SideBar />
            <MissionCard/>
        </div>
    )
}

export default Profile;