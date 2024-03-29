import React, { useEffect } from "react";
const facebookAppId = "2106496549385767";
export function CustomerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v9.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
        theme_color="#505554"
      />
    </>
  );
}
/*  */
