import "./liveCommunicationLobby.css"
import { useState } from "react";
import Swal from 'sweetalert2'

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  const roomInfo = [
    { roomName: "Mission ABC", roomOwner: "Jeffrey Tan", numberOfPerson: 100 },
    { roomName: "Mission XYZ", roomOwner: "Sim Jin Yi", numberOfPerson: 37 },
    { roomName: "Mission Impossible", roomOwner: "Lau Kuan Sin", numberOfPerson: 45 },
    { roomName: "Mission Apollo", roomOwner: "Calvin", numberOfPerson: 22 },
    { roomName: "Mission KCK", roomOwner: "Jaclyn", numberOfPerson: 29 },
    { roomName: "Mission 123", roomOwner: "Yap Wen Juin", numberOfPerson: 68 },
    { roomName: "Mission KFC", roomOwner: "Leong Yong Peng", numberOfPerson: 1 }
  ];

  const roomCard = (card) => {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{"Room Name: " + card.roomName}</h5>
            <p className="room-owner">{"Room Owner: " + card.roomOwner}</p>
            <p className="room-people">{"Total number of people: " + card.numberOfPerson}</p>
          </div>
        </div>
      </div>
    )
  }

  function addRoomDialog() {
    Swal.fire({
      title: "Enter the name of room",
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Create',
      preConfirm: (roomName) => {
        if (roomName == "") {
          Swal.showValidationMessage("Room name cannot be empty!")
        }
      },
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          'You have created a new room with name ' + result.value,
          'success'
        )
      }
    })
  }

  return (
    <div className="LiveCommunicationLobby">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/landing">
            <img src={require('../images/nasaLogo.svg').default} width="30" height="30" className="d-inline-block align-top" alt="" />
            NASA
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/landing">Home <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={addRoomDialog}>Add Room</button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row top-buffer">
            <div className="col-md mx-auto">
              <h1 className="text-white title">
                Live Communication Lobby
                </h1>
            </div>
          </div>
          <div className="row-mx-15">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control search-form" placeholder="Search by room name or room owner..."
                aria-label="Search" onChange={(event) => { setSearchTerm(event.target.value) }} />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {roomInfo.filter((val) => {
                if (searchTerm == "") {
                  return val
                } else if (val.roomOwner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.roomName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map(roomCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
