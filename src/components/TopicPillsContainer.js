import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopicPillsContainer = () =>
    <div>
        <ul className="nav nav-pills nav-fill wbdv-topic-pill-list">
            <li className="nav-item wbdv-topic-pill">
                <a className="nav-link btn btn-pill" href="#">Topic 1</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a className="nav-link btn btn-pill" href="#">Topic 2</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a className="nav-link btn btn-pill" href="#">Topic 3</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a className="nav-link btn btn-pill" href="#">Topic 4</a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn wbdv-topic-add-btn btn-pill" href="#">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>

export default TopicPillsContainer