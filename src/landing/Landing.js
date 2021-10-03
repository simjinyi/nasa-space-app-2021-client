import "./landing.css"
import Swal from 'sweetalert2'

function App() {
  function clickLiveCommunicationBtn() {
    window.location.href = '/liveCommunicationLobby'
  }

  function clickHistoryLogBtn() {
    window.location.href = '/historyLogLobby'
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
    <div className="Landing">
      <div className="background">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/landing">
            <img src={require('../images/nasaLogo.svg').default} width="30" height="30" className="d-inline-block align-top" alt=""/>
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
        <div className="d-flex flex-row buttonGroup">
          <button type="button" className="liveComButton" onClick={clickLiveCommunicationBtn}>
            <span>Live Communication</span>
          </button>
          <button type="button" className="hisLogButton" onClick={clickHistoryLogBtn}>
            <span>History Logs</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
