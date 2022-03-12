import React from "react";
import { FaGithub, FaCopy } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Button } from "react-bootstrap";

const Intro = ({ setShowToast, setToastMsg }) => {
  let myEmail = "lmfjeff@gmail.com";

  const copyToClipboard = (text) => {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("value", text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    setToastMsg("Copied to clipboard");
    setShowToast(true);
  };

  return (
    <>
      <div
        style={{ backgroundImage: "url(/background2.jpg)" }}
        className="intro"
      >
        <h1>Jeff Lau</h1>
        <h2>Web / Android Developer </h2>
        <p className="mt-3">
          <a
            href="https://github.com/lmfjeff"
            target="_blank"
            rel="noreferrer"
            className="mr-4 icon"
          >
            <FaGithub size="3em" />
          </a>
          <a
            href="https://www.fiverr.com/jefflmf"
            target="_blank"
            rel="noreferrer"
            className="mr-4 icon"
          >
            <SiFiverr size="3em" />
          </a>
          <Button
            className="fab d-inline-flex align-items-center"
            onClick={() => copyToClipboard(myEmail)}
          >
            <MdEmail size="1.5em" className="emailIcon" />
            <FaCopy size="1.5em" className="copyIcon " />
          </Button>
        </p>
      </div>
    </>
  );
};

export default Intro;
