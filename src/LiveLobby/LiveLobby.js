import "./style.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";

function LiveLobby() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const roomInfo = [
    { roomName: "Mission ABC", roomOwner: "Jeffrey Tan", numberOfPerson: 100 },
    { roomName: "Mission XYZ", roomOwner: "Sim Jin Yi", numberOfPerson: 37 },
    {
      roomName: "Mission Impossible",
      roomOwner: "Lau Kuan Sin",
      numberOfPerson: 45,
    },
    { roomName: "Mission Apollo", roomOwner: "Calvin", numberOfPerson: 22 },
    { roomName: "Mission KCK", roomOwner: "Jaclyn", numberOfPerson: 29 },
    { roomName: "Mission 123", roomOwner: "Yap Wen Juin", numberOfPerson: 68 },
    {
      roomName: "Mission KFC",
      roomOwner: "Leong Yong Peng",
      numberOfPerson: 1,
    },
  ];

  const roomCard = (card1, card2) => {
    if (!card2)
      return (
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{"Room Name: " + card1.roomName}</h5>
                <p className="room-owner">{"Room Owner: " + card1.roomOwner}</p>
                <p className="room-people">
                  {"Total number of people: " + card1.numberOfPerson}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    return (
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{"Room Name: " + card1.roomName}</h5>
              <p className="room-owner">{"Room Owner: " + card1.roomOwner}</p>
              <p className="room-people">
                {"Total number of people: " + card1.numberOfPerson}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{"Room Name: " + card2.roomName}</h5>
              <p className="room-owner">{"Room Owner: " + card2.roomOwner}</p>
              <p className="room-people">
                {"Total number of people: " + card2.numberOfPerson}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const generateRoom = (roomInfo) => {
    const rooms = roomInfo.filter((val) => {
      if (searchTerm !== "") {
        if (
          val.roomOwner.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.roomName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
        return false;
      }
      return true;
    });

    let res = [];
    for (let i = 0; i < rooms.length; i += 2) {
      res.push(roomCard(rooms[i], rooms[i + 1]));
    }

    return res;
  };

  function addRoomDialog() {
    Swal.fire({
      title: "Enter the name of room",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Create",
      preConfirm: (roomName) => {
        if (roomName == "") {
          Swal.showValidationMessage("Room name cannot be empty!");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "You have created a new room with name " + result.value,
          "success"
        );
      }
    });
  }

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="bg-overlay">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h1 className="text-white text-center">Live Communication</h1>
            </div>
          </div>
          <div className="container">
            <div className="mb-5 d-flex">
              <div className="flex-grow-1 mr-5">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Search by room name or room owner..."
                  aria-label="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  class="btn btn-success"
                  type="submit"
                  onClick={addRoomDialog}
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  Add Room
                </button>
              </div>
            </div>

            {generateRoom(roomInfo)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveLobby;
