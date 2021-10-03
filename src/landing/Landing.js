import "./landing.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faFileArchive,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

function Landing() {
  const history = useHistory();

  function clickLiveCommunicationBtn() {
    history.replace("/liveCommunicationLobby");
  }

  // view past logs
  function clickHistoryLogBtn() {
    history.replace("/lockedLogLobby");
  }

  return (
    <div className="landing">
      <div className="background">
        <div className="d-flex flex-row buttonGroup">
          <button
            type="button"
            className="liveComButton"
            onClick={clickLiveCommunicationBtn}
          >
            <FontAwesomeIcon className="icon" icon={faFileSignature} />
            <h2>Live</h2>
          </button>
          <button
            type="button"
            className="hisLogButton"
            onClick={clickHistoryLogBtn}
          >
            <FontAwesomeIcon className="icon" icon={faFileArchive} />
            <h2>Past Log</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
