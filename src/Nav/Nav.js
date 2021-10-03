import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src={require("../images/nasaLogo.svg").default}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt=""
        />
        NASA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/liveCommunicationLobby" class="nav-link" href="#">
              Live <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/lockedLogLobby" class="nav-link" href="#">
              Past logs
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => history.replace("./")}
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                onClick={() => history.replace("./login")}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
