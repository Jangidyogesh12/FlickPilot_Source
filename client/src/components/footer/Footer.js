import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_container">
        <ul className="social-icons">
          <li>
            <a href="https://twitter.com/YogeshS47791368">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yogesh-sharma-45201b231/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Jangidyogesh12">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yogeshsharma2131/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="mailto:jangidyogesh123@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
