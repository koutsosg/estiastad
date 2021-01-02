import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
 
 
 const Social = () => {
     return (
 <div>
        <a
          href="https://www.facebook.com/"
          name="Facebook"
          title="Like Us On Facebook"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook Link"
        >
          <FontAwesomeIcon className="cColor" size="lg" icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/"
          name="Youtube"
          title="Subscribe Our Channel"
          target="_blank"
          style={{ color: "white" }}
          rel="noreferrer"
          aria-label="Youtube Link"
        >
          <FontAwesomeIcon className="mx-1 eColor" size="lg" icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/"
          title="Contact Aggu"
          name="Instagram"
          target="_blank"
           style={{ color: "white" }}
          rel="noreferrer"
          aria-label="Instagram Link"
        >
          <FontAwesomeIcon
            className="mx-1 bColor"
            size="lg"
            icon={faInstagram}
          />
        </a>
      </div>
     )
 }
     export default Social